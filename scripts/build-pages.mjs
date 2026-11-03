import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The first published home remains reproducible and independent of future UI edits.
const originalCommit = '60a6e9a9017723ea8a182c7516ee15d5133181ac';
const project = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const originalBase = '/teste2/';
const motionBase = `${originalBase}motion/`;
const temporary = mkdtempSync(join(tmpdir(), 'union3d-pages-'));
const original = join(temporary, 'original');
const combined = join(temporary, 'combined');
const output = join(project, 'dist');

function run(command, args, cwd, overrides = {}) {
 execFileSync(command, args, { cwd, stdio: 'inherit', env: { ...process.env, ...overrides } });
}

try {
 assert(existsSync(join(project, 'node_modules')), 'Instale as dependências com npm ci antes de gerar o Pages.');
 run('git', ['cat-file', '-e', `${originalCommit}^{commit}`], project);
 mkdirSync(original);
 const archive = execFileSync('git', ['archive', '--format=tar', originalCommit], { cwd: project, maxBuffer: 64 * 1024 * 1024 });
 execFileSync('tar', ['-x', '-C', original], { input: archive });
 // Reuse the same lockfile-pinned dependencies without a second installation.
 assert.equal(readFileSync(join(original, 'package-lock.json'), 'utf8'), readFileSync(join(project, 'package-lock.json'), 'utf8'), 'O lockfile mudou: reveja as dependências da versão original antes de publicar.');
 symlinkSync(join(project, 'node_modules'), join(original, 'node_modules'), 'dir');
 run('npm', ['run', 'build'], original, { UNION3D_BASE: originalBase });
 cpSync(join(original, 'dist'), combined, { recursive: true });

 run('npm', ['run', 'build'], project, { UNION3D_BASE: motionBase });
 cpSync(output, join(combined, 'motion'), { recursive: true });
 const originalHtml = readFileSync(join(combined, 'index.html'), 'utf8');
 const motionHtml = readFileSync(join(combined, 'motion', 'index.html'), 'utf8');
 assert.equal(originalHtml, readFileSync(join(original, 'dist', 'index.html'), 'utf8'));
 assert(!originalHtml.includes('data-survey-scene'), 'A primeira home recebeu conteúdo da versão animada.');
 assert(motionHtml.includes('data-survey-scene'), 'A home animada não foi incluída.');
 assert(motionHtml.includes(`${motionBase}_astro/`), 'Os recursos da nova home não usam seu caminho próprio.');
 assert(!motionHtml.includes(`"${originalBase}_astro/`), 'A nova home aponta para recursos da versão original.');
 rmSync(output, { recursive: true, force: true });
 cpSync(combined, output, { recursive: true });
 console.log(`Pages pronto: home original em ${originalBase}; home animada em ${motionBase}.`);
 console.log(`A home original foi gerada integralmente do commit ${originalCommit}.`);
} finally {
 rmSync(temporary, { recursive: true, force: true });
}
