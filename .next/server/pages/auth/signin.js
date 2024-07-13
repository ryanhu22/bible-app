(()=>{var e={};e.id=65,e.ids=[65,888,660],e.modules={1168:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>S,default:()=>g,getServerSideProps:()=>v,getStaticPaths:()=>h,getStaticProps:()=>x,reportWebVitals:()=>f,routeModule:()=>w,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>j,unstable_getStaticParams:()=>P,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>m});var s={};r.r(s),r.d(s,{default:()=>auth_signin,getServerSideProps:()=>getServerSideProps});var i=r(7093),a=r(5244),n=r(1323),l=r(9209),c=r.n(l),o=r(1732),u=r(997),d=r(6689),p=r(1649);async function getServerSideProps(){let e=await (0,p.getProviders)();return{props:{providers:e}}}let auth_signin=function({providers:e}){let[t,r]=(0,d.useState)(""),[s,i]=(0,d.useState)("");return u.jsx("div",{children:u.jsx("div",{className:"flex items-center justify-center bg-gray-50 fixed top-0 left-0 w-screen h-screen m-0 p-0",children:(0,u.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[u.jsx("div",{children:u.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})}),Object.values(e).map(e=>u.jsx("div",{children:u.jsx("div",{className:"flex justify-center",children:(0,u.jsxs)("button",{className:"flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",onClick:()=>(0,p.signIn)(e.id,{callbackUrl:"/"}),children:[u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{d:"M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z",fillRule:"evenodd",clipRule:"evenodd"})}),(0,u.jsxs)("span",{children:["Sign in with ",e.name]})]})})},e.name))]})})})},g=(0,n.l)(s,"default"),x=(0,n.l)(s,"getStaticProps"),h=(0,n.l)(s,"getStaticPaths"),v=(0,n.l)(s,"getServerSideProps"),S=(0,n.l)(s,"config"),f=(0,n.l)(s,"reportWebVitals"),m=(0,n.l)(s,"unstable_getStaticProps"),b=(0,n.l)(s,"unstable_getStaticPaths"),P=(0,n.l)(s,"unstable_getStaticParams"),_=(0,n.l)(s,"unstable_getServerProps"),j=(0,n.l)(s,"unstable_getServerSideProps"),w=new i.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/auth/signin",pathname:"/auth/signin",bundlePath:"",filename:""},components:{App:o.default,Document:c()},userland:s})},1732:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_app});var s=r(997);r(6764);var i=r(1649);let a=require("recoil"),_app=function({Component:e,pageProps:{session:t,...r}}){return s.jsx(i.SessionProvider,{session:t,children:s.jsx(a.RecoilRoot,{children:s.jsx(e,{...r})})})}},6764:()=>{},1649:e=>{"use strict";e.exports=require("next-auth/react")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[209,450],()=>__webpack_exec__(1168));module.exports=r})();