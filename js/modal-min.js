"use strict";!function(){function t(){document.removeEventListener("keydown",r),n&&(clearInterval(c),n=!1);for(var e=0;e<o.length;e++)o[e].classList.contains("modal--active")&&(o[e].classList.remove("modal--active"),o[e].style.opacity=0,o[e].style.top="calc(50% - 50px)")}function e(e){n=!0;var t=0;c=setInterval(function(){t++,e.style.opacity=(1/15*t).toFixed(3),e.style.top="calc(50% - "+(50-50/15*t)+"px)",15===t&&(clearInterval(c),t=0,n=!1)},200/15)}var c,n=!1,o=document.querySelectorAll(".modal"),a=document.querySelector(".map"),d=document.querySelector(".feedback"),l=document.querySelector(".added"),r=function(e){e.keyCode===window.variable.KeyCode.ESCAPE&&t()};if(a){var i=document.querySelector(".contacts-about__map"),s=a.querySelector(".modal__button-close");i.addEventListener("click",function(){t(),e(a),document.addEventListener("keydown",r),a.classList.add("modal--active")}),s.addEventListener("click",t)}if(d){var u=document.querySelector(".contacts-about__button"),v=d.querySelector(".modal__button-close");u.addEventListener("click",function(){t(),document.addEventListener("keydown",r),d.classList.add("modal--active"),e(d)}),v.addEventListener("click",t)}if(l){for(var m=document.querySelectorAll(".item-catalog__add-to-cart"),y=l.querySelector(".modal__button-close"),L=function(){t(),e(l),document.addEventListener("keydown",r),l.classList.add("modal--active")},E=0;E<m.length;E++)m[E].addEventListener?m[E].addEventListener("click",L):m[E].attachEvent?m[E].attachEvent("onclick",L):m[E].click=L;y.addEventListener("click",t)}}();
