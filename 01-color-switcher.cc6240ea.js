!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;function d(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.setAttribute("disabled",""),e.removeAttribute("disabled","")}t.addEventListener("click",d),e.addEventListener("click",(function(){clearInterval(a),e.setAttribute("disabled",""),t.removeAttribute("disabled","")})),t.matches("[disabled]")||(a=setInterval(d,1e3))}();
//# sourceMappingURL=01-color-switcher.cc6240ea.js.map
