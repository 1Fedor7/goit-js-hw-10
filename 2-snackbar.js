import"./assets/styles-CnrFeICR.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const s=Number(e.target.elements.delay.value),i=e.target.elements.state.value;r(s,i).then(t=>{o.success({title:"✅ Success",message:`Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{o.error({title:"❌ Error",message:`Rejected promise in ${t}ms`,position:"topRight"})})});function r(e,s){return new Promise((i,t)=>{setTimeout(()=>{s==="fulfilled"?i(e):t(e)},e)})}
//# sourceMappingURL=2-snackbar.js.map
