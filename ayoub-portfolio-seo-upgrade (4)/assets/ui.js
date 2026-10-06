(()=>{
 const root=document.documentElement;
 const themeButtons=[...document.querySelectorAll('.theme-toggle')];
 const syncTheme=()=>{const dark=root.dataset.theme==='dark';themeButtons.forEach(b=>{b.setAttribute('aria-pressed',String(dark));const label=dark?b.dataset.lightLabel:b.dataset.darkLabel;b.setAttribute('aria-label',label);b.title=label;});};
 syncTheme();
 themeButtons.forEach(b=>b.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;try{localStorage.setItem('ayoub-theme-v2',next);}catch(e){}syncTheme();}));
 const language=document.getElementById('language-switch');
 if(language)language.addEventListener('change',()=>{window.location.assign(language.value);});
 const menuButton=document.querySelector('.menu-toggle'),menu=document.getElementById('mobile-menu');
 const setMenu=open=>{if(!menuButton||!menu)return;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?menuButton.dataset.closeLabel:menuButton.dataset.openLabel);};
 if(menuButton&&menu){menuButton.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){setMenu(false);menuButton.focus();}});document.addEventListener('click',ev=>{if(!ev.target.closest('.site-header'))setMenu(false);});window.addEventListener('resize',()=>{if(window.innerWidth>940)setMenu(false);});}
})();(()=>{
 const modal=document.querySelector('.evidence-dialog');
 if(!modal||typeof modal.showModal!=='function')return;
 const img=modal.querySelector('.evidence-full-image'),caption=modal.querySelector('#evidence-caption'),full=modal.querySelector('.evidence-full-link'),close=modal.querySelector('.evidence-close');let trigger;
 document.querySelectorAll('[data-proof-image]').forEach(link=>link.addEventListener('click',ev=>{ev.preventDefault();trigger=link;img.src=link.dataset.proofImage;img.alt=link.dataset.proofCaption;caption.textContent=link.dataset.proofCaption;full.href=link.dataset.proofImage;modal.showModal();close.focus();}));
 close.addEventListener('click',()=>modal.close());
 modal.addEventListener('click',ev=>{if(ev.target===modal){const r=modal.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)modal.close();}});
 modal.addEventListener('close',()=>{if(trigger)trigger.focus();});
})();
