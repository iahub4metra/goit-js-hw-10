import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as C,i as y}from"./assets/vendor-77e16229.js";let x;const g={title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",message:"Illegal operation",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",position:"topRight",backgroundColor:"#EF4040",iconUrl:"../img/toast-rejected.svg"},b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=Date.now();t[0]<=r?(s.disabled=!0,y.error(g)):(x=t[0],s.disabled=!1),console.log(t[0])}},f=document.querySelector("#datetime-picker");C(f,b);const s=document.querySelector("button[data-start]");s.disabled=!0;const d=document.querySelector("span[data-days]"),u=document.querySelector("span[data-hours]"),l=document.querySelector("span[data-minutes]"),m=document.querySelector("span[data-seconds]");s.addEventListener("click",function(t){const r=new Date(x).getTime();s.disabled=!0,f.disabled=!0;const p=setInterval(function(){const h=new Date().getTime(),a=r-h,i=S(a),{days:e,hours:n,minutes:o,seconds:c}=i;e<10?d.textContent=`0${e}`:d.textContent=e,n<10?u.textContent=`0${n}`:u.textContent=n,o<10?l.textContent=`0${o}`:l.textContent=o,c<10?m.textContent=`0${c}`:m.textContent=c,a<0&&(clearInterval(p),d.textContent="00",u.textContent="00",l.textContent="00",m.textContent="00",f.disabled=!1)},1e3)});function S(t){const i=Math.floor(t/864e5),e=Math.floor(t%864e5/36e5),n=Math.floor(t%864e5%36e5/6e4),o=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:e,minutes:n,seconds:o}}
//# sourceMappingURL=commonHelpers.js.map
