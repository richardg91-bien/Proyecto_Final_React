const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/index-B06KJDE_.js","assets/js/react-jsx-BHrkn65s.js","assets/js/vendor-DuX8qqVz.js","assets/js/react-BlGBNzmT.js","assets/js/react-dom-CdLH0Htr.js","assets/js/scheduler-6ULW7vKx.js","assets/js/ui-libs-CMC0-5Gq.js","assets/css/ui-libs-GNLSjkBZ.css","assets/js/icons-B0J-VIpq.js","assets/js/styled-C-B3fQLS.js","assets/js/app-context-CeLer4GA.js","assets/js/index-DNhdQJpe.js","assets/js/useCartActions-D8J_Aq_N.js","assets/js/admin-chunk-Ccd8qXJX.js","assets/js/bootstrap-Bz9xP46s.js","assets/css/bootstrap-C11chwFa.css","assets/css/admin-chunk-DfzYEiYy.css","assets/js/router-CCsHvCk2.js","assets/js/react-dom-client-DTIc_rDM.js","assets/js/index-B6xBFVzB.js","assets/js/index-DXh0M-mK.js","assets/js/index-JEGLUfwO.js","assets/js/index-DfVJFWjb.js","assets/js/index-DtKeTYvf.js","assets/js/index-NPOccDP6.js","assets/js/index-C_vTmBM2.js"])))=>i.map(i=>d[i]);
import{j as e}from"./react-jsx-BHrkn65s.js";import{c as t,d as s,R as r,B as a}from"./bootstrap-Bz9xP46s.js";import{y as n,H as i,a as o,L as l}from"./ui-libs-CMC0-5Gq.js";import{r as c}from"./react-BlGBNzmT.js";import{c as d}from"./react-dom-client-DTIc_rDM.js";import{d as m,m as p}from"./styled-C-B3fQLS.js";import{p as x,C as u,c as h,A as g,a as f}from"./app-context-CeLer4GA.js";import{F as b,a as j,b as y,c as w,d as v,e as $,f as k,g as N,h as z,i as A,j as S}from"./icons-B0J-VIpq.js";import{S as C,E as I,u as E}from"./admin-chunk-Ccd8qXJX.js";import{L as _,N as P,u as R,a as L,B as T,R as O,b as F}from"./router-CCsHvCk2.js";import"./vendor-DuX8qqVz.js";import"./react-dom-CdLH0Htr.js";import"./scheduler-6ULW7vKx.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const M={},D=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");r=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in M)return;M[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,a&&r.setAttribute("nonce",a),document.head.appendChild(r),t?new Promise((t,s)=>{r.addEventListener("load",t),r.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function a(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(const e of t||[])"rejected"===e.status&&a(e.reason);return e().catch(a)})},Y={apis:[{href:"https://6790f03e6a8940f8bfff5e04.mockapi.io",crossorigin:!0}],cdns:[{href:"https://cdn.jsdelivr.net",crossorigin:!0}]};let Q=[];const V=(e=null)=>{const[t,s]=c.useState([]),[r,a]=c.useState(!0),[n,i]=c.useState(null);c.useEffect(()=>{(async()=>{try{let t;a(!0),i(null),t="category"===e?.type?await x.getProductsByCategory(e.value):"gender"===e?.type?await x.getProductsByGender(e.value):await x.getProducts();const r=[...Q,...t];s(r)}catch(t){i(t.message),s([])}finally{a(!1)}})()},[e?.type,e?.value]);const o=()=>{(async()=>{try{let t;a(!0),i(null),t="category"===e?.type?await x.getProductsByCategory(e.value):"gender"===e?.type?await x.getProductsByGender(e.value):await x.getProducts();const r=[...Q,...t];s(r)}catch(t){i(t.message),s([])}finally{a(!1)}})()};return{products:t,loading:r,error:n,refetch:o,addLocalProduct:e=>{Q.push(e),o()}}},W=((e="Producto",t=300,s=300)=>`data:image/svg+xml;base64,${btoa(`\n    <svg width="${t}" height="${s}" xmlns="http://www.w3.org/2000/svg">\n      <rect width="100%" height="100%" fill="#f0f0f0"/>\n      <text \n        x="50%" \n        y="50%" \n        font-family="Arial, sans-serif" \n        font-size="20" \n        fill="#999" \n        text-anchor="middle" \n        dominant-baseline="middle"\n      >\n        ${e}\n      </text>\n    </svg>\n  `)}`)("Sin Imagen"),B="#2c3e50",q="#34495e",U="#3498db",H="#27ae60",J="#f39c12",X="#e74c3c",G="#ecf0f1",K="#2c3e50",Z="#ffffff",ee="#7f8c8d",te="#dee2e6",se="rgba(0, 0, 0, 0.1)",re="rgba(0, 0, 0, 0.15)",ae="(min-width: 576px)",ne="(min-width: 768px)",ie="(min-width: 992px)",oe="(min-width: 1200px)";m.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${ae} {
    max-width: 540px;
  }

  @media ${ne} {
    max-width: 720px;
  }

  @media ${ie} {
    max-width: 960px;
  }

  @media ${oe} {
    max-width: 1140px;
  }

  @media ${"(min-width: 1400px)"} {
    max-width: 1320px;
  }
`,m.div`
  background: ${Z};
  border-radius: 12px;
  box-shadow: 0 4px 6px ${se};
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 8px 16px ${re};
    transform: translateY(-4px);
  }
`,m.button`
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  background: ${e=>{switch(e.variant){case"primary":default:return B;case"secondary":return q;case"success":return H;case"warning":return J;case"danger":return X}}};
  
  color: ${Z};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${re};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${e=>e.outline&&`\n    background: transparent;\n    border: 2px solid ${B};\n    color: ${B};\n\n    &:hover {\n      background: ${B};\n      color: ${Z};\n    }\n  `}

  ${e=>e.fullWidth&&"\n    width: 100%;\n    justify-content: center;\n  "}

  ${e=>"small"===e.size&&"\n    padding: 6px 16px;\n    font-size: 0.875rem;\n  "}

  ${e=>"large"===e.size&&"\n    padding: 14px 32px;\n    font-size: 1.125rem;\n  "}
`,m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${e=>{switch(e.variant){case"primary":default:return B;case"success":return H;case"warning":return J;case"danger":return X}}};
  color: ${Z};
  min-width: 20px;
`,m.div`
  display: grid;
  gap: ${e=>e.gap||"24px"};
  
  grid-template-columns: repeat(1, 1fr);

  @media ${ae} {
    grid-template-columns: repeat(${e=>e.sm||2}, 1fr);
  }

  @media ${ne} {
    grid-template-columns: repeat(${e=>e.md||2}, 1fr);
  }

  @media ${ie} {
    grid-template-columns: repeat(${e=>e.lg||3}, 1fr);
  }

  @media ${oe} {
    grid-template-columns: repeat(${e=>e.xl||4}, 1fr);
  }
`,m.div`
  display: flex;
  align-items: ${e=>e.align||"center"};
  justify-content: ${e=>e.justify||"flex-start"};
  gap: ${e=>e.gap||"16px"};
  flex-wrap: ${e=>e.wrap?"wrap":"nowrap"};
  flex-direction: ${e=>e.direction||"row"};
`,m.p`
  margin: 0;
  color: ${e=>e.color||"#333333"};
  font-size: ${e=>{switch(e.size){case"small":return"0.875rem";case"large":return"1.125rem";case"xlarge":return"1.5rem";default:return"1rem"}}};
  font-weight: ${e=>e.weight||"400"};
  text-align: ${e=>e.align||"left"};
  line-height: 1.6;
`,m.h1`
  margin: 0;
  color: ${e=>e.color||K};
  font-weight: ${e=>e.weight||"700"};
  line-height: 1.2;
  font-size: ${e=>{switch(e.level){case 2:return"2rem";case 3:return"1.75rem";case 4:return"1.5rem";case 5:return"1.25rem";case 6:return"1rem";default:return"2.5rem"}}};

  @media ${ne} {
    font-size: ${e=>{switch(e.level){case 2:return"2.5rem";case 3:return"2rem";case 4:return"1.75rem";case 5:return"1.5rem";case 6:return"1.125rem";default:return"3rem"}}};
  }
`,m.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${te};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${U};
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  &::placeholder {
    color: ${ee};
  }

  &:disabled {
    background: ${G};
    cursor: not-allowed;
  }
`,m.div`
  border: 3px solid ${G};
  border-top: 3px solid ${B};
  border-radius: 50%;
  width: ${e=>e.size||"40px"};
  height: ${e=>e.size||"40px"};
  animation: spin 1s linear infinite;
  margin: ${e=>e.center?"0 auto":"0"};

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;const le=m.div`
  background: ${Z};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px ${se};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px ${re};
  }
`,ce=m.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  overflow: hidden;
  padding-bottom: 100%; /* Mantener aspect ratio 1:1 */
`,de=m.span`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${e=>{switch(e.type){case"new":return H;case"sale":return X;case"featured":return U;default:return B}}};
  color: ${Z};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
`,me=m.button`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: ${Z};
  color: ${e=>e.$isFavorite?X:ee};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px ${se};
  z-index: 2;
  opacity: 0;

  ${le}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.1);
    color: ${X};
  }

  svg {
    font-size: 18px;
    fill: ${e=>e.$isFavorite?"currentColor":"none"};
  }
`;m.button`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${Z};
  color: ${K};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px ${se};
  opacity: 0;
  z-index: 2;

  ${le}:hover & {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  &:hover {
    background: ${K};
    color: ${Z};
  }

  svg {
    font-size: 16px;
  }
`;const pe=m.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xe=m.span`
  font-size: 0.75rem;
  color: ${ee};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`,ue=m.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${K};
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8em;
`,he=m.p`
  font-size: 0.875rem;
  color: ${ee};
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,ge=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`,fe=m.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${K};
`,be=m.span`
  font-size: 1rem;
  color: ${ee};
  text-decoration: line-through;
`,je=m.span`
  padding: 4px 8px;
  border-radius: 6px;
  background: ${X};
  color: ${Z};
  font-size: 0.75rem;
  font-weight: 600;
`,ye=m.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: ${B};
  color: ${Z};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover:not(:disabled) {
    background: ${q};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${re};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    background: ${ee};
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    font-size: 18px;
  }
`,we=m.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  color: ${J};
`,ve=m.span`
  color: ${ee};
  margin-left: 4px;
`,$e=m.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${e=>0===e.$stock?`${X}15`:e.$stock<5?`${J}15`:`${H}15`};
  color: ${e=>0===e.$stock?X:e.$stock<5?J:H};

  &::before {
    content: '●';
    font-size: 0.6rem;
  }
`;m.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`,m.button`
  flex: 1;
  padding: 8px;
  border: 2px solid ${te};
  border-radius: 8px;
  background: ${Z};
  color: ${K};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${B};
    color: ${B};
    transform: translateY(-2px);
  }

  svg {
    font-size: 16px;
  }
`;const ke=m.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${le}:hover & img {
    transform: scale(1.1);
  }
`,Ne=({product:t})=>{const{cartProducts:s,setCartProducts:r}=c.useContext(u),[a,i]=c.useState(!1),[o,l]=c.useState(t.img),[d,m]=c.useState(!1),p=t.oldPrice&&t.oldPrice>t.price,x=p?Math.round((t.oldPrice-t.price)/t.oldPrice*100):0,h=t.isNew?{type:"new",text:"Nuevo"}:p?{type:"sale",text:`${x}% OFF`}:t.isFeatured?{type:"featured",text:"Destacado"}:null,g=void 0!==t.stock?t.stock:10;return e.jsxs(le,{children:[e.jsxs(ce,{children:[e.jsx(ke,{children:e.jsx("img",{src:o,alt:t.name,onError:()=>{d||(m(!0),l(W))},loading:"lazy",decoding:"async",fetchPriority:t.isFeatured?"high":"low",width:"400",height:"500",sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"})}),h&&e.jsx(de,{type:h.type,children:h.text}),e.jsx(me,{onClick:()=>{i(!a),a||n.info(`${t.name} agregado a favoritos`,{position:"bottom-right",autoClose:2e3,icon:e.jsx(b,{})})},$isFavorite:a,title:a?"Quitar de favoritos":"Agregar a favoritos","aria-label":a?"Quitar de favoritos":"Agregar a favoritos",children:e.jsx(b,{})})]}),e.jsxs(pe,{children:[t.category&&e.jsx(xe,{children:t.category}),e.jsx(ue,{children:t.name}),t.description&&e.jsx(he,{children:t.description}),t.rating&&e.jsxs(we,{children:[[...Array(5)].map((s,r)=>e.jsx(j,{fill:r<Math.floor(t.rating)?"currentColor":"none"},r)),e.jsxs(ve,{children:["(",t.rating.toFixed(1),")"]})]}),e.jsxs(ge,{children:[e.jsxs(fe,{children:["$",t.price.toFixed(2)]}),p&&e.jsxs(e.Fragment,{children:[e.jsxs(be,{children:["$",t.oldPrice.toFixed(2)]}),e.jsxs(je,{children:["-",x,"%"]})]})]}),e.jsx($e,{$stock:g,children:0===g?"Sin stock":g<5?`Últimas ${g} unidades`:"En stock"}),e.jsxs(ye,{onClick:()=>{s.find(e=>e.id===t.id)?(r(s.map(e=>e.id===t.id?{...e,quantity:e.quantity+1}:e)),n.success(`Se agregó otra unidad de ${t.name}`,{position:"bottom-right",autoClose:2e3})):(r([...s,{...t,quantity:1}]),n.success(`${t.name} agregado al carrito`,{position:"bottom-right",autoClose:2e3,icon:e.jsx(y,{})}))},disabled:0===g,children:[e.jsx(y,{}),0===g?"Sin stock":"Agregar al carrito"]})]})]})},ze=m.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2c3e50);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Ae=m(r)`
  margin: 0 auto;
  max-width: 1400px;
`,Se=()=>{const{products:r,loading:a,error:n,refetch:o}=V();return a?e.jsx(C,{message:"Cargando productos..."}):n?e.jsx(I,{message:n,onRetry:o}):e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx("title",{children:"Todos los Productos - Indumentaria Agat"}),e.jsx("meta",{name:"description",content:"Explora todos nuestros productos de moda: ropa para hombre, mujer, accesorios y más. Encuentra tu estilo en Indumentaria Agat."}),e.jsx("meta",{name:"keywords",content:"productos, catálogo, ropa, moda, indumentaria, comprar online"})]}),e.jsxs(t,{fluid:!0,className:"py-5",children:[e.jsx(ze,{children:"Todos Nuestros Productos"}),e.jsx(Ae,{xs:1,sm:2,md:3,lg:4,className:"g-4 justify-content-center",children:r.map(t=>e.jsx(s,{children:e.jsx(Ne,{product:t})},t.id))})]})]})};class Ce extends c.Component{render(){return e.jsxs("div",{className:"items-wrapper border-top border-4 border-dark",children:[e.jsx("div",{className:"items-title my-5 text-uppercase text-center fw-light",style:{fontFamily:"Lato, sans-serif",color:"rgba(0,0,0,0.8)"},children:e.jsx("h4",{children:"All Items"})}),e.jsx(Se,{})]})}}const Ie=()=>{const t="undefined"!=typeof window?window.location.href:"https://indumentaria-agat.com";return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx("title",{children:"Indumentaria Agat - Moda de Calidad | Ropa para Hombres y Mujeres"}),e.jsx("meta",{name:"description",content:"Descubre Indumentaria Agat: tu tienda online de moda con las mejores prendas de ropa, accesorios y calzado para hombres y mujeres. Calidad, estilo y precios competitivos. ¡Envíos a todo el país!"}),e.jsx("meta",{name:"keywords",content:"indumentaria, moda, ropa, accesorios, hombre, mujer, comprar ropa online, tienda de ropa, fashion, estilo, Agat, ropa de calidad"}),e.jsx("meta",{property:"og:title",content:"Indumentaria Agat - Moda de Calidad"}),e.jsx("meta",{property:"og:description",content:"Tienda online de moda con las mejores prendas para expresar tu personalidad única. Ropa, accesorios y más."}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:url",content:t}),e.jsx("meta",{property:"og:site_name",content:"Indumentaria Agat"}),e.jsx("meta",{property:"og:locale",content:"es_AR"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:"Indumentaria Agat - Moda de Calidad"}),e.jsx("meta",{name:"twitter:description",content:"Descubre nuestra colección de moda para todos los estilos. Calidad y diseño en cada prenda."}),e.jsx("meta",{name:"author",content:"Indumentaria Agat"}),e.jsx("meta",{name:"robots",content:"index, follow"}),e.jsx("meta",{name:"language",content:"Spanish"}),e.jsx("meta",{name:"revisit-after",content:"7 days"}),e.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),e.jsx("meta",{name:"theme-color",content:"#2c3e50"}),e.jsx("link",{rel:"canonical",href:t}),e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"})]}),e.jsx("div",{className:"content d-flex w-100 justify-content-between m-0",style:{margin:0},children:e.jsx(Ce,{})})]})},Ee={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0},_e=t=>{n.success(e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("i",{className:"bi bi-check-circle-fill me-2",style:{fontSize:"1.2rem"}}),e.jsxs("div",{children:[e.jsx("strong",{children:"¡Agregado al carrito!"}),e.jsx("div",{style:{fontSize:"0.85rem",marginTop:"2px"},children:t})]})]}),{...Ee,autoClose:2e3})},Pe="/assets/jpeg/logo1-D-Z4Pxn5.jpeg",Re=()=>{const{isAuthenticated:t,user:s,logout:r,isAdmin:i}=E(),{cartProducts:o}=c.useContext(u),[l,d]=c.useState(!1),m=o.reduce((e,t)=>e+t.quantity,0),p=()=>{d(!1)};return e.jsxs("nav",{className:"navbar navbar-expand-lg d-flex align-items-center justify-content-between w-100 px-4",style:{background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0))",minHeight:"4em",boxShadow:"none"},children:[e.jsx("div",{className:"navbar-brand",children:e.jsxs(_,{to:"/",className:"text-white text-decoration-none d-flex align-items-center",onClick:p,children:[e.jsx("img",{src:Pe,alt:"Indumentaria Agat Logo",style:{height:"40px",width:"auto",borderRadius:"6px",marginRight:"8px"}}),e.jsx("span",{className:"fw-bold d-none d-sm-inline",style:{fontFamily:"Lato, sans-serif",fontSize:"1.1rem"},children:"Indumentaria Agat"})]})}),e.jsx("button",{className:"navbar-toggler d-lg-none border-0",type:"button",onClick:()=>{d(!l)},style:{background:"none",padding:"4px 8px"},children:e.jsx("span",{className:"text-white",style:{fontSize:"1.5rem"},children:l?e.jsx(w,{size:24}):e.jsx(v,{size:24})})}),e.jsxs("div",{className:`navbar-collapse ${l?"d-block":"d-none"} d-lg-flex`,style:{position:l?"absolute":"relative",top:l?"100%":"auto",left:l?"0":"auto",right:l?"0":"auto",backgroundColor:l?"rgba(0,0,0,0.95)":"transparent",zIndex:1e3,padding:l?"1rem":"0",borderRadius:l?"0 0 10px 10px":"0"},children:[e.jsxs("ul",{className:"navbar-nav me-auto "+(l?"d-block":"d-flex"),style:{listStyle:"none",fontFamily:"Quicksand, sans-serif",margin:0,padding:0},children:[e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/",onClick:p,children:[e.jsx("i",{className:"bi bi-house me-2"}),"Inicio"]})}),e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/women",onClick:p,children:[e.jsx("i",{className:"bi bi-person-dress me-2"}),"Mujer"]})}),e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/men",onClick:p,children:[e.jsx("i",{className:"bi bi-person me-2"}),"Hombre"]})}),e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/clothes",onClick:p,children:[e.jsx("i",{className:"bi bi-bag me-2"}),"Ropa"]})}),e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/accessories",onClick:p,children:[e.jsx("i",{className:"bi bi-gem me-2"}),"Accesorios"]})}),e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/about",onClick:p,children:[e.jsx("i",{className:"bi bi-info-circle me-2"}),"About"]})}),e.jsx("li",{className:l?"mb-2":"",children:e.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/contact",onClick:p,children:[e.jsx("i",{className:"bi bi-envelope me-2"}),"Contacto"]})})]}),e.jsxs("div",{className:`navbar-actions d-flex ${l?"flex-column mt-3":"flex-row"} align-items-${l?"start":"center"} gap-2`,children:[e.jsx(P,{to:"/cart",className:"text-decoration-none",onClick:p,children:e.jsxs(a,{variant:"outline-light",size:"sm",className:"position-relative",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[e.jsx(y,{size:18}),m>0&&e.jsx("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{fontSize:"0.7rem"},children:m}),l&&e.jsx("span",{className:"ms-2",children:"Carrito"})]})}),t&&i()&&e.jsx(P,{to:"/admin",className:"text-decoration-none",onClick:p,children:e.jsxs(a,{variant:"outline-warning",size:"sm",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[e.jsx($,{size:16}),"Admin"]})}),t?e.jsxs("div",{className:`d-flex ${l?"flex-column":"flex-row"} align-items-${l?"start":"center"} gap-2`,children:[e.jsxs("span",{className:"text-white small",style:{fontFamily:"Quicksand, sans-serif",display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx(k,{size:18}),s?.name]}),e.jsxs(a,{variant:"outline-danger",size:"sm",onClick:()=>{r(),p(),n.info("Sesión cerrada correctamente",{...Ee,autoClose:2e3})},title:"Cerrar Sesión",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[e.jsx(N,{size:16}),l&&e.jsx("span",{className:"ms-2",children:"Salir"})]})]}):e.jsx(_,{to:"/login",className:"text-decoration-none",onClick:p,children:e.jsxs(a,{variant:"outline-success",size:"sm",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[e.jsx(k,{size:16}),"Iniciar Sesión"]})})]})]})]})},Le=m.div`
  height: 40em;
  font-family: 'Lato', sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 30em;
    padding: 3rem 1rem;
  }
`,Te=m.div`
  margin-bottom: 2rem;
  animation: fadeInDown 1s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;m.img`
  height: 150px;
  width: auto;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;const Oe=m.h1`
  font-weight: 300;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  font-size: 3.5rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  animation: fadeIn 1.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`,Fe=m.p`
  font-size: 1.2rem;
  font-family: 'Quicksand', sans-serif;
  max-width: 600px;
  line-height: 1.6;
  animation: fadeIn 2s ease-out;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`,Me=m.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: fadeInUp 2.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,De=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,Ye=m.div`
  margin-top: 2rem;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`,Qe=()=>e.jsxs(Le,{className:"d-flex flex-column align-items-center justify-content-center",children:[e.jsx(Te,{children:e.jsx("img",{src:Pe,alt:"Indumentaria Agat Logo",loading:"eager",decoding:"async",fetchPriority:"high",style:{height:"150px",width:"auto",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.3)",transition:"transform 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.transform="scale(1.05) rotate(2deg)",onMouseLeave:e=>e.currentTarget.style.transform="scale(1) rotate(0deg)"})}),e.jsx(Oe,{id:"header-title",children:"Indumentaria Agat"}),e.jsx(Fe,{className:"text-center text-muted mb-4",children:"Moda de calidad para expresar tu personalidad única"}),e.jsxs(Me,{children:[e.jsxs(De,{children:[e.jsx(j,{}),e.jsx("span",{children:"Calidad Premium"})]}),e.jsxs(De,{children:[e.jsx(z,{}),e.jsx("span",{children:"Amplio Catálogo"})]}),e.jsxs(De,{children:[e.jsx(A,{}),e.jsx("span",{children:"Envíos a Todo el País"})]})]}),e.jsx(Ye,{children:e.jsxs("p",{className:"text-muted small",style:{fontFamily:"Quicksand, sans-serif",display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx(S,{}),"Explora nuestras colecciones"]})})]}),Ve=()=>e.jsxs("div",{className:"footer d-flex flex-column justify-content-center align-items-center w-100 bg-dark text-white py-3",style:{fontFamily:"Quicksand, sans-serif",fontWeight:"lighter"},children:[e.jsxs("div",{className:"social-media d-flex gap-3 mb-2",children:[e.jsx("a",{href:h.social.twitter,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none",style:{fontSize:"1.5rem",transition:"transform 0.2s ease, color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.2)",e.currentTarget.style.color="#1DA1F2"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.color="white"},title:"Síguenos en X (Twitter)",children:e.jsx("i",{className:"bi bi-twitter-x"})}),e.jsx("a",{href:h.social.instagram,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none",style:{fontSize:"1.5rem",transition:"transform 0.2s ease, color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.2)",e.currentTarget.style.color="#E4405F"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.color="white"},title:"Síguenos en Instagram",children:e.jsx("i",{className:"bi bi-instagram"})}),e.jsx("a",{href:h.social.whatsappUrl,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none",style:{fontSize:"1.5rem",transition:"transform 0.2s ease, color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.2)",e.currentTarget.style.color="#25D366"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.color="white"},title:"Contáctanos por WhatsApp",children:e.jsx("i",{className:"bi bi-whatsapp"})})]}),e.jsx("p",{className:"m-0 text-center",children:"© 2025 Copyright Richard Garcia"})]}),We=()=>{const t=R(),s=t.pathname.split("/").filter(e=>e);return"/"===t.pathname?null:e.jsx("nav",{"aria-label":"breadcrumb",className:"bg-light border-bottom",children:e.jsx("div",{className:"container",children:e.jsxs("ol",{className:"breadcrumb mb-0 py-2",style:{fontFamily:"Quicksand, sans-serif"},children:[e.jsx("li",{className:"breadcrumb-item",children:e.jsxs(_,{to:"/",className:"text-decoration-none text-muted",style:{fontSize:"0.9rem"},children:[e.jsx("i",{className:"bi bi-house-fill me-1"}),"Inicio"]})}),s.map((t,r)=>{const a=(e=>"/"+s.slice(0,e+1).join("/"))(r),n=r===s.length-1,i=(e=>({women:"Mujer",men:"Hombre",clothes:"Ropa",accessories:"Accesorios",about:"Acerca de",contact:"Contacto",cart:"Carrito",products:"Producto"}[e]||e.charAt(0).toUpperCase()+e.slice(1)))(t);return e.jsx("li",{className:"breadcrumb-item "+(n?"active":""),"aria-current":n?"page":void 0,children:n?e.jsx("span",{className:"text-dark fw-medium",style:{fontSize:"0.9rem"},children:i}):e.jsx(_,{to:a,className:"text-decoration-none text-muted",style:{fontSize:"0.9rem"},children:i})},a)})]})})})},Be=["first-header","second-header","third-header"],qe=({children:t})=>{const[s,r]=c.useState(0),[a,n]=c.useState([]);c.useEffect(()=>{const e=setInterval(()=>r(e=>e+1),3e3);return()=>clearInterval(e)},[]);const i=Be[s%Be.length];return e.jsx(u.Provider,{value:{cartProducts:a,setCartProducts:n},children:e.jsxs("div",{children:[e.jsxs("div",{className:`${i} d-flex flex-column bg-cover bg-center`,style:{backgroundImage:"first-header"===i?"url('https://preview.ibb.co/j8nRCQ/fashion2.jpg')":"second-header"===i?"url('https://preview.ibb.co/fm4Cmk/fashion3.jpg')":"third-header"===i?"url('https://preview.ibb.co/bMsCK5/fashion5.jpg')":"fourth-header"===i?"url('https://preview.ibb.co/gtsZXQ/fashion6.jpg')":void 0,backgroundSize:"cover",backgroundPosition:"center"},children:[e.jsx(Re,{}),e.jsx(Qe,{})]}),e.jsx(We,{}),e.jsx("div",{className:"content w-100",style:{backgroundColor:"#F9F6F6"},children:t}),e.jsx(Ve,{})]})})},Ue=({children:t})=>{const[s,r]=c.useState(!1),[a,n]=c.useState(null),[i,o]=c.useState(!0);c.useEffect(()=>{setTimeout(()=>{const e=localStorage.getItem("isAuthenticated"),t=localStorage.getItem("user");"true"===e&&t&&(r(!0),n(JSON.parse(t))),o(!1)},500)},[]);const l={isAuthenticated:s,user:a,loading:i,login:e=>{if(!e.email||!e.password)return{success:!1,message:"Email y contraseña son obligatorios"};if("admin@shopnow.com"===e.email){const t={id:1,email:e.email,name:e.name||"Administrador",role:"admin"};return r(!0),n(t),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("user",JSON.stringify(t)),{success:!0,user:t}}const t=JSON.parse(localStorage.getItem("registeredUsers")||"[]").find(t=>t.email===e.email&&t.password===e.password);if(t){const e={id:t.id,email:t.email,name:t.name,role:t.role};return r(!0),n(e),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("user",JSON.stringify(e)),{success:!0,user:e}}return{success:!1,message:"Email o contraseña incorrectos"}},register:e=>{if(!e.email||!e.password||!e.name)return{success:!1,message:"Todos los campos son obligatorios"};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))return{success:!1,message:"Por favor ingresa un email válido"};if(e.password.length<6)return{success:!1,message:"La contraseña debe tener al menos 6 caracteres"};const t=JSON.parse(localStorage.getItem("registeredUsers")||"[]");if(t.find(t=>t.email===e.email))return{success:!1,message:"Este email ya está registrado"};const s={id:Date.now(),email:e.email,name:e.name,role:"admin@shopnow.com"===e.email?"admin":"user",password:e.password,registeredAt:(new Date).toISOString()};return t.push(s),localStorage.setItem("registeredUsers",JSON.stringify(t)),r(!0),n(s),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("user",JSON.stringify(s)),{success:!0,user:s,message:"Registro exitoso"}},logout:()=>{r(!1),n(null),localStorage.removeItem("isAuthenticated"),localStorage.removeItem("user")},isAdmin:()=>a&&"admin"===a.role};return e.jsx(g.Provider,{value:l,children:t})},He=({children:t,requireAdmin:s=!1})=>{const{isAuthenticated:r,user:a,loading:n,isAdmin:i}=E(),o=R();return n?e.jsx(C,{message:"Verificando autenticación..."}):r?s&&!i()?e.jsx("div",{className:"container py-5",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-md-8",children:e.jsxs("div",{className:"alert alert-warning text-center border-0 shadow",children:[e.jsx("i",{className:"bi bi-shield-exclamation fs-1 mb-3 text-warning"}),e.jsx("h4",{className:"text-dark",children:"Acceso Restringido al Panel de Administración"}),e.jsx("p",{className:"mb-3 text-muted",children:"Has iniciado sesión correctamente, pero no tienes permisos de administrador para acceder a esta sección. Solo los administradores pueden gestionar productos y acceder al panel de control."}),e.jsxs("div",{className:"bg-light p-3 rounded mb-3",children:[e.jsx("strong",{children:"👤 Usuario actual:"})," ",a?.email,e.jsx("br",{}),e.jsx("strong",{children:"🏷️ Rol:"})," ",e.jsx("span",{className:"badge bg-primary",children:a?.role||"user"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"small text-muted mb-3",children:"Como usuario registrado puedes:"}),e.jsxs("div",{className:"d-flex flex-wrap gap-2 justify-content-center",children:[e.jsxs("a",{href:"/",className:"btn btn-outline-primary btn-sm",children:[e.jsx("i",{className:"bi bi-house me-1"}),"Ver Productos"]}),e.jsxs("a",{href:"/cart",className:"btn btn-outline-success btn-sm",children:[e.jsx("i",{className:"bi bi-cart me-1"}),"Mi Carrito"]}),e.jsxs("a",{href:"/women",className:"btn btn-outline-info btn-sm",children:[e.jsx("i",{className:"bi bi-person-dress me-1"}),"Ropa Femenina"]}),e.jsxs("a",{href:"/men",className:"btn btn-outline-dark btn-sm",children:[e.jsx("i",{className:"bi bi-person me-1"}),"Ropa Masculina"]})]}),e.jsx("hr",{className:"my-3"}),e.jsxs("p",{className:"small text-muted",children:[e.jsx("strong",{children:"💡 ¿Necesitas acceso de administrador?"}),e.jsx("br",{}),"Contacta al administrador o usa la cuenta: ",e.jsx("code",{children:"admin@shopnow.com"})]})]})]})})})}):t:e.jsx(L,{to:"/login",state:{from:o},replace:!0})},Je=p`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,Xe=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`,Ge=m.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${Je} 1s linear infinite;
`,Ke=m.p`
  margin-top: 1rem;
  color: #666;
  font-size: 0.9rem;
`,Ze=({text:t="Cargando..."})=>e.jsx(Xe,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(Ge,{role:"status","aria-label":"Cargando contenido"}),e.jsx(Ke,{children:t})]})}),et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tt(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&navigator.serviceWorker.controller}}}).catch(e=>{})}(()=>{const e=document.head;Y.apis.forEach(t=>{const s=document.createElement("link");s.rel="preconnect",s.href=t.href,t.crossorigin&&(s.crossOrigin="anonymous"),e.appendChild(s);const r=document.createElement("link");r.rel="dns-prefetch",r.href=t.href,e.appendChild(r)}),Y.cdns.forEach(t=>{const s=document.createElement("link");s.rel="preconnect",s.href=t.href,t.crossorigin&&(s.crossOrigin="anonymous"),e.appendChild(s)})})(),window.addEventListener("pageshow",e=>{e.persisted}),window.addEventListener("pagehide",e=>{e.persisted}),document.addEventListener("visibilitychange",()=>{});const st=c.lazy(()=>D(()=>import("./index-B06KJDE_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),rt=c.lazy(()=>D(()=>import("./index-DNhdQJpe.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,12,10,13,14,15,16,17,18,9]))),at=c.lazy(()=>D(()=>import("./index-B6xBFVzB.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,8,12,10,13,14,15,16,17,18,9]))),nt=c.lazy(()=>D(()=>import("./index-DXh0M-mK.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,12,10,13,14,15,16,17,18,9]))),it=c.lazy(()=>D(()=>import("./index-JEGLUfwO.js"),__vite__mapDeps([21,1,2,3,4,5,8,6,7,12,10,13,14,15,16,17,18,9]))),ot=c.lazy(()=>D(()=>import("./index-DfVJFWjb.js"),__vite__mapDeps([22,1,2,3,4,5,6,7]))),lt=c.lazy(()=>D(()=>import("./index-DtKeTYvf.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,14,15]))),ct=c.lazy(()=>D(()=>import("./index-NPOccDP6.js"),__vite__mapDeps([24,1,2,3,4,5,6,7,13,10,14,15,16,17]))),dt=c.lazy(()=>D(()=>import("./admin-chunk-Ccd8qXJX.js").then(e=>e.i),__vite__mapDeps([13,1,2,3,4,5,6,7,10,14,15,16]))),mt=c.lazy(()=>D(()=>import("./index-C_vTmBM2.js"),__vite__mapDeps([25,1,2,3,4,5,14,15,10,12,13,6,7,16,17])));d.createRoot(document.getElementById("root")).render(e.jsx(o,{children:e.jsx(T,{children:e.jsx(Ue,{children:e.jsxs(f,{children:[e.jsx(qe,{children:e.jsx(c.Suspense,{fallback:e.jsx(Ze,{}),children:e.jsxs(O,{children:[e.jsx(F,{path:"/",element:e.jsx(Ie,{})}),e.jsx(F,{path:"/login",element:e.jsx(ct,{})}),e.jsx(F,{path:"/cart",element:e.jsx(He,{children:e.jsx(st,{})})}),e.jsx(F,{path:"/admin",element:e.jsx(He,{requireAdmin:!0,children:e.jsx(dt,{})})}),e.jsx(F,{path:"/women",element:e.jsx(rt,{})}),e.jsx(F,{path:"/men",element:e.jsx(at,{})}),e.jsx(F,{path:"/clothes",element:e.jsx(nt,{})}),e.jsx(F,{path:"/accessories",element:e.jsx(it,{})}),e.jsx(F,{path:"/about",element:e.jsx(ot,{})}),e.jsx(F,{path:"/contact",element:e.jsx(lt,{})}),e.jsx(F,{path:"/products/:id",element:e.jsx(mt,{})})]})})}),e.jsx(l,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})})})})),function(){if("serviceWorker"in navigator){if(new URL("/",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/service-worker.js";et?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):tt(e)}).catch(()=>{})}(e):tt(e)})}}();export{_e as s,V as u};
