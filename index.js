import{i as p,S as v,a as $}from"./assets/vendor-Dpd1z_xS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l=document.querySelector(".container"),L=document.getElementById("search-input"),w=document.getElementById("search-button"),r=document.querySelector(".load-more-btn"),d=document.createElement("span");d.className="loader";let f=1,P=40,c=0;r.style.display="none";w.addEventListener("click",async s=>{r.style.display="block",l.parentNode.insertBefore(d,l),m(9e4),s.preventDefault(),l.innerHTML="",c=0,await b().then(o=>{c+=o.hits.length,o.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.style.display="none"):c>=o.totalHits?(p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),r.style.display="none"):r.style.display="block";const a=o.hits.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:y,comments:u,downloads:g})=>`<div class="item">
            <a href="${e}">
            <img
            class="gallery-image"
            src="${n}"
            alt="${t}"
            />
            <div class="info">
            <p class="info-item">
                <b>Likes <br/> ${i}</b>
            </p>
            <p class="info-item">
                <b>Views <br/> ${y}</b>
            </p>
            <p class="info-item">
                <b>Comments <br/> ${u}</b>
            </p>
            <p class="info-item">
                <b>Downloads <br/> ${g}</b>
            </p>
            </div>
            </a>
            </div>`).join("");l.insertAdjacentHTML("beforeend",a),m(9e4),d.style.display="none",h.refresh()}).catch(o=>{console.error("Hata oluştu:",o)})});let h=new v(".container a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});async function b(){try{return(await $.get("https://pixabay.com/api/",{params:{key:"26694191-13f704d2e0e711d67f08fd2b2",q:L.value,per_page:P,page:f,image_type:"photo",orientation:"horizontal"}})).data}catch(s){console.error("Hata oluştu:",s)}}function m(s){return new Promise(o=>setTimeout(o,s))}r.addEventListener("click",async()=>{f++,await b().then(s=>{c+=s.hits.length,s.hits.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.style.display="none"):c>=s.totalHits?(console.log("CSS",noResults.style.display),p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),r.style.display="none"):r.style.display="block";const o=s.hits.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:y,downloads:u})=>`<div class="item">
            <a href="${n}">
            <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
            />
            <div class="info">
            <p class="info-item">
                <b>Likes <br/> ${t}</b>
            </p>
            <p class="info-item">
                <b>Views <br/> ${i}</b>
            </p>
            <p class="info-item">
                <b>Comments <br/> ${y}</b>
            </p>
            <p class="info-item">
                <b>Downloads <br/> ${u}</b>
            </p>
            </div>
            </a>
            </div>`).join("");l.insertAdjacentHTML("beforeend",o),m(9e4),d.style.display="none",h.refresh()}).catch(s=>{console.error("Hata oluştu:",s)})});
//# sourceMappingURL=index.js.map
