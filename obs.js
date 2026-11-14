
'use strict';
const query=new URLSearchParams(location.search);
const nickname=document.getElementById('nickname');
nickname.textContent=(query.get('nick')||'Gracz').trim().slice(0,40)||'Gracz';
const alertType=query.get('alert');
const panel=document.querySelector('.alert');
if(panel&&['follow','sub'].includes(alertType)){
  document.getElementById('alert-title').textContent=alertType==='follow'?'Nowa obserwacja':'Nowa subskrypcja';
  panel.hidden=false;
  setTimeout(()=>panel.hidden=true,6000);
}
