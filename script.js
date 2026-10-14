(() => {
  const menu=document.querySelector('.mobile-menu-toggle');
  const nav=document.querySelector('.site-nav');
  if(menu&&nav){
    const close=()=>{menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation menu');nav.classList.remove('is-open');};
    menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');nav.classList.toggle('is-open',open);});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
    document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!nav.contains(e.target))close();});
  }
  const year=document.querySelector('#copyright-year');if(year)year.textContent=new Date().getFullYear();
})();
