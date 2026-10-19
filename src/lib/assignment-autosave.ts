// Script injected into every assignment page: saves all answers to this browser
// every 30 seconds (and shortly after typing), restores them on reload,
// and shows a small floating "Save now" button with the last-saved time.
export function withAutosave(html: string, key: string): string {
  const script = `<script>(function(){
var K='neia_autosave_${key}';
function fields(){return Array.prototype.slice.call(document.querySelectorAll('input,textarea,select')).filter(function(el){return el.type!=='submit'&&el.type!=='button'&&el.type!=='file'&&(el.name||el.id);});}
function id(el,i){return (el.name||el.id)+(el.type==='radio'?'::'+el.value:'')+'#'+(el.name||el.id?'':i);}
function save(manual){try{var d={};fields().forEach(function(el,i){d[id(el,i)]=(el.type==='checkbox'||el.type==='radio')?el.checked:el.value;});localStorage.setItem(K,JSON.stringify({t:Date.now(),d:d}));show('Saved '+new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit',second:'2-digit'})+(manual?' ✓':''));}catch(e){show('Could not save');}}
function restore(){try{var s=JSON.parse(localStorage.getItem(K)||'null');if(!s)return;var n=0;fields().forEach(function(el,i){var v=s.d[id(el,i)];if(v===undefined)return;if(el.type==='checkbox'||el.type==='radio')el.checked=v;else{el.value=v;if(v)n++;}});if(n)show('Restored your saved work');}catch(e){}}
var box=document.createElement('div');box.setAttribute('data-autosave','');box.style.cssText='position:fixed;right:14px;bottom:14px;z-index:99999;display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #ddd;border-radius:999px;padding:6px 6px 6px 14px;box-shadow:0 6px 20px rgba(0,0,0,.15);font:600 13px system-ui,sans-serif;color:#414042';
var lbl=document.createElement('span');lbl.textContent='Autosave on';var b=document.createElement('button');b.type='button';b.textContent='Save now';b.style.cssText='background:#C51C63;color:#fff;border:0;border-radius:999px;padding:7px 14px;font:700 13px system-ui,sans-serif;cursor:pointer';b.onclick=function(){save(true);};box.appendChild(lbl);box.appendChild(b);
var st=document.createElement('style');st.textContent='@media print{[data-autosave]{display:none!important}}';
function show(t){lbl.textContent=t;}
function start(){document.head.appendChild(st);document.body.appendChild(box);restore();setInterval(function(){save(false);},30000);var tm;document.addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(function(){save(false);},2000);});document.addEventListener('change',function(){save(false);});window.addEventListener('beforeunload',function(){save(false);});document.addEventListener('visibilitychange',function(){if(document.hidden)save(false);});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();</script>`;
  return html.replace('</body>', script + '</body>');
}
