const screens=[...document.querySelectorAll(".screen")];
function go(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"});if(id==="birthday")burstHearts(12)}
const music=document.getElementById("music"), musicBtn=document.getElementById("musicBtn");
musicBtn.addEventListener("click",async()=>{try{if(music.paused){await music.play();musicBtn.innerHTML="❚❚ <span>Music</span>"}else{music.pause();musicBtn.innerHTML="♫ <span>Music</span>"}}catch(e){alert("Add your music file as music.mp3 in the website folder, then tap Music again.")}});
const texts={
miss:"If you miss me, come back here and remember that somewhere out there, I'm smiling because I got to know you. 🫂❤️",
sad:"Bad days don't define you. Take a breath, be gentle with yourself, and remember that you don't have to have everything figured out today. 🌷",
angry:"Okay… first, breathe 😭. Whatever happened, I hope we can talk, understand each other and find our way back to a smile. ❤️",
reassure:"You are important to me. You don't have to be perfect or have the right words all the time. Just be you. I'm grateful for you. 🫶"
};
function note(k){document.getElementById("noteBox").textContent=texts[k]}
function burstHearts(n=18){for(let i=0;i<n;i++){setTimeout(()=>{const h=document.createElement("div");h.className="heart";h.textContent=["♥","♡","❤","💕"][Math.floor(Math.random()*4)];h.style.left=Math.random()*100+"vw";h.style.animationDuration=(3+Math.random()*3)+"s";h.style.fontSize=(14+Math.random()*22)+"px";document.body.appendChild(h);setTimeout(()=>h.remove(),7000)},i*90)}}
function celebrate(){for(let i=0;i<80;i++){setTimeout(()=>{const c=document.createElement("div");c.className="confetti";c.textContent=["♥","✦","•"][Math.floor(Math.random()*3)];c.style.left=Math.random()*100+"vw";c.style.fontSize=(10+Math.random()*16)+"px";c.style.animationDuration=(1.5+Math.random()*2)+"s";document.body.appendChild(c);setTimeout(()=>c.remove(),4500)},i*20)}burstHearts(35)}
setInterval(()=>{if(Math.random()<.45)burstHearts(1)},1200);
