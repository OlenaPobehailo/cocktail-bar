function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=e.parcelRequirefb13;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequirefb13=s),s.register("kyEFX",(function(e,n){var o,s;t(e.exports,"register",(function(){return o}),(function(t){return o=t})),t(e.exports,"resolve",(function(){return s}),(function(t){return s=t}));var i={};o=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},s=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.67d3af2f.js","fdzo7":"modal-close.7c95fecb.svg"}'));const i={coctailsSection:document.querySelector(".gallery"),coctailTitel:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list")},c=(t="",e="",n="",o="",s=0)=>{t.innerHTML+=`<li class="gallery__item">\n                <img class="gallery__img" src="${n}" alt="${e}" width="280" height="280" />\n                <div class="gallery__card">\n                    <h3 class="gallery__card-title">${e}</h3>\n                    <div class="gallery__card-btns">\n                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${o}>Learn more</button>\n                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn${s}">\n                            Add to\n                            <svg class="btn__svg" width="18" height="18">\n                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n            </li> `},l=async t=>{const e=await fetch(t);return await e.json()},a=document.querySelector(".js-backdrop-cocktail"),r=document.querySelector(".js-backdrop-ingredient"),d=document.querySelector("[data-modal-cocktail]"),u=document.querySelector("[data-modal-ingredient]"),m=(document.querySelector(".js-modal-list-ingredients"),"https://www.thecocktaildb.com/");async function h(t){return await fetch(`${m}api/json/v1/1/lookup.php?i=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}async function g(t){return await fetch(`${m}api/json/v1/1/search.php?i=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}var _;function f(t,e,n,o,s){return`\n            <div class="modal js-modal-cocktail">\n                <button class="modal__close-button js-modal-close-cocktail" data-modal-cocktail-close>\n                    <svg class="modal__icon js-modal-icon-cocktail" width="32" height="32">\n                        <use href="${_}" />\n                    </svg>\n                </button>\n\n                <h1 class="modal__title">${e}</h1>\n                <div class="modal__content">\n                    <div class="modal__instructions">\n                        <h2 class="modal__subtitle">Instructions:</h2>\n                        <p class="modal__description modal__description--cocktail">${n}</p>\n                    </div>\n                    <img class="modal__image" src="${o}" alt="" width="280" height="280">\n                    <div class="modal__info">\n                        <h3 class="modal__ingredients">INGREDIENTS</h3>\n                        <p class="modal__per-cocktail">Per cocktail</p>\n                        <ul class="modal__list js-modal-list-ingredients">\n                       ${s}\n                        </ul>\n                    </div>\n                </div>\n\n\n                <button class="modal__button modal__button--add" type="button">\n                    Add to favorite\n                </button>\n            </div>\n    `}function v(t="",e="",n="",o=""){return`\n            <div class="modal modal--ingredient ">\n              <button class="modal__close-button modal__close-button-ingredient js-modal-close-ingredient" data-modal-ingredient-close>\n                  <svg class="modal__icon js-modal-icon-ingredient" width="32" height="32">\n                      <use href="./img/modal-close.svg" />\n                  </svg>\n              </button>\n  \n              <h1 class="modal__title modal__title--ingredient">${t}</h1>\n              <h2 class="modal__subtitle modal__subtitle--ingredient">${e}</h2>\n              <p class="modal__description modal__description--ingredient-mobile"><span></span> ${n}</p>\n  \n              <ul class="modal__list">\n\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Type: ${e}</a>\n                </li>\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Alcohol: ${o} </a>\n                </li>\n            \n              </ul>\n  \n              <button class="modal__button modal__button--add" type="button">\n                  Add to favorite\n              </button>\n            </div>\n          `}_=new URL(s("kyEFX").resolve("fdzo7"),import.meta.url).toString();let p=null;async function L(t){if(t.target.classList.contains("btn__learn")){let n=await t.target.closest("[data-cocktailId]");const o=await n.dataset.cocktailid;p=await h(o),d.classList.remove("is-hidden"),window.addEventListener("keydown",y);let s=p.drinks[0].strDrink,i=p.drinks[0].strInstructions,c=p.drinks[0].strDrinkThumb,l=function(t){let e=[],n=[],o=[];for(let o in t.drinks[0])o.includes("strMeasure")&&e.push(t.drinks[0][o]),o.includes("strIngredient")&&n.push(t.drinks[0][o]);const s=n.filter(Boolean),i=e.filter(Boolean);let c;c=i.length>=s.length?i.length:s.length;for(let t=0;t<c;t+=1){let e=s[t]?s[t]:"",n=i[t]?i[t]:"";e=e.replace(/\n/g,""),n=n.replace(/\n/g,""),o.push(n+" "+e)}//!+++++++++++++++
return console.log(i),//!+++++++++++++++
console.log(s),//!+++++++++++++++
console.log(o),{resultList:o,modIngredientsList:s}}(p),r=await(e=l.resultList,e.map((t=>`\n        <li class="modal__item" data-ingredient='${t}'>\n          <a class="modal__link js-modal-link" href="#">&sext;${t}</a>\n        </li>\n        `)).join(""));!async function(t,e,n,o,s){try{a.innerHTML=f(0,e,n,o,s)}catch(t){console.log(t.message)}}(0,s,i,c,r)}var e;if(t.target.classList.contains("modal__link")){u.classList.remove("is-hidden"),console.log(p);try{for(let e in p.drinks[0])if(e.includes("strIngredient")&&null!==p.drinks[0][e]&&""!==p.drinks[0][e]&&t.target.textContent.includes(p.drinks[0][e])){cocktailIngredient=await g(p.drinks[0][e]);const t=await cocktailIngredient.ingredients[0],n=t.strIngredient,o=t.strType||"no information",s=t.strDescription||"no information";let i="";t.strABV,i="yes"===t.strAlcohol.toLowerCase()&&t.strABV?`${t.strABV} %`:"no information","no"===t.strAlcohol.toLowerCase()&&(i="no alcohol"),r.innerHTML=v(n,o,s,i)}}catch(t){console.log(t)}}else{if(!(t.target.classList.contains("js-modal-close-cocktail")||t.target.classList.contains("js-modal-icon-cocktail")||t.target.classList.contains("js-backdrop-cocktail")))return t.target.classList.contains("modal__close-button-ingredient")||t.target.classList.contains("modal__icon--ingredient")||t.target.classList.contains("js-backdrop-ingredient")?(u.classList.add("is-hidden"),void window.removeEventListener("keydown",y)):void 0;d.classList.add("is-hidden")}}function y(t){"Escape"!==t.code||u.classList.contains("is-hidden")?"Escape"!==t.code||d.classList.contains("is-hidden")||d.classList.add("is-hidden"):u.classList.add("is-hidden")}d.addEventListener("click",L);let b=0,k=0;(t=>{if(!t)return;const e=getComputedStyle(t);b="320px"===e.width?3:"768px"===e.width?6:9})(i.coctailsSection),function(t,e,n,o){if(o){t<2&&o&&(o.innerHTML="");for(let s=0;s<n;s+=1)l(e).then((n=>{1===t&&l(e).then((t=>{b=t.drinks.length})),k+=1;let i=0;t&&(i=s);const{strDrinkThumb:a="",strDrink:r="",idDrink:d=""}=n.drinks[i];c(o,r,a,d)})).catch(alert.log)}}(0,"https://www.thecocktaildb.com/api/json/v1/1/random.php",b,i.coctailsList),i.coctailsList.addEventListener("click",L);const w=document.querySelector(".test-button"),S=document.querySelector(".js-backdrop-ingredient"),j=document.querySelector("[data-modal-ingredient]");async function q(t){return await fetch(`${m}api/json/v1/1/lookup.php?iid=${t}`).then((t=>t.json())).catch((t=>console.log(t)))}w.setAttribute("data-ingredientId","5"),w.addEventListener("click",(async function(t){window.addEventListener("keydown",y),j.classList.remove("is-hidden");try{let e=await t.target.closest("[data-ingredientId]");const n=await e.dataset.ingredientid;let o=(await q(n)).ingredients[0];const s=o.strIngredient,i=o.strType||"no information",c=o.strDescription||"no information";let l="";l="yes"===o.strAlcohol.toLowerCase()&&o.strABV?`${o.strABV} %`:"no information","no"===o.strAlcohol.toLowerCase()&&(l="no alcohol"),S.innerHTML=v(s,i,c,l)}catch(t){console.log(t.message)}})),j.addEventListener("click",(async function(t){(t.target.classList.contains("js-modal-close-ingredient")||t.target.classList.contains("js-modal-icon-ingredient")||t.target.classList.contains("js-backdrop-ingredient"))&&j.classList.add("is-hidden")}));const T={menuBtn:document.querySelector("[data-menu-button]"),closeMenuBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")},E={favorBtn:document.querySelector("[data-favorite-button]"),favorMenu:document.querySelector("[data-favorites-menu]")};function $(t){localStorage.setItem("theme",t),document.documentElement.className=t}(()=>{function t(){T.mobileMenu.classList.toggle("is-hidden"),T.body.classList.toggle("no-scroll")}T.menuBtn.addEventListener("click",t),T.closeMenuBtn.addEventListener("click",t),T.menuList.addEventListener("click",(function(){T.menuList.classList.add("is-hidden")}))})(),E.favorBtn.addEventListener("click",(()=>{const t="true"===E.favorBtn.getAttribute("aria-expanded")||!1;E.favorBtn.closest(".nav-item").classList.toggle("is-open"),E.favorBtn.setAttribute("aria-expanded",!t),E.favorMenu.classList.toggle("is-open")})),"theme-dark"===localStorage.getItem("theme")?($("theme-dark"),document.getElementById("slider").checked=!1):($("theme-light"),document.getElementById("slider").checked=!0);const A={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailTitel:document.querySelector(".coctails-section__title"),cocktalisTitel:document.querySelector(".coctails-section__coctails-list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul"),headerinput:document.querySelector(".header-input")},x=document.querySelector(".coctails-section__coctails-list");let I=0;const{heroList:B,heroTitle:M,hero:H,select:C,isHiden:D,heroItem:F,headerinput:N,herospan:O,coctailTitel:R,cocktalisTitel:U,heroBox:V,heroSelect:P,heroListUl:W}=A;const X=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];B.addEventListener("click",(function(t){N.value=" ";const e=t.target.dataset.name,n=t.target,o=t.currentTarget.querySelectorAll(".hero-button");e&&innerWidth>767&&(o.forEach((t=>{t.classList.contains("is-hover")&&t.classList.remove("is-hover")})),n.classList.add("is-hover"),Z(e))}));const z=X.map((t=>`<li class=hero-item value=${t} id=${t}>${t}</li>`));const G=function(t){return t.map((t=>`<li class=hero-item >\n        <button class=hero-button data-name=${t}>${t}</button>\n        </li>`))}(X),J='<div class="hero-container">\n</div>';if(innerWidth>767&&(D.classList.add("is-hiden"),B.insertAdjacentHTML("beforeend",G.join("")),H.insertAdjacentHTML("beforeend",J)),innerWidth<767){D.classList.remove("is-hiden"),M.insertAdjacentHTML("beforebegin",J),C.insertAdjacentHTML("beforeend",z.join("")),B.addEventListener("click",(function(t){const e=document.querySelector(".hero-svg"),n=document.querySelector(".hero-span"),o=t.target;o===P||o===n||o===e?(W.classList.remove("is-hiden-select"),W.classList.add("is-hden-select_display")):(W.classList.add("is-hiden-select"),W.classList.remove("is-hden-select_display"));const s=t.target;if(s){const e=t.target.id;e&&Z(e).then((t=>{O.textContent=e}))}}))}function Z(t){const e=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${t}`;return fetch(e).then((t=>{if(!t)throw new Error(t.message);return t.json()})).then((t=>{const{drinks:n}=t;if(null===n)return function(){x.classList.add("coctails-section-hover"),U.innerHTML="";const t="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>";R.classList.remove("coctails-section__title"),R.classList.add("coctails-section-coctailTitel"),R.textContent="Sorry, we didn't find  any cocktail for you",U.innerHTML=t}();R.classList.add("coctails-section__title"),R.classList.remove("coctails-section-coctailTitel"),x.classList.remove("coctails-section-hover"),U.innerHTML="",R.textContent="Searching results",I=t.drinks.length,mainFunction(1,e,I,x)}))}
//# sourceMappingURL=index.67d3af2f.js.map
