import{j as e,I as s,F as r,a as t}from"./bootstrap-vendor-QCDz4Gzy.js";import{L as o,r as a}from"./react-vendor-DhwnvXGV.js";import{O as i,F as n,S as c,a as l,b as d}from"./index-DyLowtfN.js";import{u as m}from"./useProducts-ByrrLn6F.js";import{u as h}from"./useCartActions-Cb7d91ye.js";import{d as x}from"./ui-vendor-BY-YNy2y.js";import{E as p}from"./index-TVqEEDyl.js";import{S as u}from"./index-CECLoOsk.js";import"./icons-vendor-CNWg5Z-e.js";const b=x.div`
  width: 18rem;
  margin: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background: white;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 350px;
  }
`,f=x.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 60%, rgba(0, 0, 0, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`,g=x.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${f}:hover & {
    transform: scale(1.1);
  }
`,j=x.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 200px;
`,v=x.h5`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
  height: 2.6em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3;
  font-family: 'Lato', sans-serif;
  
  &:hover {
    color: #007bff;
  }
`,w=x.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 1rem;
  height: 3em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  font-family: 'Quicksand', sans-serif;
`,y=x.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,k=x.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #28a745;
  font-family: 'Lato', sans-serif;
`,N=x.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Quicksand', sans-serif;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`,C=x.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${e=>e.inStock?"#28a745":"#dc3545"};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,S=({product:s,onAddToCart:r})=>{const t=void 0===s.stock||s.stock>0;return e.jsxs(b,{children:[e.jsx(o,{to:`/products/${s.id}`,style:{textDecoration:"none",color:"inherit"},children:e.jsxs(f,{children:[void 0!==s.stock&&e.jsx(C,{inStock:t,children:t?`Stock: ${s.stock}`:"Sin stock"}),e.jsx(g,{as:i,src:s.img,alt:s.name,loading:"lazy",decoding:"async",width:"300",height:"300"})]})}),e.jsxs(j,{children:[e.jsxs(o,{to:`/products/${s.id}`,style:{textDecoration:"none",color:"inherit"},children:[e.jsx(v,{children:s.name}),e.jsx(w,{children:s.description})]}),e.jsxs(y,{children:[e.jsxs(k,{children:["$",parseFloat(s.price).toFixed(2)]}),e.jsxs(N,{onClick:()=>r(s),disabled:!t,"aria-label":`Agregar ${s.name} al carrito`,children:[e.jsx(n,{}),"Agregar"]})]})]})]})},F=({searchTerm:t,onSearchChange:o,placeholder:a="Buscar productos por nombre, categoría o descripción..."})=>e.jsxs("div",{className:"search-bar-container mb-4",children:[e.jsxs(s,{size:"lg",children:[e.jsx(s.Text,{id:"search-icon",children:e.jsx("i",{className:"bi bi-search"})}),e.jsx(r.Control,{type:"text",placeholder:a,value:t,onChange:e=>o(e.target.value),"aria-label":"Buscar productos","aria-describedby":"search-icon",className:"search-input"}),t&&e.jsx(s.Text,{className:"clear-button",onClick:()=>o(""),role:"button","aria-label":"Limpiar búsqueda",children:e.jsx("i",{className:"bi bi-x-circle-fill"})})]}),t&&e.jsxs("small",{className:"text-muted mt-2 d-block",children:[e.jsx("i",{className:"bi bi-info-circle me-1"}),"Buscando: ",e.jsx("strong",{children:t})]})]}),L=()=>{const{products:s,loading:r,error:o,refetch:i}=m(),{addToCart:n}=h(),[x,b]=a.useState(1),[f,g]=a.useState(""),j=e=>{n(e)},v=a.useMemo(()=>{if(!f.trim())return s;const e=f.toLowerCase();return s.filter(s=>{const r=s.name?.toLowerCase().includes(e),t=s.category?.toLowerCase().includes(e),o=s.description?.toLowerCase().includes(e);return r||t||o})},[s,f]);if(r)return e.jsx(c,{message:"Cargando productos..."});if(o)return e.jsx(p,{message:o,onRetry:i});const w=12*x,y=w-12,k=v.slice(y,w),N=Math.ceil(v.length/12),C=e=>{b(e),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Todos los Productos",description:"Explora nuestra colección completa de productos de moda y accesorios. Encuentra lo que necesitas con la mejor calidad y precio.",keywords:"productos, catálogo, moda, ropa, accesorios, tienda online"}),e.jsxs("div",{className:"container-fluid py-4",children:[e.jsx("div",{className:"row mb-4",children:e.jsxs("div",{className:"col-12",children:[e.jsx("h2",{className:"text-center mb-2",style:{fontFamily:"Lato, sans-serif"},children:"Todos los Productos"}),e.jsx("p",{className:"text-center text-muted",style:{fontFamily:"Quicksand, sans-serif"},children:f?e.jsxs(e.Fragment,{children:["Mostrando ",v.length," ",1===v.length?"resultado":"resultados",' para "',f,'"']}):e.jsxs(e.Fragment,{children:["Mostrando ",y+1,"-",Math.min(w,v.length)," de ",v.length," productos"]})})]})}),e.jsx("div",{className:"row mb-4",children:e.jsx("div",{className:"col-12 col-lg-8 mx-auto",children:e.jsx(F,{searchTerm:f,onSearchChange:e=>{g(e),b(1)}})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"d-flex flex-wrap justify-content-center align-items-start",style:{minHeight:"60vh"},children:k.length>0?k.map(s=>e.jsx(S,{product:s,onAddToCart:j},s.id)):e.jsxs("div",{className:"text-center py-5",children:[e.jsx("i",{className:"bi bi-search",style:{fontSize:"3rem",color:"#ccc"}}),e.jsx("h4",{className:"mt-3 text-muted",children:"No se encontraron productos"}),e.jsxs("p",{className:"text-muted",children:["Intenta con otros términos de búsqueda o"," ",e.jsx("button",{className:"btn btn-link p-0",onClick:()=>g(""),children:"limpia la búsqueda"})]})]})})})}),N>1&&e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs(t,{className:"justify-content-center",children:[e.jsx(t.Prev,{onClick:()=>C(x-1),disabled:1===x,"aria-label":"Página anterior",children:e.jsx(l,{})}),(()=>{const e=[];if(N<=5)for(let s=1;s<=N;s++)e.push(s);else if(x<=3){for(let s=1;s<=4;s++)e.push(s);e.push("..."),e.push(N)}else if(x>=N-2){e.push(1),e.push("...");for(let s=N-3;s<=N;s++)e.push(s)}else{e.push(1),e.push("...");for(let s=x-1;s<=x+1;s++)e.push(s);e.push("..."),e.push(N)}return e})().map((s,r)=>"..."===s?e.jsx(t.Ellipsis,{disabled:!0},`ellipsis-${r}`):e.jsx(t.Item,{active:s===x,onClick:()=>C(s),"aria-label":`Ir a página ${s}`,"aria-current":s===x?"page":void 0,children:s},s)),e.jsx(t.Next,{onClick:()=>C(x+1),disabled:x===N,"aria-label":"Página siguiente",children:e.jsx(d,{})})]})})})]})]})};class T extends a.Component{render(){return e.jsxs("div",{className:"items-wrapper border-top border-4 border-dark",children:[e.jsx("div",{className:"items-title my-5 text-uppercase text-center fw-light",style:{fontFamily:"Lato, sans-serif",color:"rgba(0,0,0,0.8)"},children:e.jsx("h4",{children:"All Items"})}),e.jsx(L,{})]})}}const z=()=>e.jsx("div",{className:"content d-flex w-100 justify-content-between m-0",style:{margin:0},children:e.jsx(T,{})});export{z as default};
