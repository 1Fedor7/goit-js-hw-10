import"./assets/styles-CnrFeICR.js";import{f as y,i}from"./assets/vendor-BbbuE1sJ.js";const c=document.getElementById("datetime-picker"),r=document.querySelector("button[data-start]"),S=document.querySelector("[data-days]"),T=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");let a=null,d=null;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<=new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),r.disabled=!0):(a=n,r.disabled=!1)}};y(c,D);r.addEventListener("click",()=>{a&&(E(a),r.disabled=!0,c.disabled=!0)});function E(e){d=setInterval(()=>{const o=e-new Date;if(o<=0){clearInterval(d),u(0,0,0,0),i.success({title:"Success",message:"The countdown has ended!"}),c.disabled=!1;return}const t=I(o);u(t.days,t.hours,t.minutes,t.seconds)},1e3)}function u(e,n,o,t){S.textContent=s(e),T.textContent=s(n),b.textContent=s(o),p.textContent=s(t)}function s(e){return String(e).padStart(2,"0")}function I(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=1-timer.js.map
