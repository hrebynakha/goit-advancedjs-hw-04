import{S as y,a as L,i as d}from"./assets/vendor-BGz2EIcA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();function x(){return new y(".gallery a",{captionsData:"alt",captionDelay:250})}function u(t){return t.hits.map(e=>`<li class="gallery-item">
	<a class="gallery-link" href="${e.largeImageURL}">
		<img
			class="gallery-image"
			src="${e.webformatURL}"
			alt="${e.tags}"
			/>
	</a>
  <ul class="image-info">
   <li class="image-item-info">
        <span class="text-accent">Likes</span>
        <span class="text-comment">${e.likes}</span>
    </li>
    <li class="image-item-info">
      <span class="text-accent">Views</span>
      <span class="text-comment">${e.views}</span>
    </li>
    <li class="image-item-info">
      <span class="text-accent">Comments</span>
      <span class="text-comment">${e.comments}</span>
    </li>
    <li class="image-item-info">
      <span class="text-accent">Downloads</span>
      <span class="text-comment">${e.downloads}</span>
    </li>
  </ul>
 
</li>`).join("")}function c(t,e,s=""){if(!t){e.classList.add("hide");return}e.classList.remove("hide"),e.dataset.search=s}function f(t,e){if(!t){e.classList.add("hide");return}e.classList.remove("hide")}const b=L.create({baseURL:"https://pixabay.com/api/",params:{key:"46452979-80039da2fd5690445e01cff1c",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function m(t,e=1){const s=await b.get("",{params:{q:t,page:e}});return console.log("axios",s),console.log("total",s.data.total),s.data}function M(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function g(){d.error({message:"Sorry, but something going wrong...!",position:"topRight"})}function p(t,e=1,s=15){return t-e*s>1}function S(){const e=document.querySelector(".gallery").getBoundingClientRect();setTimeout(()=>{window.scrollBy({top:e.height*2,behavior:"smooth"})},500)}const r={gallery:document.querySelector(".gallery"),searchForm:document.getElementById("searchPhotoForm"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".btn-more"),searchEndText:document.querySelector(".text-search-end")};let n=1;r.searchForm.addEventListener("submit",w);r.loadMore.addEventListener("click",v);const h=x();async function w(t){t.preventDefault(),n=1;const e=t.currentTarget,s=e.elements.q.value.trim();c(!1,r.loadMore),f(!1,r.searchEndText),r.loader.classList.remove("loader-off");try{const i=await m(s);if(r.gallery.innerHTML="",i.totalHits===0){M(),r.loader.classList.add("loader-off");return}const a=u(i);r.gallery.insertAdjacentHTML("beforeend",a),h.refresh(),p(i.totalHits)&&c(!0,r.loadMore,s),r.loader.classList.add("loader-off")}catch{console.error(t),g()}finally{e.reset()}}async function v(t){n+=1;const e=t.currentTarget.dataset.search;r.loader.classList.remove("loader-off"),c(!1,r.loadMore);try{const s=await m(e,n),i=u(s);r.gallery.insertAdjacentHTML("beforeend",i),h.refresh(),p(s.totalHits,n)?c(!0,r.loadMore,e):f(!0,r.searchEndText),S(),r.loader.classList.add("loader-off")}catch{console.error(t),g()}}
//# sourceMappingURL=index.js.map
