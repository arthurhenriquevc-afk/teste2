import { company } from '../data/company';
export type Quote = {stage:string;name:string;phone:string;email:string;city:string;message:string};
export function quoteMessage(data:Quote):string {
 return ([['Em que etapa a obra está',data.stage],['Nome',data.name],['WhatsApp',data.phone],['E-mail',data.email],['Cidade da obra',data.city],['Conte sobre a obra',data.message]]).filter(([,value])=>value.trim()).map(([label,value])=>`${label}: ${value.trim()}`).join('\n');
}
// Substitua somente esta função para integrar futuramente um endpoint de e-mail.
export function submitQuote(data:Quote):void {
 const url=`${company.whatsapp}?text=${encodeURIComponent(quoteMessage(data))}`;
 window.open(url,'_blank','noopener');
}
