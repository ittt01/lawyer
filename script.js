// Mobile menu
  const burger=document.getElementById('burger'),menu=document.getElementById('menu');
  const closeMenu=()=>{
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded','false');
  };
  burger.onclick=()=>{
    const isOpen=menu.classList.toggle('open');
    burger.setAttribute('aria-expanded',String(isOpen));
  };
  menu.querySelectorAll('a').forEach(a=>a.onclick=closeMenu);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});

  // Reveal on scroll
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Counters
  document.querySelectorAll('[data-count]').forEach(el=>{
    const end=+el.dataset.count;let cur=0;const step=Math.max(1,Math.ceil(end/60));
    const t=setInterval(()=>{cur+=step;if(cur>=end){cur=end;clearInterval(t)}el.textContent=cur.toLocaleString()+'+'},25);
  });

  // Back to top
  const tt=document.getElementById('toTop');
  addEventListener('scroll',()=>tt.classList.toggle('show',scrollY>600));

  // Form (demo only: connect to your backend, Formspree, or email service)
  document.getElementById('contactForm').onsubmit=e=>{
    e.preventDefault();document.getElementById('formMsg').style.display='block';e.target.reset();
  };
  document.getElementById('yr').textContent=new Date().getFullYear();
