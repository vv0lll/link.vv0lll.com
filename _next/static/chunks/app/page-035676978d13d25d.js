(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9640:(e,t,a)=>{Promise.resolve().then(a.bind(a,9926))},9926:(e,t,a)=>{"use strict";a.d(t,{default:()=>i});var r=a(5155),l=a(2115);let n=l.forwardRef(function(e,t){let{title:a,titleId:r,...n}=e;return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":r},n),a?l.createElement("title",{id:r},a):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"}))});var s=a(2110);let o="https://l.vv0lll.com",i=()=>{let[e,t]=(0,l.useState)(""),[a,i]=(0,l.useState)(""),[c,d]=(0,l.useState)(!1),[u,m]=(0,l.useState)(""),h=e=>{try{return new URL(e),!0}catch(e){return!1}},x=async()=>{if(!e||!h(e)){s.oR.error("Please enter a valid URL.");return}d(!0),m(""),console.log(o);try{let t=await fetch("".concat(o),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})});if(!t.ok){let e=await t.json();m(e.message||"Failed to generate shortened link");return}let a=await t.json();i(a.data.shortened_url)}catch(e){m(e.message||"Something went wrong.")}finally{d(!1)}};return(0,r.jsxs)("div",{className:"bg-gray-100 w-full max-w-3xl mx-auto p-6 rounded-lg shadow-lg",children:[(0,r.jsx)(s.ToastContainer,{position:"top-right",autoClose:3e3,hideProgressBar:!0}),(0,r.jsx)("h2",{className:"text-2xl font-semibold text-gray-800 text-left mb-6",children:"Generate Shortened Link"}),(0,r.jsxs)("div",{className:"flex items-center gap-4 mb-6 flex-wrap",children:[(0,r.jsx)("label",{htmlFor:"original-link",className:"text-gray-700 font-medium whitespace-nowrap w-full sm:w-1/6",children:"Original Link:"}),(0,r.jsx)("input",{id:"original-link",type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter the original link",className:"flex-grow px-4 py-2 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}),(0,r.jsx)("button",{onClick:x,className:"bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition",children:c?(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"animate-spin mr-2",children:"\uD83D\uDD04"})," Generating..."]}):"Generate"})]}),u&&(0,r.jsx)("p",{className:"text-red-500 text-sm font-medium mb-6",children:u}),(0,r.jsxs)("div",{className:"flex items-center gap-4 mb-6 flex-wrap",children:[(0,r.jsx)("label",{htmlFor:"final-url",className:"text-gray-700 font-medium whitespace-nowrap w-full sm:w-1/6",children:"Final URL:"}),(0,r.jsxs)("div",{className:"relative flex-grow",children:[(0,r.jsx)("input",{id:"final-url",type:"text",readOnly:!0,value:a,placeholder:"Your shortened URL will appear here",className:"w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-md border border-gray-300 focus:outline-none cursor-not-allowed"}),(0,r.jsx)("button",{onClick:()=>{a&&(navigator.clipboard.writeText(a),s.oR.success("Copied to clipboard!"))},disabled:!a,className:"absolute inset-y-0 right-2 flex items-center ".concat(a?"text-gray-500 hover:text-gray-700":"text-gray-300 cursor-not-allowed"),children:(0,r.jsx)(n,{className:"h-5 w-5"})})]})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[110,441,517,358],()=>t(9640)),_N_E=e.O()}]);