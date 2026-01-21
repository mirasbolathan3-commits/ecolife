
let current='kz';
function apply(){
 document.querySelectorAll('[data-kz]').forEach(el=>{
  el.textContent = current==='kz'?el.dataset.kz:el.dataset.ru;
 });
}
function setLang(l){current=l;apply();}
document.addEventListener('DOMContentLoaded',apply);

const q = [
 {item:'Bottle', kz:'Пластик', ru:'Пластик'},
 {item:'Newspaper', kz:'Қағаз', ru:'Бумага'}
];
const el=document.getElementById('quiz');
if(el){
 q.forEach(o=>{
  const d=document.createElement('div');
  d.innerHTML=o.item+' → '+o.kz+' / '+o.ru;
  el.appendChild(d);
 });
}
