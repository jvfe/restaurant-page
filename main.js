(()=>{"use strict";function e(e,t){for(let n in t)e.setAttribute(n,t[n])}function t(t){t.textContent="";const n=function(){const e=document.createElement("main");return e.classList.add("center"),e}();n.appendChild(function(){const t=document.createElement("div");t.classList.add("center","main-card");const n=function(){const e=document.createElement("div");e.classList.add("title-section");const t=document.createElement("h1");t.classList.add("title","title1"),t.textContent="Coruja";const n=document.createElement("h2");return n.classList.add("title","title2"),n.textContent="café",e.appendChild(t),e.appendChild(n),e}(),c=function(){const t=document.createElement("div");t.classList.add("center","main-description");const n=document.createElement("img");e(n,{class:"tea-pic",src:"assets/img/tea-picture.jpg",alt:"Cozy picture of tea"});const c=document.createElement("div");c.classList.add("center","rest-about");const o=document.createElement("p");o.textContent="Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz     malandris se pirulitá. Tá deprimidis, eu conheço uma cachacis     que pode alegrar sua vidis. Todo mundo vê os porris que eu tomo     mas ninguém vê os tombis que eu levo! Nec orci ornare consequat.    Praesent lacinia ultrices consectetur. Sed non ipsum felis.";const a=document.createElement("button");return a.classList.add("menu-btn"),a.textContent="Our Menu",c.appendChild(o),c.appendChild(a),t.appendChild(n),t.appendChild(c),t}();return t.appendChild(n),t.appendChild(c),t}()),function(t,n){const c=function(){const e=document.createElement("header");e.classList.add("center-flex","top-bottom","head");const t=document.createElement("ul");return t.classList.add("center-flex","tabs"),["Home","Menu","Contact"].forEach((e=>{const n=document.createElement("li");n.classList.add(`${e.toLowerCase()}`,"tab","margin-around"),n.textContent=e,t.appendChild(n)})),e.appendChild(t),e}(),o=function(){const t=document.createElement("footer");t.classList.add("center-flex","top-bottom","foot");const n=[document.createElementNS("http://www.w3.org/2000/svg","svg"),document.createElementNS("http://www.w3.org/2000/svg","svg"),document.createElementNS("http://www.w3.org/2000/svg","svg")];return n[0].innerHTML='<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> \n  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path> \n  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',n[1].innerHTML='<path\n    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 \n    4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">\n    </path>',n[2].innerHTML='<path\n    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"\n    ></path>',n.forEach((n=>{e(n,{class:"margin-around social-icon",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t.appendChild(n)})),t}();t.appendChild(c),t.appendChild(n),t.appendChild(o)}(t,n)}const n=document.querySelector("#content");t(n),document.querySelector(".home").addEventListener("click",(()=>t(n)))})();