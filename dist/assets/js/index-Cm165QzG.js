const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/index-LC6PYDGk.js","assets/js/react-core-EPkW1EvQ.js","assets/js/ui-libs-3dkMKyrp.js","assets/js/vendor-BGXBIffO.js","assets/css/ui-libs-GNLSjkBZ.css","assets/js/icons-gJad2iF0.js","assets/js/styled-BHroj7Rv.js","assets/js/app-context-CtOgQFqT.js","assets/js/index-1jBchJ9U.js","assets/js/useCartActions-BN8PEeoR.js","assets/js/admin-chunk-Ccbd7K1h.js","assets/js/bootstrap-DhsYAI4U.js","assets/css/bootstrap-C11chwFa.css","assets/css/admin-chunk-DfzYEiYy.css","assets/js/router-B-h6ipEo.js","assets/js/index-C14QpVXH.js","assets/js/index-Ogi3BdoN.js","assets/js/index-Dh0FwPrz.js","assets/js/index-D5q0Xctm.js","assets/js/index-g9VW1QeY.js","assets/js/index-gTslfab0.js","assets/js/index-i4Sl3SYN.js"])))=>i.map(i=>d[i]);
import{r as e,j as t,c as s}from"./react-core-EPkW1EvQ.js";import{c as r,d as a,R as n,B as i}from"./bootstrap-DhsYAI4U.js";import{y as o,H as l,a as c,L as d}from"./ui-libs-3dkMKyrp.js";import{d as m,m as p}from"./styled-BHroj7Rv.js";import{p as x,C as u,c as h,A as g,a as f}from"./app-context-CtOgQFqT.js";import{F as b,a as j,b as y,c as w,d as v,e as $,f as k,g as N,h as z,i as A,j as S}from"./icons-gJad2iF0.js";import{S as C,E as I,u as E}from"./admin-chunk-Ccbd7K1h.js";import{L as _,N as P,u as R,a as L,B as T,R as O,b as F}from"./router-B-h6ipEo.js";import"./vendor-BGXBIffO.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if("childList"===s.type)for(const e of s.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const M={},D=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let e=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:"fulfilled",value:e}),e=>({status:"rejected",reason:e}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=s?.nonce||s?.getAttribute("nonce");r=e(t.map(e=>{if((e=function(e){return"/"+e}(e))in M)return;M[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${s}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script"),r.crossOrigin="",r.href=e,a&&r.setAttribute("nonce",a),document.head.appendChild(r),t?new Promise((t,s)=>{r.addEventListener("load",t),r.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${e}`)))}):void 0}))}function a(e){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(const e of t||[])"rejected"===e.status&&a(e.reason);return e().catch(a)})},Y={apis:[{href:"https://6790f03e6a8940f8bfff5e04.mockapi.io",crossorigin:!0}],cdns:[{href:"https://cdn.jsdelivr.net",crossorigin:!0}]};let Q=[];const V=(t=null)=>{const[s,r]=e.useState([]),[a,n]=e.useState(!0),[i,o]=e.useState(null);e.useEffect(()=>{(async()=>{try{let e;n(!0),o(null),e="category"===t?.type?await x.getProductsByCategory(t.value):"gender"===t?.type?await x.getProductsByGender(t.value):await x.getProducts();const s=[...Q,...e];r(s)}catch(e){o(e.message),r([])}finally{n(!1)}})()},[t?.type,t?.value]);const l=()=>{(async()=>{try{let e;n(!0),o(null),e="category"===t?.type?await x.getProductsByCategory(t.value):"gender"===t?.type?await x.getProductsByGender(t.value):await x.getProducts();const s=[...Q,...e];r(s)}catch(e){o(e.message),r([])}finally{n(!1)}})()};return{products:s,loading:a,error:i,refetch:l,addLocalProduct:e=>{Q.push(e),l()}}},W=((e="Producto",t=300,s=300)=>`data:image/svg+xml;base64,${btoa(`\n    <svg width="${t}" height="${s}" xmlns="http://www.w3.org/2000/svg">\n      <rect width="100%" height="100%" fill="#f0f0f0"/>\n      <text \n        x="50%" \n        y="50%" \n        font-family="Arial, sans-serif" \n        font-size="20" \n        fill="#999" \n        text-anchor="middle" \n        dominant-baseline="middle"\n      >\n        ${e}\n      </text>\n    </svg>\n  `)}`)("Sin Imagen"),B="#2c3e50",q="#34495e",U="#3498db",H="#27ae60",J="#f39c12",X="#e74c3c",G="#ecf0f1",K="#2c3e50",Z="#ffffff",ee="#7f8c8d",te="#dee2e6",se="rgba(0, 0, 0, 0.1)",re="rgba(0, 0, 0, 0.15)",ae="(min-width: 576px)",ne="(min-width: 768px)",ie="(min-width: 992px)",oe="(min-width: 1200px)";m.div`
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
`,Ne=({product:s})=>{const{cartProducts:r,setCartProducts:a}=e.useContext(u),[n,i]=e.useState(!1),[l,c]=e.useState(s.img),[d,m]=e.useState(!1),p=s.oldPrice&&s.oldPrice>s.price,x=p?Math.round((s.oldPrice-s.price)/s.oldPrice*100):0,h=s.isNew?{type:"new",text:"Nuevo"}:p?{type:"sale",text:`${x}% OFF`}:s.isFeatured?{type:"featured",text:"Destacado"}:null,g=void 0!==s.stock?s.stock:10;return t.jsxs(le,{children:[t.jsxs(ce,{children:[t.jsx(ke,{children:t.jsx("img",{src:l,alt:s.name,onError:()=>{d||(m(!0),c(W))},loading:"lazy",decoding:"async",fetchPriority:s.isFeatured?"high":"low",width:"400",height:"500",sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"})}),h&&t.jsx(de,{type:h.type,children:h.text}),t.jsx(me,{onClick:()=>{i(!n),n||o.info(`${s.name} agregado a favoritos`,{position:"bottom-right",autoClose:2e3,icon:t.jsx(b,{})})},$isFavorite:n,title:n?"Quitar de favoritos":"Agregar a favoritos","aria-label":n?"Quitar de favoritos":"Agregar a favoritos",children:t.jsx(b,{})})]}),t.jsxs(pe,{children:[s.category&&t.jsx(xe,{children:s.category}),t.jsx(ue,{children:s.name}),s.description&&t.jsx(he,{children:s.description}),s.rating&&t.jsxs(we,{children:[[...Array(5)].map((e,r)=>t.jsx(j,{fill:r<Math.floor(s.rating)?"currentColor":"none"},r)),t.jsxs(ve,{children:["(",s.rating.toFixed(1),")"]})]}),t.jsxs(ge,{children:[t.jsxs(fe,{children:["$",s.price.toFixed(2)]}),p&&t.jsxs(t.Fragment,{children:[t.jsxs(be,{children:["$",s.oldPrice.toFixed(2)]}),t.jsxs(je,{children:["-",x,"%"]})]})]}),t.jsx($e,{$stock:g,children:0===g?"Sin stock":g<5?`Últimas ${g} unidades`:"En stock"}),t.jsxs(ye,{onClick:()=>{r.find(e=>e.id===s.id)?(a(r.map(e=>e.id===s.id?{...e,quantity:e.quantity+1}:e)),o.success(`Se agregó otra unidad de ${s.name}`,{position:"bottom-right",autoClose:2e3})):(a([...r,{...s,quantity:1}]),o.success(`${s.name} agregado al carrito`,{position:"bottom-right",autoClose:2e3,icon:t.jsx(y,{})}))},disabled:0===g,children:[t.jsx(y,{}),0===g?"Sin stock":"Agregar al carrito"]})]})]})},ze=m.h2`
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
`,Ae=m(n)`
  margin: 0 auto;
  max-width: 1400px;
`,Se=()=>{const{products:e,loading:s,error:n,refetch:i}=V();return s?t.jsx(C,{message:"Cargando productos..."}):n?t.jsx(I,{message:n,onRetry:i}):t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx("title",{children:"Todos los Productos - Indumentaria Agat"}),t.jsx("meta",{name:"description",content:"Explora todos nuestros productos de moda: ropa para hombre, mujer, accesorios y más. Encuentra tu estilo en Indumentaria Agat."}),t.jsx("meta",{name:"keywords",content:"productos, catálogo, ropa, moda, indumentaria, comprar online"})]}),t.jsxs(r,{fluid:!0,className:"py-5",children:[t.jsx(ze,{children:"Todos Nuestros Productos"}),t.jsx(Ae,{xs:1,sm:2,md:3,lg:4,className:"g-4 justify-content-center",children:e.map(e=>t.jsx(a,{children:t.jsx(Ne,{product:e})},e.id))})]})]})};class Ce extends e.Component{render(){return t.jsxs("div",{className:"items-wrapper border-top border-4 border-dark",children:[t.jsx("div",{className:"items-title my-5 text-uppercase text-center fw-light",style:{fontFamily:"Lato, sans-serif",color:"rgba(0,0,0,0.8)"},children:t.jsx("h4",{children:"All Items"})}),t.jsx(Se,{})]})}}const Ie=()=>{const e="undefined"!=typeof window?window.location.href:"https://indumentaria-agat.com";return t.jsxs(t.Fragment,{children:[t.jsxs(l,{children:[t.jsx("title",{children:"Indumentaria Agat - Moda de Calidad | Ropa para Hombres y Mujeres"}),t.jsx("meta",{name:"description",content:"Descubre Indumentaria Agat: tu tienda online de moda con las mejores prendas de ropa, accesorios y calzado para hombres y mujeres. Calidad, estilo y precios competitivos. ¡Envíos a todo el país!"}),t.jsx("meta",{name:"keywords",content:"indumentaria, moda, ropa, accesorios, hombre, mujer, comprar ropa online, tienda de ropa, fashion, estilo, Agat, ropa de calidad"}),t.jsx("meta",{property:"og:title",content:"Indumentaria Agat - Moda de Calidad"}),t.jsx("meta",{property:"og:description",content:"Tienda online de moda con las mejores prendas para expresar tu personalidad única. Ropa, accesorios y más."}),t.jsx("meta",{property:"og:type",content:"website"}),t.jsx("meta",{property:"og:url",content:e}),t.jsx("meta",{property:"og:site_name",content:"Indumentaria Agat"}),t.jsx("meta",{property:"og:locale",content:"es_AR"}),t.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{name:"twitter:title",content:"Indumentaria Agat - Moda de Calidad"}),t.jsx("meta",{name:"twitter:description",content:"Descubre nuestra colección de moda para todos los estilos. Calidad y diseño en cada prenda."}),t.jsx("meta",{name:"author",content:"Indumentaria Agat"}),t.jsx("meta",{name:"robots",content:"index, follow"}),t.jsx("meta",{name:"language",content:"Spanish"}),t.jsx("meta",{name:"revisit-after",content:"7 days"}),t.jsx("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),t.jsx("meta",{name:"theme-color",content:"#2c3e50"}),t.jsx("link",{rel:"canonical",href:e}),t.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),t.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"})]}),t.jsx("div",{className:"content d-flex w-100 justify-content-between m-0",style:{margin:0},children:t.jsx(Ce,{})})]})},Ee={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0},_e=e=>{o.success(t.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[t.jsx("i",{className:"bi bi-check-circle-fill me-2",style:{fontSize:"1.2rem"}}),t.jsxs("div",{children:[t.jsx("strong",{children:"¡Agregado al carrito!"}),t.jsx("div",{style:{fontSize:"0.85rem",marginTop:"2px"},children:e})]})]}),{...Ee,autoClose:2e3})},Pe="/assets/jpeg/logo1-D-Z4Pxn5.jpeg",Re=()=>{const{isAuthenticated:s,user:r,logout:a,isAdmin:n}=E(),{cartProducts:l}=e.useContext(u),[c,d]=e.useState(!1),m=l.reduce((e,t)=>e+t.quantity,0),p=()=>{d(!1)};return t.jsxs("nav",{className:"navbar navbar-expand-lg d-flex align-items-center justify-content-between w-100 px-4",style:{background:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0))",minHeight:"4em",boxShadow:"none"},children:[t.jsx("div",{className:"navbar-brand",children:t.jsxs(_,{to:"/",className:"text-white text-decoration-none d-flex align-items-center",onClick:p,children:[t.jsx("img",{src:Pe,alt:"Indumentaria Agat Logo",style:{height:"40px",width:"auto",borderRadius:"6px",marginRight:"8px"}}),t.jsx("span",{className:"fw-bold d-none d-sm-inline",style:{fontFamily:"Lato, sans-serif",fontSize:"1.1rem"},children:"Indumentaria Agat"})]})}),t.jsx("button",{className:"navbar-toggler d-lg-none border-0",type:"button",onClick:()=>{d(!c)},style:{background:"none",padding:"4px 8px"},children:t.jsx("span",{className:"text-white",style:{fontSize:"1.5rem"},children:c?t.jsx(w,{size:24}):t.jsx(v,{size:24})})}),t.jsxs("div",{className:`navbar-collapse ${c?"d-block":"d-none"} d-lg-flex`,style:{position:c?"absolute":"relative",top:c?"100%":"auto",left:c?"0":"auto",right:c?"0":"auto",backgroundColor:c?"rgba(0,0,0,0.95)":"transparent",zIndex:1e3,padding:c?"1rem":"0",borderRadius:c?"0 0 10px 10px":"0"},children:[t.jsxs("ul",{className:"navbar-nav me-auto "+(c?"d-block":"d-flex"),style:{listStyle:"none",fontFamily:"Quicksand, sans-serif",margin:0,padding:0},children:[t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/",onClick:p,children:[t.jsx("i",{className:"bi bi-house me-2"}),"Inicio"]})}),t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/women",onClick:p,children:[t.jsx("i",{className:"bi bi-person-dress me-2"}),"Mujer"]})}),t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/men",onClick:p,children:[t.jsx("i",{className:"bi bi-person me-2"}),"Hombre"]})}),t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/clothes",onClick:p,children:[t.jsx("i",{className:"bi bi-bag me-2"}),"Ropa"]})}),t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/accessories",onClick:p,children:[t.jsx("i",{className:"bi bi-gem me-2"}),"Accesorios"]})}),t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/about",onClick:p,children:[t.jsx("i",{className:"bi bi-info-circle me-2"}),"About"]})}),t.jsx("li",{className:c?"mb-2":"",children:t.jsxs(P,{className:({isActive:e})=>"text-white text-decoration-none d-block py-2 px-3 "+(e?"fw-bold":""),style:{transition:"0.3s",borderRadius:"5px"},to:"/contact",onClick:p,children:[t.jsx("i",{className:"bi bi-envelope me-2"}),"Contacto"]})})]}),t.jsxs("div",{className:`navbar-actions d-flex ${c?"flex-column mt-3":"flex-row"} align-items-${c?"start":"center"} gap-2`,children:[t.jsx(P,{to:"/cart",className:"text-decoration-none",onClick:p,children:t.jsxs(i,{variant:"outline-light",size:"sm",className:"position-relative",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[t.jsx(y,{size:18}),m>0&&t.jsx("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{fontSize:"0.7rem"},children:m}),c&&t.jsx("span",{className:"ms-2",children:"Carrito"})]})}),s&&n()&&t.jsx(P,{to:"/admin",className:"text-decoration-none",onClick:p,children:t.jsxs(i,{variant:"outline-warning",size:"sm",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[t.jsx($,{size:16}),"Admin"]})}),s?t.jsxs("div",{className:`d-flex ${c?"flex-column":"flex-row"} align-items-${c?"start":"center"} gap-2`,children:[t.jsxs("span",{className:"text-white small",style:{fontFamily:"Quicksand, sans-serif",display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx(k,{size:18}),r?.name]}),t.jsxs(i,{variant:"outline-danger",size:"sm",onClick:()=>{a(),p(),o.info("Sesión cerrada correctamente",{...Ee,autoClose:2e3})},title:"Cerrar Sesión",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[t.jsx(N,{size:16}),c&&t.jsx("span",{className:"ms-2",children:"Salir"})]})]}):t.jsx(_,{to:"/login",className:"text-decoration-none",onClick:p,children:t.jsxs(i,{variant:"outline-success",size:"sm",style:{display:"flex",alignItems:"center",gap:"6px",fontFamily:"Quicksand, sans-serif",fontWeight:"600"},children:[t.jsx(k,{size:16}),"Iniciar Sesión"]})})]})]})]})},Le=m.div`
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
`,Qe=()=>t.jsxs(Le,{className:"d-flex flex-column align-items-center justify-content-center",children:[t.jsx(Te,{children:t.jsx("img",{src:Pe,alt:"Indumentaria Agat Logo",loading:"eager",decoding:"async",fetchPriority:"high",style:{height:"150px",width:"auto",borderRadius:"15px",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.3)",transition:"transform 0.3s ease"},onMouseEnter:e=>e.currentTarget.style.transform="scale(1.05) rotate(2deg)",onMouseLeave:e=>e.currentTarget.style.transform="scale(1) rotate(0deg)"})}),t.jsx(Oe,{id:"header-title",children:"Indumentaria Agat"}),t.jsx(Fe,{className:"text-center text-muted mb-4",children:"Moda de calidad para expresar tu personalidad única"}),t.jsxs(Me,{children:[t.jsxs(De,{children:[t.jsx(j,{}),t.jsx("span",{children:"Calidad Premium"})]}),t.jsxs(De,{children:[t.jsx(z,{}),t.jsx("span",{children:"Amplio Catálogo"})]}),t.jsxs(De,{children:[t.jsx(A,{}),t.jsx("span",{children:"Envíos a Todo el País"})]})]}),t.jsx(Ye,{children:t.jsxs("p",{className:"text-muted small",style:{fontFamily:"Quicksand, sans-serif",display:"flex",alignItems:"center",gap:"0.5rem"},children:[t.jsx(S,{}),"Explora nuestras colecciones"]})})]}),Ve=()=>t.jsxs("div",{className:"footer d-flex flex-column justify-content-center align-items-center w-100 bg-dark text-white py-3",style:{fontFamily:"Quicksand, sans-serif",fontWeight:"lighter"},children:[t.jsxs("div",{className:"social-media d-flex gap-3 mb-2",children:[t.jsx("a",{href:h.social.twitter,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none",style:{fontSize:"1.5rem",transition:"transform 0.2s ease, color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.2)",e.currentTarget.style.color="#1DA1F2"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.color="white"},title:"Síguenos en X (Twitter)",children:t.jsx("i",{className:"bi bi-twitter-x"})}),t.jsx("a",{href:h.social.instagram,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none",style:{fontSize:"1.5rem",transition:"transform 0.2s ease, color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.2)",e.currentTarget.style.color="#E4405F"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.color="white"},title:"Síguenos en Instagram",children:t.jsx("i",{className:"bi bi-instagram"})}),t.jsx("a",{href:h.social.whatsappUrl,target:"_blank",rel:"noopener noreferrer",className:"text-white text-decoration-none",style:{fontSize:"1.5rem",transition:"transform 0.2s ease, color 0.2s ease"},onMouseEnter:e=>{e.currentTarget.style.transform="scale(1.2)",e.currentTarget.style.color="#25D366"},onMouseLeave:e=>{e.currentTarget.style.transform="scale(1)",e.currentTarget.style.color="white"},title:"Contáctanos por WhatsApp",children:t.jsx("i",{className:"bi bi-whatsapp"})})]}),t.jsx("p",{className:"m-0 text-center",children:"© 2025 Copyright Richard Garcia"})]}),We=()=>{const e=R(),s=e.pathname.split("/").filter(e=>e);return"/"===e.pathname?null:t.jsx("nav",{"aria-label":"breadcrumb",className:"bg-light border-bottom",children:t.jsx("div",{className:"container",children:t.jsxs("ol",{className:"breadcrumb mb-0 py-2",style:{fontFamily:"Quicksand, sans-serif"},children:[t.jsx("li",{className:"breadcrumb-item",children:t.jsxs(_,{to:"/",className:"text-decoration-none text-muted",style:{fontSize:"0.9rem"},children:[t.jsx("i",{className:"bi bi-house-fill me-1"}),"Inicio"]})}),s.map((e,r)=>{const a=(e=>"/"+s.slice(0,e+1).join("/"))(r),n=r===s.length-1,i=(e=>({women:"Mujer",men:"Hombre",clothes:"Ropa",accessories:"Accesorios",about:"Acerca de",contact:"Contacto",cart:"Carrito",products:"Producto"}[e]||e.charAt(0).toUpperCase()+e.slice(1)))(e);return t.jsx("li",{className:"breadcrumb-item "+(n?"active":""),"aria-current":n?"page":void 0,children:n?t.jsx("span",{className:"text-dark fw-medium",style:{fontSize:"0.9rem"},children:i}):t.jsx(_,{to:a,className:"text-decoration-none text-muted",style:{fontSize:"0.9rem"},children:i})},a)})]})})})},Be=["first-header","second-header","third-header"],qe=({children:s})=>{const[r,a]=e.useState(0),[n,i]=e.useState([]);e.useEffect(()=>{const e=setInterval(()=>a(e=>e+1),3e3);return()=>clearInterval(e)},[]);const o=Be[r%Be.length];return t.jsx(u.Provider,{value:{cartProducts:n,setCartProducts:i},children:t.jsxs("div",{children:[t.jsxs("div",{className:`${o} d-flex flex-column bg-cover bg-center`,style:{backgroundImage:"first-header"===o?"url('https://preview.ibb.co/j8nRCQ/fashion2.jpg')":"second-header"===o?"url('https://preview.ibb.co/fm4Cmk/fashion3.jpg')":"third-header"===o?"url('https://preview.ibb.co/bMsCK5/fashion5.jpg')":"fourth-header"===o?"url('https://preview.ibb.co/gtsZXQ/fashion6.jpg')":void 0,backgroundSize:"cover",backgroundPosition:"center"},children:[t.jsx(Re,{}),t.jsx(Qe,{})]}),t.jsx(We,{}),t.jsx("div",{className:"content w-100",style:{backgroundColor:"#F9F6F6"},children:s}),t.jsx(Ve,{})]})})},Ue=({children:s})=>{const[r,a]=e.useState(!1),[n,i]=e.useState(null),[o,l]=e.useState(!0);e.useEffect(()=>{setTimeout(()=>{const e=localStorage.getItem("isAuthenticated"),t=localStorage.getItem("user");"true"===e&&t&&(a(!0),i(JSON.parse(t))),l(!1)},500)},[]);const c={isAuthenticated:r,user:n,loading:o,login:e=>{if(!e.email||!e.password)return{success:!1,message:"Email y contraseña son obligatorios"};if("admin@shopnow.com"===e.email){const t={id:1,email:e.email,name:e.name||"Administrador",role:"admin"};return a(!0),i(t),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("user",JSON.stringify(t)),{success:!0,user:t}}const t=JSON.parse(localStorage.getItem("registeredUsers")||"[]").find(t=>t.email===e.email&&t.password===e.password);if(t){const e={id:t.id,email:t.email,name:t.name,role:t.role};return a(!0),i(e),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("user",JSON.stringify(e)),{success:!0,user:e}}return{success:!1,message:"Email o contraseña incorrectos"}},register:e=>{if(!e.email||!e.password||!e.name)return{success:!1,message:"Todos los campos son obligatorios"};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))return{success:!1,message:"Por favor ingresa un email válido"};if(e.password.length<6)return{success:!1,message:"La contraseña debe tener al menos 6 caracteres"};const t=JSON.parse(localStorage.getItem("registeredUsers")||"[]");if(t.find(t=>t.email===e.email))return{success:!1,message:"Este email ya está registrado"};const s={id:Date.now(),email:e.email,name:e.name,role:"admin@shopnow.com"===e.email?"admin":"user",password:e.password,registeredAt:(new Date).toISOString()};return t.push(s),localStorage.setItem("registeredUsers",JSON.stringify(t)),a(!0),i(s),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("user",JSON.stringify(s)),{success:!0,user:s,message:"Registro exitoso"}},logout:()=>{a(!1),i(null),localStorage.removeItem("isAuthenticated"),localStorage.removeItem("user")},isAdmin:()=>n&&"admin"===n.role};return t.jsx(g.Provider,{value:c,children:s})},He=({children:e,requireAdmin:s=!1})=>{const{isAuthenticated:r,user:a,loading:n,isAdmin:i}=E(),o=R();return n?t.jsx(C,{message:"Verificando autenticación..."}):r?s&&!i()?t.jsx("div",{className:"container py-5",children:t.jsx("div",{className:"row justify-content-center",children:t.jsx("div",{className:"col-md-8",children:t.jsxs("div",{className:"alert alert-warning text-center border-0 shadow",children:[t.jsx("i",{className:"bi bi-shield-exclamation fs-1 mb-3 text-warning"}),t.jsx("h4",{className:"text-dark",children:"Acceso Restringido al Panel de Administración"}),t.jsx("p",{className:"mb-3 text-muted",children:"Has iniciado sesión correctamente, pero no tienes permisos de administrador para acceder a esta sección. Solo los administradores pueden gestionar productos y acceder al panel de control."}),t.jsxs("div",{className:"bg-light p-3 rounded mb-3",children:[t.jsx("strong",{children:"👤 Usuario actual:"})," ",a?.email,t.jsx("br",{}),t.jsx("strong",{children:"🏷️ Rol:"})," ",t.jsx("span",{className:"badge bg-primary",children:a?.role||"user"})]}),t.jsxs("div",{className:"mt-4",children:[t.jsx("p",{className:"small text-muted mb-3",children:"Como usuario registrado puedes:"}),t.jsxs("div",{className:"d-flex flex-wrap gap-2 justify-content-center",children:[t.jsxs("a",{href:"/",className:"btn btn-outline-primary btn-sm",children:[t.jsx("i",{className:"bi bi-house me-1"}),"Ver Productos"]}),t.jsxs("a",{href:"/cart",className:"btn btn-outline-success btn-sm",children:[t.jsx("i",{className:"bi bi-cart me-1"}),"Mi Carrito"]}),t.jsxs("a",{href:"/women",className:"btn btn-outline-info btn-sm",children:[t.jsx("i",{className:"bi bi-person-dress me-1"}),"Ropa Femenina"]}),t.jsxs("a",{href:"/men",className:"btn btn-outline-dark btn-sm",children:[t.jsx("i",{className:"bi bi-person me-1"}),"Ropa Masculina"]})]}),t.jsx("hr",{className:"my-3"}),t.jsxs("p",{className:"small text-muted",children:[t.jsx("strong",{children:"💡 ¿Necesitas acceso de administrador?"}),t.jsx("br",{}),"Contacta al administrador o usa la cuenta: ",t.jsx("code",{children:"admin@shopnow.com"})]})]})]})})})}):e:t.jsx(L,{to:"/login",state:{from:o},replace:!0})},Je=p`
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
`,Ze=({text:e="Cargando..."})=>t.jsx(Xe,{children:t.jsxs("div",{className:"text-center",children:[t.jsx(Ge,{role:"status","aria-label":"Cargando contenido"}),t.jsx(Ke,{children:e})]})}),et=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tt(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;t.onstatechange=()=>{"installed"===t.state&&navigator.serviceWorker.controller}}}).catch(e=>{})}(()=>{const e=document.head;Y.apis.forEach(t=>{const s=document.createElement("link");s.rel="preconnect",s.href=t.href,t.crossorigin&&(s.crossOrigin="anonymous"),e.appendChild(s);const r=document.createElement("link");r.rel="dns-prefetch",r.href=t.href,e.appendChild(r)}),Y.cdns.forEach(t=>{const s=document.createElement("link");s.rel="preconnect",s.href=t.href,t.crossorigin&&(s.crossOrigin="anonymous"),e.appendChild(s)})})(),window.addEventListener("pageshow",e=>{e.persisted}),window.addEventListener("pagehide",e=>{e.persisted}),document.addEventListener("visibilitychange",()=>{});const st=e.lazy(()=>D(()=>import("./index-LC6PYDGk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),rt=e.lazy(()=>D(()=>import("./index-1jBchJ9U.js"),__vite__mapDeps([8,1,2,3,4,5,9,7,10,11,12,13,14,6]))),at=e.lazy(()=>D(()=>import("./index-C14QpVXH.js"),__vite__mapDeps([15,1,2,3,4,5,9,7,10,11,12,13,14,6]))),nt=e.lazy(()=>D(()=>import("./index-Ogi3BdoN.js"),__vite__mapDeps([16,1,2,3,4,5,9,7,10,11,12,13,14,6]))),it=e.lazy(()=>D(()=>import("./index-Dh0FwPrz.js"),__vite__mapDeps([17,1,5,2,3,4,9,7,10,11,12,13,14,6]))),ot=e.lazy(()=>D(()=>import("./index-D5q0Xctm.js"),__vite__mapDeps([18,1,2,3,4]))),lt=e.lazy(()=>D(()=>import("./index-g9VW1QeY.js"),__vite__mapDeps([19,1,2,3,4,11,12]))),ct=e.lazy(()=>D(()=>import("./index-gTslfab0.js"),__vite__mapDeps([20,1,2,3,4,10,7,11,12,13,14]))),dt=e.lazy(()=>D(()=>import("./admin-chunk-Ccbd7K1h.js").then(e=>e.i),__vite__mapDeps([10,1,2,3,4,7,11,12,13]))),mt=e.lazy(()=>D(()=>import("./index-i4Sl3SYN.js"),__vite__mapDeps([21,1,11,3,12,7,9,10,2,4,13,14])));s.createRoot(document.getElementById("root")).render(t.jsx(c,{children:t.jsx(T,{children:t.jsx(Ue,{children:t.jsxs(f,{children:[t.jsx(qe,{children:t.jsx(e.Suspense,{fallback:t.jsx(Ze,{}),children:t.jsxs(O,{children:[t.jsx(F,{path:"/",element:t.jsx(Ie,{})}),t.jsx(F,{path:"/login",element:t.jsx(ct,{})}),t.jsx(F,{path:"/cart",element:t.jsx(He,{children:t.jsx(st,{})})}),t.jsx(F,{path:"/admin",element:t.jsx(He,{requireAdmin:!0,children:t.jsx(dt,{})})}),t.jsx(F,{path:"/women",element:t.jsx(rt,{})}),t.jsx(F,{path:"/men",element:t.jsx(at,{})}),t.jsx(F,{path:"/clothes",element:t.jsx(nt,{})}),t.jsx(F,{path:"/accessories",element:t.jsx(it,{})}),t.jsx(F,{path:"/about",element:t.jsx(ot,{})}),t.jsx(F,{path:"/contact",element:t.jsx(lt,{})}),t.jsx(F,{path:"/products/:id",element:t.jsx(mt,{})})]})})}),t.jsx(d,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})})})})),function(){if("serviceWorker"in navigator){if(new URL("/",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/service-worker.js";et?function(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):tt(e)}).catch(()=>{})}(e):tt(e)})}}();export{_e as s,V as u};
