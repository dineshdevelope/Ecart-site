(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.getElementById("formEl"),d=document.getElementById("formInput"),o=document.getElementById("itemList"),m=document.getElementById("filterItem"),u=document.getElementById("clearItem");function a(r){r.preventDefault();let n=d.value;if(n){const c=document.createElement("dev");c.className="flex justify-center items-center m-3";const l=document.createElement("li");l.textContent=n;const e=document.createElement("button");e.className="ml-32",e.innerHTML=' <img src="./src/photos/x.svg" alt="Delete" class="bg-red-800" />',o.append(c),c.append(l),l.append(e),s.reset()}}s.addEventListener("submit",a);function f(r){r.target.parentElement.parentElement.remove()}o.addEventListener("click",f);function p(r){for(;o.firstChild;)o.removeChild(o.firstChild)}u.addEventListener("click",p);function g(r){let n=r.target.value;console.log(n),console.log(o.parentElement),(n=o.innerText.includes(n))&&console.log("yes")}m.addEventListener("input",g);