!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=null;t.addEventListener("click",(function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.setAttribute("disabled",""),e.removeAttribute("disabled",""),r=setInterval(a,1e3)})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled",""),t.removeAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.1a4b0ea6.js.map
