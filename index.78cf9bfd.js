var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequirefb13;function o(e){localStorage.setItem("theme",e),document.documentElement.className=e}null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequirefb13=r),r("30HO2"),"theme-dark"===localStorage.getItem("theme")?(o("theme-dark"),document.getElementById("slider").checked=!1):(o("theme-light"),document.getElementById("slider").checked=!0);var s=r("29EdN"),i=r("atLwq");r("fvTqB");var c=r("fy93h");s.refsSearch.form.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();(0,i.searchCocktailsInput)(t),s.refsSearch.form.reset()})),s.refsSearch.authBtn.addEventListener("click",(function(e){e.currentTarget.classList.add("is-active"),e.currentTarget.classList.contains("is-active")&&e.currentTarget.classList.remove("is-active");c.auth.currentUser?((0,c.signOutUser)(),location.reload()):(0,c.oNsignInWithPopup)()}));const a={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailsTitle:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul")};var l=r("2nhTy"),d=r("3J0QU");function u(e){return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`).then((e=>{if(!e)throw new Error(e.message);return e.json()})).then((e=>{const{drinks:t}=e;if(null===t)return(0,d.responseNull)();a.coctailsTitle.textContent="Cocktails",(0,l.main)(t)}))}const{heroList:h,heroTitle:m,hero:f,select:g,isHiden:L,heroItem:y,herospan:v,coctailTitel:p,cocktalisTitel:S,heroBox:b,heroSelect:T,heroListUl:w}=a;const q=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];h.addEventListener("click",(function(e){const t=e.target.dataset.name,n=e.target,r=e.currentTarget.querySelectorAll(".hero-button");t&&innerWidth>767&&(r.forEach((e=>{e.classList.contains("is-hover")&&e.classList.remove("is-hover")})),n.classList.add("is-hover"),u(t))}));const k=q.map((e=>`<li class=hero-item value=${e} id=${e}>${e}</li>`));const E=function(e){return e.map((e=>`<li class=hero-item >\n        <button class=hero-button data-name=${e}>${e}</button>\n        </li>`))}(q),j='<div class="hero-container">\n</div>';if(innerWidth>767&&(L.classList.add("is-hiden"),h.insertAdjacentHTML("beforeend",E.join("")),f.insertAdjacentHTML("beforeend",j)),innerWidth<767){L.classList.remove("is-hiden"),m.insertAdjacentHTML("beforebegin",j),g.insertAdjacentHTML("beforeend",k.join("")),h.addEventListener("click",(function(e){const t=document.querySelector(".hero-svg"),n=document.querySelector(".hero-span"),r=e.target;r===T||r===n||r===t?(w.classList.remove("is-hiden-select"),w.classList.add("is-hden-select_display")):(w.classList.add("is-hiden-select"),w.classList.remove("is-hden-select_display"));const o=e.target;if(o){const t=e.target.id;t&&u(t).then((e=>{v.textContent=t}))}}))}r("aFV0K"),r("eujXJ");const I=document.querySelector(".test-button"),A=document.querySelector(".js-backdrop-ingredient"),x=document.querySelector("[data-modal-ingredient]");var B=r("ds8KB");async function _(e){return await fetch(`${B.BASE_URL}api/json/v1/1/lookup.php?iid=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}var U=r("hI4GS"),H=r("eujXJ");r("f8Z3D"),I.setAttribute("data-ingredientId","5"),I.addEventListener("click",(async function(e){window.addEventListener("keydown",H.onEscKeyPress),x.classList.remove("is-hidden"),document.body.style.overflow="hidden";try{let t=await e.target.closest("[data-ingredientId]");const n=await t.dataset.ingredientid;let r=(await _(n)).ingredients[0];const o=r.strIngredient,s=r.strType||"no information",i=r.strDescription||"no information";let c="";c="yes"===r.strAlcohol.toLowerCase()&&r.strABV?`${r.strABV} %`:"no information","no"===r.strAlcohol.toLowerCase()&&(c="no alcohol"),A.innerHTML=(0,U.renderModalIngredient)(o,s,i,c)}catch(e){console.log(e.message)}})),x.addEventListener("click",(async function(e){(e.target.classList.contains("js-modal-close-ingredient")||e.target.classList.contains("js-modal-icon-ingredient")||e.target.classList.contains("js-backdrop-ingredient"))&&x.classList.add("is-hidden")})),r("3J0QU"),r("2nhTy");
//# sourceMappingURL=index.78cf9bfd.js.map