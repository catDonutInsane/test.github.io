function L(){import("data:text/javascript,")}const u=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};u();customElements.define("map-card",class extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){let n=document.getElementById("q"),r=new Date().getTime(),i=document.createElement("script");i.type="module",i.src="src/index.js?"+r,i.id="q",n?n.parentNode.replaceChild(i,n):document.body.append(i)},e=>{document.getElementById("app").innerHTML="<div>\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u0430\u0440\u0442\u044B</div>",console.log("\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ",e)}):console.log("\u0413\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044F \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F")}});let f=document.getElementById("app");function h(){sessionStorage.getItem("startTime")||sessionStorage.setItem("startTime",Date.now());function e(){let r=sessionStorage.getItem("startTime");return Date.now()-r}function n(){let r=e(),i=Math.floor(r/1e3)%60,t=Math.floor(r/(1e3*60))%60,o=Math.floor(r/(1e3*60*60));sessionStorage.setItem("spentTime",`${o} : ${t} : ${i}`),new URL(window.location.href).pathname.slice(1)==="clock"&&(f.innerHTML=`<div>${o} : ${t} : ${i}</div>`)}n()}setInterval(h,1e3);let g=document.querySelector(".tabs-item_first");g.addEventListener("click",()=>c("portfolio"));let y=document.querySelector(".tabs-item_second");y.addEventListener("click",()=>c("map"));let w=document.querySelector(".tabs-item_third");w.addEventListener("click",()=>c("clock"));let T=document.querySelectorAll(".tabs-item"),l=document.getElementById("app");window.addEventListener("popstate",()=>{a()});let a=()=>{let e=new URL(window.location.href).pathname;e.slice(1)==="map"?m():e.slice(1)==="clock"?p():(e.slice(1)==="portfolio"||e==="/")&&d()};function d(){l.innerHTML="",l.style.height="100%",fetch("pages/portfolio.html").then(e=>e.text()).then(e=>l.innerHTML=e)}function m(){l.innerHTML="",l.style.height="500px";const e=document.createElement("map-card");l.appendChild(e)}function p(){l.innerHTML="",l.style.height="500px";let e=sessionStorage.getItem("spentTime");l.innerHTML=e}function c(e){e=="portfolio"?(window.history.pushState("portfolio","","portfolio"),d()):e=="clock"?(window.history.pushState("clock","","clock"),p()):(window.history.pushState("map","","map"),m()),T.forEach(n=>n.classList.contains(new URL(window.location.href).pathname.slice(1))?n.style.background="lightgrey":n.style.background="white")}a();export{L as __vite_legacy_guard};
