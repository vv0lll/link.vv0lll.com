(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9640:(t,e,a)=>{Promise.resolve().then(a.bind(a,7425))},7425:(t,e,a)=>{"use strict";a.d(e,{default:()=>F});var o=a(5155),s=a(2115);let r=s.forwardRef(function(t,e){let{title:a,titleId:o,...r}=t;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:e,"aria-labelledby":o},r),a?s.createElement("title",{id:o},a):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"}))}),n=function(){for(var t,e,a=0,o="",s=arguments.length;a<s;a++)(t=arguments[a])&&(e=function t(e){var a,o,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e){if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(o=t(e[a]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o)}return s}(t))&&(o&&(o+=" "),o+=e);return o};!function(t){if(!t||"undefined"==typeof document)return;let e=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e.firstChild?e.insertBefore(a,e.firstChild):e.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}(':root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n');var i=t=>"number"==typeof t&&!isNaN(t),l=t=>"string"==typeof t,c=t=>"function"==typeof t,f=t=>l(t)||i(t),d=t=>l(t)||c(t)?t:null,y=(t,e)=>!1===t||i(t)&&t>0?t:e,u=t=>(0,s.isValidElement)(t)||l(t)||c(t)||i(t);function m(t){let{enter:e,exit:a,appendPosition:o=!1,collapse:r=!0,collapseDuration:n=300}=t;return function(t){let{children:i,position:l,preventExitTransition:c,done:f,nodeRef:d,isIn:y,playToast:u}=t,m=o?"".concat(e,"--").concat(l):e,p=o?"".concat(a,"--").concat(l):a,g=(0,s.useRef)(0);return(0,s.useLayoutEffect)(()=>{let t=d.current,e=m.split(" "),a=o=>{o.target===d.current&&(u(),t.removeEventListener("animationend",a),t.removeEventListener("animationcancel",a),0===g.current&&"animationcancel"!==o.type&&t.classList.remove(...e))};t.classList.add(...e),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)},[]),(0,s.useEffect)(()=>{let t=d.current,e=()=>{t.removeEventListener("animationend",e),r?function(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,{scrollHeight:o,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition="all ".concat(a,"ms"),requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,a)})})}(t,f,n):f()};y||(c?e():(g.current=1,t.className+=" ".concat(p),t.addEventListener("animationend",e)))},[y]),s.createElement(s.Fragment,null,i)}}function p(t,e){return{content:g(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function g(t,e){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(0,s.isValidElement)(t)&&!l(t.type)?(0,s.cloneElement)(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:a}):c(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:a}):t}function _(t){let{delay:e,isRunning:a,closeToast:o,type:r="default",hide:i,className:l,controlledProgress:f,progress:d,rtl:y,isIn:u,theme:m}=t,p=i||f&&0===d,g={animationDuration:"".concat(e,"ms"),animationPlayState:a?"running":"paused"};f&&(g.transform="scaleX(".concat(d,")"));let _=n("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":y}),b=c(l)?l({rtl:y,type:r,defaultClassName:_}):n(_,l);return s.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},s.createElement("div",{className:"Toastify__progress-bar--bg Toastify__progress-bar-theme--".concat(m," Toastify__progress-bar--").concat(r)}),s.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:b,style:g,[f&&d>=1?"onTransitionEnd":"onAnimationEnd"]:f&&d<1?null:()=>{u&&o()}}))}var b=1,h=()=>"".concat(b++),v=new Map,T=[],x=new Set,w=t=>x.forEach(e=>e(t)),k=()=>v.size>0,E=(t,e)=>{var a;let{containerId:o}=e;return null==(a=v.get(o||1))?void 0:a.toasts.get(t)};function I(t,e){var a;if(e)return!!(null!=(a=v.get(e))&&a.isToastActive(t));let o=!1;return v.forEach(e=>{e.isToastActive(t)&&(o=!0)}),o}function L(t,e){u(t)&&(k()||T.push({content:t,options:e}),v.forEach(a=>{a.buildToast(t,e)}))}function C(t,e){v.forEach(a=>{null!=e&&null!=e&&e.containerId&&(null==e?void 0:e.containerId)!==a.id||a.toggle(t,null==e?void 0:e.id)})}function N(t,e){return L(t,e),e.toastId}function O(t,e){return{...e,type:e&&e.type||t,toastId:e&&(l(e.toastId)||i(e.toastId))?e.toastId:h()}}function z(t){return(e,a)=>N(e,O(t,a))}function P(t,e){return N(t,O("default",e))}P.loading=(t,e)=>N(t,O("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),P.promise=function(t,e,a){let o,{pending:s,error:r,success:n}=e;s&&(o=l(s)?P.loading(s,a):P.loading(s.render,{...a,...s}));let i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(t,e,s)=>{if(null==e){P.dismiss(o);return}let r={type:t,...i,...a,data:s},n=l(e)?{render:e}:e;return o?P.update(o,{...r,...n}):P(n.render,{...r,...n}),s},d=c(t)?t():t;return d.then(t=>f("success",n,t)).catch(t=>f("error",r,t)),d},P.success=z("success"),P.info=z("info"),P.error=z("error"),P.warning=z("warning"),P.warn=P.warning,P.dark=(t,e)=>N(t,O("default",{theme:"dark",...e})),P.dismiss=function(t){!function(t){if(!k()){T=T.filter(e=>null!=t&&e.options.toastId!==t);return}if(null==t||f(t))v.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=v.get(t.containerId);e?e.removeToast(t.id):v.forEach(e=>{e.removeToast(t.id)})}}(t)},P.clearWaitingQueue=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})},P.isActive=I,P.update=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=E(t,e);if(a){let{props:o,content:s}=a,r={delay:100,...o,...e,toastId:e.toastId||t,updateId:h()};r.toastId!==t&&(r.staleId=t);let n=r.render||s;delete r.render,N(n,r)}},P.done=t=>{P.update(t,{progress:1})},P.onChange=function(t){return x.add(t),()=>{x.delete(t)}},P.play=t=>C(!0,t),P.pause=t=>C(!1,t);var R="undefined"!=typeof window?s.useLayoutEffect:s.useEffect,D=t=>{let{theme:e,type:a,isLoading:o,...r}=t;return s.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(a,")"),...r})},A={info:function(t){return s.createElement(D,{...t},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return s.createElement(D,{...t},s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return s.createElement(D,{...t},s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return s.createElement(D,{...t},s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}},S=t=>t in A,j=t=>{let{isRunning:e,preventExitTransition:a,toastRef:o,eventHandlers:r,playToast:i}=function(t){var e,a;let[o,r]=(0,s.useState)(!1),[n,i]=(0,s.useState)(!1),l=(0,s.useRef)(null),c=(0,s.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:f,pauseOnHover:d,closeToast:y,onClick:u,closeOnClick:m}=t;function p(){r(!0)}function g(){r(!1)}function _(e){let a=l.current;if(c.canDrag&&a){c.didMove=!0,o&&g(),"x"===t.draggableDirection?c.delta=e.clientX-c.start:c.delta=e.clientY-c.start,c.start!==e.clientX&&(c.canCloseOnClick=!1);let s="x"===t.draggableDirection?"".concat(c.delta,"px, var(--y)"):"0, calc(".concat(c.delta,"px + var(--y))");a.style.transform="translate3d(".concat(s,",0)"),a.style.opacity="".concat(1-Math.abs(c.delta/c.removalDistance))}}function b(){document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",b);let e=l.current;if(c.canDrag&&c.didMove&&e){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance){i(!0),t.closeToast(!0),t.collapseAll();return}e.style.transition="transform 0.2s, opacity 0.2s",e.style.removeProperty("transform"),e.style.removeProperty("opacity")}}e={id:t.toastId,containerId:t.containerId,fn:r},null==(a=v.get(e.containerId||1))||a.setToggle(e.id,e.fn),(0,s.useEffect)(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",p),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",p),window.removeEventListener("blur",g)}},[t.pauseOnFocusLoss]);let h={onPointerDown:function(e){if(!0===t.draggable||t.draggable===e.pointerType){c.didMove=!1,document.addEventListener("pointermove",_),document.addEventListener("pointerup",b);let a=l.current;c.canCloseOnClick=!0,c.canDrag=!0,a.style.transition="none","x"===t.draggableDirection?(c.start=e.clientX,c.removalDistance=a.offsetWidth*(t.draggablePercent/100)):(c.start=e.clientY,c.removalDistance=a.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(e){let{top:a,bottom:o,left:s,right:r}=l.current.getBoundingClientRect();"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&e.clientX>=s&&e.clientX<=r&&e.clientY>=a&&e.clientY<=o?g():p()}};return f&&d&&(h.onMouseEnter=g,t.stacked||(h.onMouseLeave=p)),m&&(h.onClick=t=>{u&&u(t),c.canCloseOnClick&&y(!0)}),{playToast:p,pauseToast:g,isRunning:o,preventExitTransition:n,toastRef:l,eventHandlers:h}}(t),{closeButton:l,children:f,autoClose:d,onClick:y,type:u,hideProgressBar:m,closeToast:p,transition:b,position:h,className:T,style:x,progressClassName:w,updateId:k,role:E,progress:I,rtl:L,toastId:C,deleteToast:N,isIn:O,isLoading:z,closeOnClick:P,theme:R,ariaLabel:D}=t,j=n("Toastify__toast","Toastify__toast-theme--".concat(R),"Toastify__toast--".concat(u),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":P}),B=c(T)?T({rtl:L,position:h,type:u,defaultClassName:j}):n(j,T),M=function(t){let{theme:e,type:a,isLoading:o,icon:r}=t,n=null,i={theme:e,type:a};return!1===r||(c(r)?n=r({...i,isLoading:o}):(0,s.isValidElement)(r)?n=(0,s.cloneElement)(r,i):o?n=A.spinner():S(a)&&(n=A[a](i))),n}(t),X=!!I||!d,U={closeToast:p,type:u,theme:R},F=null;return!1===l||(F=c(l)?l(U):(0,s.isValidElement)(l)?(0,s.cloneElement)(l,U):function(t){let{closeToast:e,theme:a,ariaLabel:o="close"}=t;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(a),type:"button",onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(U)),s.createElement(b,{isIn:O,done:N,position:h,preventExitTransition:a,nodeRef:o,playToast:i},s.createElement("div",{id:C,tabIndex:0,onClick:y,"data-in":O,className:B,...r,style:x,ref:o,...O&&{role:E,"aria-label":D}},null!=M&&s.createElement("div",{className:n("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!z})},M),g(f,t,!e),F,!t.customProgressBar&&s.createElement(_,{...k&&!X?{key:"p-".concat(k)}:{},rtl:L,theme:R,delay:d,isRunning:e,isIn:O,closeToast:p,hide:m,type:u,className:w,controlledProgress:X,progress:I||0})))},B=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},M=m(B("bounce",!0));m(B("slide",!0)),m(B("zoom")),m(B("flip"));var X={position:"top-right",transition:M,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&"KeyT"===t.code};function U(t){let e={...X,...t},a=t.stacked,[o,r]=(0,s.useState)(!0),l=(0,s.useRef)(null),{getToastToRender:f,isToastActive:m,count:g}=function(t){var e;let a;let{subscribe:o,getSnapshot:r,setProps:n}=(0,s.useRef)((a=t.containerId||1,{subscribe(e){let o,s,r,n,l,c,f,m,g,_,b,h;let x=(o=1,s=0,r=[],n=[],l=t,c=new Map,f=new Set,m=()=>{n=Array.from(c.values()),f.forEach(t=>t())},g=t=>{let{containerId:e,toastId:o,updateId:s}=t,r=c.has(o)&&null==s;return(e?e!==a:1!==a)||r},_=t=>{var e,a;null==(a=null==(e=t.props)?void 0:e.onClose)||a.call(e,t.removalReason),t.isActive=!1},b=t=>{if(null==t)c.forEach(_);else{let e=c.get(t);e&&_(e)}m()},h=t=>{var e,a;let{toastId:o,updateId:s}=t.props,r=null==s;t.staleId&&c.delete(t.staleId),t.isActive=!0,c.set(o,t),m(),w(p(t,r?"added":"updated")),r&&(null==(a=(e=t.props).onOpen)||a.call(e))},{id:a,props:l,observe:t=>(f.add(t),()=>f.delete(t)),toggle:(t,e)=>{c.forEach(a=>{var o;(null==e||e===a.props.toastId)&&(null==(o=a.toggle)||o.call(a,t))})},removeToast:b,toasts:c,clearQueue:()=>{s-=r.length,r=[]},buildToast:(t,e)=>{if(g(e))return;let{toastId:a,updateId:n,data:f,staleId:_,delay:v}=e,T=null==n;T&&s++;let x={...l,style:l.toastStyle,key:o++,...Object.fromEntries(Object.entries(e).filter(t=>{let[e,a]=t;return null!=a})),toastId:a,updateId:n,data:f,isIn:!1,className:d(e.className||l.toastClassName),progressClassName:d(e.progressClassName||l.progressClassName),autoClose:!e.isLoading&&y(e.autoClose,l.autoClose),closeToast(t){c.get(a).removalReason=t,b(a)},deleteToast(){let t=c.get(a);if(null!=t){if(w(p(t,"removed")),c.delete(a),--s<0&&(s=0),r.length>0){h(r.shift());return}m()}}};x.closeButton=l.closeButton,!1===e.closeButton||u(e.closeButton)?x.closeButton=e.closeButton:!0===e.closeButton&&(x.closeButton=!u(l.closeButton)||l.closeButton);let k={content:t,props:x,staleId:_};l.limit&&l.limit>0&&s>l.limit&&T?r.push(k):i(v)?setTimeout(()=>{h(k)},v):h(k)},setProps(t){l=t},setToggle:(t,e)=>{let a=c.get(t);a&&(a.toggle=e)},isToastActive:t=>{var e;return null==(e=c.get(t))?void 0:e.isActive},getSnapshot:()=>n});v.set(a,x);let k=x.observe(e);return T.forEach(t=>L(t.content,t.options)),T=[],()=>{k(),v.delete(a)}},setProps(t){var e;null==(e=v.get(a))||e.setProps(t)},getSnapshot(){var t;return null==(t=v.get(a))?void 0:t.getSnapshot()}})).current;n(t);let l=null==(e=(0,s.useSyncExternalStore)(o,r,r))?void 0:e.slice();return{getToastToRender:function(e){if(!l)return[];let a=new Map;return t.newestOnTop&&l.reverse(),l.forEach(t=>{let{position:e}=t.props;a.has(e)||a.set(e,[]),a.get(e).push(t)}),Array.from(a,t=>e(t[0],t[1]))},isToastActive:I,count:null==l?void 0:l.length}}(e),{className:_,style:b,rtl:h,containerId:x,hotKeys:k}=e;function E(){a&&(r(!0),P.play())}return R(()=>{var t;if(a){let a=l.current.querySelectorAll('[data-in="true"]'),s=null==(t=e.position)?void 0:t.includes("top"),r=0,n=0;Array.from(a).reverse().forEach((t,e)=>{t.classList.add("Toastify__toast--stacked"),e>0&&(t.dataset.collapsed="".concat(o)),t.dataset.pos||(t.dataset.pos=s?"top":"bot");let a=r*(o?.2:1)+(o?0:12*e);t.style.setProperty("--y","".concat(s?a:-1*a,"px")),t.style.setProperty("--g","".concat(12)),t.style.setProperty("--s","".concat(1-(o?n:0))),r+=t.offsetHeight,n+=.025})}},[o,g,a]),(0,s.useEffect)(()=>{function t(t){var e;let a=l.current;k(t)&&(null==(e=a.querySelector('[tabIndex="0"]'))||e.focus(),r(!1),P.pause()),"Escape"===t.key&&(document.activeElement===a||null!=a&&a.contains(document.activeElement))&&(r(!0),P.play())}return document.addEventListener("keydown",t),()=>{document.removeEventListener("keydown",t)}},[k]),s.createElement("section",{ref:l,className:"Toastify",id:x,onMouseEnter:()=>{a&&(r(!1),P.pause())},onMouseLeave:E,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},f((t,e)=>{let o,r=e.length?{...b}:{...b,pointerEvents:"none"};return s.createElement("div",{tabIndex:-1,className:(o=n("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":h}),c(_)?_({position:t,rtl:h,defaultClassName:o}):n(o,d(_))),"data-stacked":a,style:r,key:"c-".concat(t)},e.map(t=>{let{content:e,props:o}=t;return s.createElement(j,{...o,stacked:a,collapseAll:E,isIn:m(o.toastId,o.containerId),key:"t-".concat(o.key)},e)}))}))}let F=()=>{let[t,e]=(0,s.useState)(""),[a,n]=(0,s.useState)(""),[i,l]=(0,s.useState)(!1),[c,f]=(0,s.useState)(""),d=t=>{try{return new URL(t),!0}catch(t){return!1}},y=async()=>{if(!t||!d(t)){P.error("Please enter a valid URL.");return}l(!0),f("");try{let e=await fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!e.ok){let t=await e.json();f(t.message||"Failed to generate shortened link");return}let a=await e.json();n(a.data.shortened_url)}catch(t){f(t.message||"Something went wrong.")}finally{l(!1)}};return(0,o.jsxs)("div",{className:"bg-gray-100 w-full max-w-3xl mx-auto p-6 rounded-lg shadow-lg",children:[(0,o.jsx)(U,{position:"top-right",autoClose:3e3,hideProgressBar:!0}),(0,o.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 text-left mb-6",children:"Generate Shortened Link"}),(0,o.jsxs)("div",{className:"flex items-center gap-4 mb-6 flex-wrap",children:[(0,o.jsx)("label",{htmlFor:"original-link",className:"text-gray-700 font-medium whitespace-nowrap w-full sm:w-1/6",children:"Original Link:"}),(0,o.jsx)("input",{id:"original-link",type:"text",value:t,onChange:t=>e(t.target.value),placeholder:"Enter the original link",className:"flex-grow px-4 py-2 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,o.jsx)("button",{onClick:y,className:"bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition",children:i?(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{className:"animate-spin mr-2",children:"\uD83D\uDD04"})," Generating..."]}):"Generate"})]}),c&&(0,o.jsx)("p",{className:"text-red-500 text-sm font-medium mb-6",children:c}),(0,o.jsxs)("div",{className:"flex items-center gap-4 mb-6 flex-wrap",children:[(0,o.jsx)("label",{htmlFor:"final-url",className:"text-gray-700 font-medium whitespace-nowrap w-full sm:w-1/6",children:"Final URL:"}),(0,o.jsxs)("div",{className:"relative flex-grow",children:[(0,o.jsx)("input",{id:"final-url",type:"text",readOnly:!0,value:a,placeholder:"Your shortened URL will appear here",className:"w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md border border-gray-300 focus:outline-none cursor-not-allowed"}),(0,o.jsx)("button",{onClick:()=>{a&&(navigator.clipboard.writeText(a),P.success("Copied to clipboard!"))},disabled:!a,className:"absolute inset-y-0 right-2 flex items-center ".concat(a?"text-gray-500 hover:text-gray-700":"text-gray-300 cursor-not-allowed"),children:(0,o.jsx)(r,{className:"h-5 w-5"})})]})]})]})}}},t=>{var e=e=>t(t.s=e);t.O(0,[441,517,358],()=>e(9640)),_N_E=t.O()}]);