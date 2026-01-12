 class TimerT5V25B2 {
    cS='.section-5-25-2';
    pS={h:'[data-timer-part="hours"]',m:'[data-timer-part="minutes"]',s:'[data-timer-part="seconds"]'};
    t={s:null,e:null};
    p={h:null,m:null,s:null};
    constructor(){
      this.c = document.querySelector(this.cS);
      Object.keys(this.pS).map((p, i)=>{this.p[p]=this.c.querySelector(this.pS[p]);});
      this.sCT();
      this.co();
    }
    sCT(){
      this.t.s=new Date;
      this.t.e=new Date;
      this.t.e.setHours(23);
      this.t.e.setMinutes(59);
      this.t.e.setSeconds(59);
    }
    co(){
      this.iI = setInterval(this.pr.bind(this), 1000);
    }
    pr(){
      this.t.s=new Date;
      if(this.t.s.getTime()>=this.t.e.getTime()){this.t.e.setDate(this.t.e.getDate()+1);}
      let s=Math.floor((this.t.e.getTime()-this.t.s.getTime())/1000);
      let h=Math.floor(s/3600);
      s-=h*3600;
      let m=Math.floor(s/60);
      s-=m*60;
      let vS=s>9?`${s}`:`0${s}`;
      let vM=m>9?`${m}`:`0${m}`;
      let vH=h>9?`${h}`:`0${h}`;
      if(this.p.s.firstElementChild.innerText!==vS[0]){this.p.s.firstElementChild.innerText=vS[0];}
      if(this.p.s.lastElementChild.innerText!==vS[1]){this.p.s.lastElementChild.innerText=vS[1];}
      if(this.p.m.firstElementChild.innerText!==vM[0]){this.p.m.firstElementChild.innerText=vM[0];}
      if(this.p.m.lastElementChild.innerText!==vM[1]){this.p.m.lastElementChild.innerText=vM[1];}
      if(this.p.h.firstElementChild.innerText!==vH[0]){this.p.h.firstElementChild.innerText=vH[0];}
      if(this.p.h.lastElementChild.innerText!==vH[1]){this.p.h.lastElementChild.innerText=vH[1];}
    }
  }

  const timerT5V25B2 = new TimerT5V25B2();   document.addEventListener('DOMContentLoaded',(g)=>{
    const bT6V27B5=document.querySelector(".section-6-27-5 > button");
    const fT6V27B5=document.querySelector("section > form:last-of-type");
    if(bT6V27B5 && fT6V27B5){bT6V27B5.addEventListener('click',(e)=>{e.preventDefault();fT6V27B5.scrollIntoView({behavior: "smooth"});})}
  });   document.addEventListener('DOMContentLoaded',(g)=>{
    const bT6V27B8=document.querySelector(".section-6-27-8 > button");
    const fT6V27B8=document.querySelector("section > form:last-of-type");
    if(bT6V27B8 && fT6V27B8){bT6V27B8.addEventListener('click',(e)=>{e.preventDefault();fT6V27B8.scrollIntoView({behavior: "smooth"});})}
  });   // Reviews
  class ReviewsT13V47B11 {
    cS='.section-13-47-11';
    alS='span[data-slider-arrow="left"]';
    arS='span[data-slider-arrow="right"]';
    wS='[data-slider]';
    sS='[data-slide]';
    hC='hidden';
    aC='animation';
    constructor(){
      this.c = document.querySelector(this.cS);
      this.al = this.c.querySelector(this.alS);
      this.ar = this.c.querySelector(this.arS);
      this.w = this.c.querySelector(this.wS);
      this.al.addEventListener('click', this.alC.bind(this));
      this.ar.addEventListener('click', this.arC.bind(this));
    }

    alC(){
      let s=this.w.querySelectorAll(this.sS);
      if(s.length>1){
        let sI=-1;
        s.forEach((el,i)=>{
          if(el.classList.contains(this.hC)){sI=i;}
          el.classList.remove(this.aC);
        });
        if(sI===-1){
          s.forEach((el,i)=>{
            if(i!==(s.length-1)){
              el.classList.add(this.hC);
            } else {
              el.classList.add(this.aC);
              setTimeout(() => {
                el.classList.remove(this.aC);
              }, 500);
            }
          });
        } else {
          s.forEach((el,i)=>{
            if(i<(sI)){
              if(!el.classList.contains(this.hC)){
                el.classList.add(this.hC);
              }
            } else {
              el.classList.remove(this.hC);
              el.classList.add(this.aC);
              setTimeout(() => {
                el.classList.remove(this.aC);
              }, 500);
            }
          });
        }

      }
    }

    arC(){
      let s=this.w.querySelectorAll(this.sS);
      if(s.length>1){
        let sI=-1;
        s.forEach((el,i)=>{
          if(el.classList.contains(this.hC)){sI=i;}
          el.classList.remove(this.aC);
        });
        /*console.log('slider index', sI);*/
        if((sI+1)===(s.length-1)){
          s.forEach((el,i)=>{
            el.classList.remove(this.hC);
            el.classList.add(this.aC);
            setTimeout(() => {
              el.classList.remove(this.aC);
            }, 500);
          });
        } else {
          s.forEach((el,i)=>{
            if(i<=(sI+1)){
              if(!el.classList.contains(this.hC)){
                el.classList.add(this.hC);
              }
            } else {
              el.classList.remove(this.hC);
              el.classList.add(this.aC);
              setTimeout(() => {
                el.classList.remove(this.aC);
              }, 500);
            }
          });
        }

      }
    }

  }

  const reviewsT13V47B11 = new ReviewsT13V47B11();

const BOT_TOKEN = "7631117819:AAGRiKducFezYaBVner-hVqFBQXjwDQ9eUI"
const CHAT_ID = "893778297"

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const name = this.name.value.trim()
  const phone = this.phone.value.trim()

  if (!name || !phone) {
    alert("Заповніть всі поля")
    return
  }

  const message = `
🔥 НОВЕ ЗАМОВЛЕННЯ
👤 Імʼя: ${name}
📞 Телефон: ${phone}
📦 Товар: Електрообігрівач 3в1
💰 Ціна: 1999 грн
  `

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "HTML"
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        window.location.href = "checkout.html" // ✅ редірект після успіху
      } else {
        alert("Помилка відправки")
      }
    })
    .catch(() => {
      alert("Помилка з'єднання")
    })
})
