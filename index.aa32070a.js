!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequirefb13;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequirefb13=i),i.register("iE7OH",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var i={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),i[e]=t),t}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.aa32070a.js","4apKi":"modal-close.7c95fecb.svg"}'));const s={menuBtn:document.querySelector("[data-menu-button]"),closeMenuBtn:document.querySelector("[data-menu-close]"),mobileMenu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")},c={favorBtn:document.querySelector("[data-favorite-button]"),favorMenu:document.querySelector("[data-favorites-menu]")},r={mobMenuForm:document.querySelector(".mob-menu .search-form"),mobInputForm:document.querySelector(".mob-menu .searchQuery")},l={coctailsSection:document.querySelector(".gallery"),coctailTitel:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list")},a=(e="",t="",n="",o="",i=0)=>{e.innerHTML+=`<li class="gallery__item">\n                <img class="gallery__img" src="${n}" alt="${t}" width="280" height="280" />\n                <div class="gallery__card">\n                    <h3 class="gallery__card-title">${t}</h3>\n                    <div class="gallery__card-btns">\n                        <button class="btn__learn coctails-section__learn-button" type="button" data-cocktailId = ${o}>Learn more</button>\n                        <button class="btn__add coctails-section__like-button" type="button" id="likeBtn${i}">\n                            Add to\n                            <svg class="btn__svg" width="18" height="18">\n                                <use href="./images/symbol-defs.svg#icon-Heart-mobile"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n            </li> `},d=async e=>{const t=await fetch(e);return await t.json()},u=document.querySelector(".js-backdrop-cocktail"),m=document.querySelector(".js-backdrop-ingredient"),h=document.querySelector("[data-modal-cocktail]"),g=document.querySelector("[data-modal-ingredient]"),f=(document.querySelector(".js-modal-list-ingredients"),"https://www.thecocktaildb.com/");async function _(e){return await fetch(`${f}api/json/v1/1/lookup.php?i=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}async function y(e){return await fetch(`${f}api/json/v1/1/search.php?i=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}var v;function b(e,t,n,o){return`\n            <div class="modal js-modal-cocktail">\n                <button class="modal__close-button js-modal-close-cocktail" data-modal-cocktail-close>\n                    <svg class="modal__icon js-modal-icon-cocktail" width="32" height="32">\n                        <use href="${v}" />\n                    </svg>\n                </button>\n\n                <h1 class="modal__title">${e}</h1>\n                <div class="modal__content">\n                    <div class="modal__instructions">\n                        <h2 class="modal__subtitle">Instructions:</h2>\n                        <p class="modal__description modal__description--cocktail">${t}</p>\n                    </div>\n                    <img class="modal__image" src="${n}" alt="" width="280" height="280">\n                    <div class="modal__info">\n                        <h3 class="modal__ingredients">INGREDIENTS</h3>\n                        <p class="modal__per-cocktail">Per cocktail</p>\n                        <ul class="modal__list js-modal-list-ingredients">\n                       ${o}\n                        </ul>\n                    </div>\n                </div>\n\n\n                <button class="modal__button modal__button--add" type="button">\n                    Add to favorite\n                </button>\n            </div>\n    `}function p(e,t){let n="",o="";for(let i=0;i<t.length;i+=1)n=t[i],o+=`\n       <li class="modal__item" data-ingredient='${n}'>\n         <a class="modal__link js-modal-link" href="#">&sext;${e[i]}</a>\n      </li>\n      `;return o}function L(e="",t="",n="",o=""){return`\n            <div class="modal modal--ingredient ">\n              <button class="modal__close-button modal__close-button-ingredient js-modal-close-ingredient" data-modal-ingredient-close>\n                  <svg class="modal__icon js-modal-icon-ingredient" width="32" height="32">\n                      <use href="./img/modal-close.svg" />\n                  </svg>\n              </button>\n  \n              <h1 class="modal__title modal__title--ingredient">${e}</h1>\n              <h2 class="modal__subtitle modal__subtitle--ingredient">${t}</h2>\n              <p class="modal__description modal__description--ingredient-mobile"><span></span> ${n}</p>\n  \n              <ul class="modal__list">\n\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Type: ${t}</a>\n                </li>\n                <li class="modal__item">\n                    <a class="modal__link js-modal-link" href="#">&sext; Alcohol: ${o} </a>\n                </li>\n            \n              </ul>\n  \n              <button class="modal__button modal__button--add" type="button">\n                  Add to favorite\n              </button>\n            </div>\n          `}async function k(e){if(!e.target.classList.contains("js-modal-link"))return;let t=(await e.target.closest("[data-ingredient]")).dataset.ingredient;const n=await y(t),o=n.ingredients[0].strIngredient,i=n.ingredients[0].strType||"no information",s=n.ingredients[0].strDescription||"no information";let c="";n.ingredients[0].strABV,c="yes"===n.ingredients[0].strAlcohol.toLowerCase()&&n.ingredients[0].strABV?`${n.ingredients[0].strABV} %`:"no information","no"===n.ingredients[0].strAlcohol.toLowerCase()&&(c="no alcohol"),g.classList.remove("is-hidden"),m.innerHTML=L(o,i,s,c)}function w(e){"Escape"!==e.code||g.classList.contains("is-hidden")?"Escape"!==e.code||h.classList.contains("is-hidden")||h.classList.add("is-hidden"):g.classList.add("is-hidden")}function S(){h.classList.add("is-hidden"),document.body.style.overflow="visible"}v=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("4apKi"),u.addEventListener("click",(e=>{(e.target.classList.contains("js-modal-close-cocktail")||e.target.classList.contains("js-modal-icon-cocktail")||e.target.classList.contains("js-backdrop-cocktail"))&&S(),(e.target.classList.contains("modal__close-button-ingredient")||e.target.classList.contains("modal__icon--ingredient")||e.target.classList.contains("js-backdrop-ingredient"))&&(g.classList.add("is-hidden"),window.removeEventListener("keydown",w))}));let q=0,j=0;function E(e,t,n,o){if(o){e<2&&o&&(o.innerHTML="");for(let i=0;i<n;i+=1)d(t).then((n=>{1===e&&d(t).then((e=>{q=e.drinks.length})),j+=1;let s=0;e&&(s=i);const{strDrinkThumb:c="",strDrink:r="",idDrink:l=""}=n.drinks[s];a(o,r,c,l)})).catch(alert.log)}}(e=>{if(!e)return;const t=getComputedStyle(e);q="320px"===t.width?3:"768px"===t.width?6:9})(l.coctailsSection),E(0,"https://www.thecocktaildb.com/api/json/v1/1/random.php",q,l.coctailsList),l.coctailsList.addEventListener("click",(async function(e){try{if(!e.target.classList.contains("btn__learn"))return;const t=e.target.dataset.cocktailid;!async function(e){h.classList.remove("is-hidden"),document.body.style.overflow="hidden",window.addEventListener("keydown",w),document.body;let t=e.drinks[0].strDrink,n=e.drinks[0].strInstructions,o=e.drinks[0].strDrinkThumb,i=function(e){let t=[],n=[],o=[];for(let o in e.drinks[0])o.includes("strMeasure")&&t.push(e.drinks[0][o]),o.includes("strIngredient")&&n.push(e.drinks[0][o]);const i=n.filter(Boolean),s=t.filter(Boolean);let c;c=s.length>=i.length?s.length:i.length;for(let e=0;e<c;e+=1){let t=i[e]?i[e]:"",n=s[e]?s[e]:"";t=t.replace(/\n/g,""),n=n.replace(/\n/g,""),o.push(n+" "+t)}return{resultList:o,modIngredientsList:i}}(e),s=p(i.resultList,i.modIngredientsList);!async function(e,t,n,o,i){try{u.innerHTML=b(e,t,n,o)}catch(e){console.log(e.message)}}(t,n,o,s);document.querySelector(".js-modal-close-cocktail").addEventListener("click",S);document.querySelector(".js-modal-list-ingredients").addEventListener("click",k)}(await _(t))}catch(e){console.log(e)}}));const $={form:document.querySelector(".search-form"),inputForm:document.querySelector(".searchQuery"),mobMenuForm:document.querySelector(".mob-menu .search-form"),mobInputForm:document.querySelector(".mob-menu .searchQuery"),cocktailsTitle:document.querySelector(".gallery__title"),cocktailsList:document.querySelector(".gallery__list")},T="https://www.thecocktaildb.com/api/json/v1/1/",x=async e=>await fetch(`${T}search.php?s=${e}`).then((e=>e.json())).then((t=>{const{drinks:n}=t;if(null===n)return $.cocktailsTitle.textContent="Sorry, we didn't find any cocktail for you",void($.cocktailsList.innerHTML="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>");{$.cocktailsTitle.textContent="Cocktails";const n=t.drinks.length;E(1,`${T}search.php?s=${e}`,n,$.cocktailsList)}}));function M(e){localStorage.setItem("theme",e),document.documentElement.className=e}(()=>{function e(){s.mobileMenu.classList.toggle("is-hidden"),s.body.classList.toggle("no-scroll")}s.menuBtn.addEventListener("click",e),s.closeMenuBtn.addEventListener("click",e),s.menuList.addEventListener("click",(function(){s.menuList.classList.add("is-hidden")}))})(),c.favorBtn.addEventListener("click",(()=>{const e="true"===c.favorBtn.getAttribute("aria-expanded")||!1;c.favorBtn.closest(".nav-item").classList.toggle("is-open"),c.favorBtn.setAttribute("aria-expanded",!e),c.favorMenu.classList.toggle("is-open")})),r.mobMenuForm.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();x(t),s.mobileMenu.classList.add("is-hidden"),s.body.classList.toggle("no-scroll"),r.mobMenuForm.reset()})),"theme-dark"===localStorage.getItem("theme")?(M("theme-dark"),document.getElementById("slider").checked=!1):(M("theme-light"),document.getElementById("slider").checked=!0),$.form.addEventListener("submit",(function(e){e.preventDefault();let t=e.target.elements[1].value.trim();x(t),$.form.reset()}));const A={heroList:document.querySelector(".hero-list"),heroTitle:document.querySelector(".hero-text"),hero:document.querySelector(".hero"),select:document.querySelector(".hero-select"),isHiden:document.querySelector(".is-hiden"),coctailsTitle:document.querySelector(".gallery__title"),coctailsList:document.querySelector(".gallery__list"),herospan:document.querySelector(".hero-span"),heroBox:document.querySelector(".hero-div"),heroSelect:document.querySelector(".hero-boxList"),heroListUl:document.querySelector(".hero-list__ul")};function B(e){const t=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`;return fetch(t).then((e=>{if(!e)throw new Error(e.message);return e.json()})).then((e=>{const{drinks:n}=e;if(null===n)return X();{A.coctailsTitle.textContent="Cocktails";const n=e.drinks.length;E(1,t,n,A.coctailsList)}}))}const{heroList:H,heroTitle:I,hero:C,select:D,isHiden:F,heroItem:O,herospan:N,coctailTitel:R,cocktalisTitel:V,heroBox:U,heroSelect:J,heroListUl:Q}=A;const W=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];function K(e){return e.map((e=>`<li class=hero-item value=${e} id=${e}>${e}</li>`))}H.addEventListener("click",(function(e){const t=e.target.dataset.name,n=e.target,o=e.currentTarget.querySelectorAll(".hero-button");t&&innerWidth>767&&(o.forEach((e=>{e.classList.contains("is-hover")&&e.classList.remove("is-hover")})),n.classList.add("is-hover"),B(t))}));const P=K(W),z=W.map((e=>`<li class=hero-item >\n        <button class=hero-button data-name=${e}>${e}</button>\n        </li>`));const G='<div class="hero-container">\n</div>';if(innerWidth>767&&(F.classList.add("is-hiden"),H.insertAdjacentHTML("beforeend",z.join("")),C.insertAdjacentHTML("beforeend",G)),innerWidth<767){F.classList.remove("is-hiden"),I.insertAdjacentHTML("beforebegin",G),D.insertAdjacentHTML("beforeend",P.join("")),H.addEventListener("click",(function(e){const t=document.querySelector(".hero-svg"),n=document.querySelector(".hero-span"),o=e.target;o===J||o===n||o===t?(Q.classList.remove("is-hiden-select"),Q.classList.add("is-hden-select_display")):(Q.classList.add("is-hiden-select"),Q.classList.remove("is-hden-select_display"));const i=e.target;if(i){const t=e.target.id;t&&B(t).then((e=>{N.textContent=t}))}}))}function X(){A.coctailsTitle.textContent="Sorry, we didn't find any cocktail for you",A.coctailsList.innerHTML="<div class='coctails-section__coctails-img-div'>\n  <div class='coctails-section__coctails-img'></div>\n  </div>"}const Y=document.querySelector(".test-button"),Z=document.querySelector(".js-backdrop-ingredient"),ee=document.querySelector("[data-modal-ingredient]");async function te(e){return await fetch(`${f}api/json/v1/1/lookup.php?iid=${e}`).then((e=>e.json())).catch((e=>console.log(e)))}Y.setAttribute("data-ingredientId","5"),Y.addEventListener("click",(async function(e){window.addEventListener("keydown",w),ee.classList.remove("is-hidden"),document.body.style.overflow="hidden";try{let t=await e.target.closest("[data-ingredientId]");const n=await t.dataset.ingredientid;let o=(await te(n)).ingredients[0];const i=o.strIngredient,s=o.strType||"no information",c=o.strDescription||"no information";let r="";r="yes"===o.strAlcohol.toLowerCase()&&o.strABV?`${o.strABV} %`:"no information","no"===o.strAlcohol.toLowerCase()&&(r="no alcohol"),Z.innerHTML=L(i,s,c,r)}catch(e){console.log(e.message)}})),ee.addEventListener("click",(async function(e){(e.target.classList.contains("js-modal-close-ingredient")||e.target.classList.contains("js-modal-icon-ingredient")||e.target.classList.contains("js-backdrop-ingredient"))&&(ee.classList.add("is-hidden"),document.body.style.overflow="visible")}))}();
//# sourceMappingURL=index.aa32070a.js.map
