import{_c as d,ea as c,ja as r}from"./chunk-SMBTFBOT.js";var s=class{constructor(t,o){this._document=o;let e=this._textarea=this._document.createElement("textarea"),i=e.style;i.position="fixed",i.top=i.opacity="0",i.left="-999em",e.setAttribute("aria-hidden","true"),e.value=t,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){let t=this._textarea,o=!1;try{if(t){let e=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),o=this._document.execCommand("copy"),e&&e.focus()}}catch{}return o}destroy(){let t=this._textarea;t&&(t.remove(),this._textarea=void 0)}},C=(()=>{let t=class t{constructor(e){this._document=e}copy(e){let i=this.beginCopy(e),a=i.copy();return i.destroy(),a}beginCopy(e){return new s(e,this._document)}};t.\u0275fac=function(i){return new(i||t)(r(d))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();export{C as a};