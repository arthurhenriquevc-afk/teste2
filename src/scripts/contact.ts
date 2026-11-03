import { submitQuote, type Quote } from './submit-quote';
const form=document.querySelector<HTMLFormElement>('#quote-form')!;
const phone=form.elements.namedItem('phone') as HTMLInputElement;
phone.addEventListener('input',()=>{
 const digits=phone.value.replace(/\D/g,'').slice(0,11);
 phone.value=digits.length>2?`(${digits.slice(0,2)}) ${digits.slice(2,7)}${digits.length>7?'-'+digits.slice(7):''}`:digits;
});
const messages:Record<string,string>={stage:'Escolha a etapa da obra.',name:'Informe seu nome.',phone:'Informe o WhatsApp com DDD e 11 dígitos.',email:'Informe um e-mail válido.',city:'Escolha a cidade da obra.'};
function validate(field:HTMLInputElement|HTMLSelectElement){
 let error='';const value=field.value.trim();
 if(field.required&&!value) error=messages[field.name];
 else if(field.name==='phone'&&value.replace(/\D/g,'').length!==11) error=messages.phone;
 else if(field.name==='email'&&value&&!field.validity.valid) error=messages.email;
 const element=document.getElementById(field.id+'-error')!;
 element.textContent=error;element.hidden=!error;
 field.setAttribute('aria-invalid',String(Boolean(error)));
 return !error;
}
const fields=Array.from(form.querySelectorAll<HTMLInputElement|HTMLSelectElement>('input,select'));
fields.forEach(f=>{f.addEventListener('blur',()=>{if(f.getAttribute('aria-invalid')==='true')validate(f);});f.addEventListener('input',()=>{if(f.getAttribute('aria-invalid')==='true')validate(f);});});
form.addEventListener('submit',e=>{
 e.preventDefault();let first:HTMLElement|undefined;
 fields.forEach(f=>{if(!validate(f)&&!first)first=f;});
 const status=form.querySelector<HTMLElement>('[role=status]')!;
 if(first){status.textContent='Revise os campos indicados.';first.focus();return;}
 const values=Object.fromEntries(new FormData(form)) as Quote;
 submitQuote(values);
 status.textContent='A solicitação foi preparada para abrir no WhatsApp. Confirme o envio na conversa.';
});
