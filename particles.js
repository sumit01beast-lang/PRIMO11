
(function(){
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const particles = [];
  const NUM = Math.max(24, Math.floor((w*h)/120000));
  for(let i=0;i<NUM;i++){
    particles.push({x:Math.random()*w,y:Math.random()*h,r:0.6+Math.random()*2,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,a:0.06+Math.random()*0.25});
  }
  addEventListener('resize', ()=>{ w=canvas.width=innerWidth; h=canvas.height=innerHeight; });
  function draw(){
    ctx.clearRect(0,0,w,h);
    for(const p of particles){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<-10) p.x=w+10; if(p.x>w+10) p.x=-10;
      if(p.y<-10) p.y=h+10; if(p.y>h+10) p.y=-10;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(10,180,255,'+p.a+')';
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();