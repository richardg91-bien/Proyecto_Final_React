import{j as e,a as s}from"./bootstrap-vendor-DtCbQ1rc.js";import{L as o,r}from"./react-vendor-DhwnvXGV.js";import{O as t,F as i,S as a,a as n,b as d}from"./index-C8VuAxzx.js";import{u as l}from"./useProducts-DK1C6Bw3.js";import{u as c}from"./useCartActions-CUV2AzkV.js";import{d as m}from"./ui-vendor-Bh1mUo_i.js";import{E as h}from"./index-CYQFgh7D.js";import{S as p}from"./index-wKJVR9Av.js";import"./icons-vendor-CNWg5Z-e.js";const x=m.div`
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
`,f=m.div`
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
`,u=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${f}:hover & {
    transform: scale(1.1);
  }
`,g=m.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 200px;
`,b=m.h5`
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
`,j=m.p`
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
`,v=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,w=m.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #28a745;
  font-family: 'Lato', sans-serif;
`,y=m.button`
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
`,k=m.span`
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
`,N=({product:s,onAddToCart:r})=>{const a=void 0===s.stock||s.stock>0;return e.jsxs(x,{children:[e.jsx(o,{to:`/products/${s.id}`,style:{textDecoration:"none",color:"inherit"},children:e.jsxs(f,{children:[void 0!==s.stock&&e.jsx(k,{inStock:a,children:a?`Stock: ${s.stock}`:"Sin stock"}),e.jsx(u,{as:t,src:s.img,alt:s.name,loading:"lazy",decoding:"async",width:"300",height:"300"})]})}),e.jsxs(g,{children:[e.jsxs(o,{to:`/products/${s.id}`,style:{textDecoration:"none",color:"inherit"},children:[e.jsx(b,{children:s.name}),e.jsx(j,{children:s.description})]}),e.jsxs(v,{children:[e.jsxs(w,{children:["$",parseFloat(s.price).toFixed(2)]}),e.jsxs(y,{onClick:()=>r(s),disabled:!a,"aria-label":`Agregar ${s.name} al carrito`,children:[e.jsx(i,{}),"Agregar"]})]})]})]})},C=()=>{const{products:o,loading:t,error:i,refetch:m}=l(),{addToCart:x}=c(),[f,u]=r.useState(1),g=e=>{x(e)};if(t)return e.jsx(a,{message:"Cargando productos..."});if(i)return e.jsx(h,{message:i,onRetry:m});const b=12*f,j=b-12,v=o.slice(j,b),w=Math.ceil(o.length/12),y=e=>{u(e),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Todos los Productos",description:"Explora nuestra colección completa de productos de moda y accesorios. Encuentra lo que necesitas con la mejor calidad y precio.",keywords:"productos, catálogo, moda, ropa, accesorios, tienda online"}),e.jsxs("div",{className:"container-fluid py-4",children:[e.jsx("div",{className:"row mb-4",children:e.jsxs("div",{className:"col-12",children:[e.jsx("h2",{className:"text-center mb-2",style:{fontFamily:"Lato, sans-serif"},children:"Todos los Productos"}),e.jsxs("p",{className:"text-center text-muted",style:{fontFamily:"Quicksand, sans-serif"},children:["Mostrando ",j+1,"-",Math.min(b,o.length)," de ",o.length," productos"]})]})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"d-flex flex-wrap justify-content-center align-items-start",style:{minHeight:"60vh"},children:v.map(s=>e.jsx(N,{product:s,onAddToCart:g},s.id))})})}),w>1&&e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs(s,{className:"justify-content-center",children:[e.jsx(s.Prev,{onClick:()=>y(f-1),disabled:1===f,"aria-label":"Página anterior",children:e.jsx(n,{})}),(()=>{const e=[];if(w<=5)for(let s=1;s<=w;s++)e.push(s);else if(f<=3){for(let s=1;s<=4;s++)e.push(s);e.push("..."),e.push(w)}else if(f>=w-2){e.push(1),e.push("...");for(let s=w-3;s<=w;s++)e.push(s)}else{e.push(1),e.push("...");for(let s=f-1;s<=f+1;s++)e.push(s);e.push("..."),e.push(w)}return e})().map((o,r)=>"..."===o?e.jsx(s.Ellipsis,{disabled:!0},`ellipsis-${r}`):e.jsx(s.Item,{active:o===f,onClick:()=>y(o),"aria-label":`Ir a página ${o}`,"aria-current":o===f?"page":void 0,children:o},o)),e.jsx(s.Next,{onClick:()=>y(f+1),disabled:f===w,"aria-label":"Página siguiente",children:e.jsx(d,{})})]})})})]})]})};class $ extends r.Component{render(){return e.jsxs("div",{className:"items-wrapper border-top border-4 border-dark",children:[e.jsx("div",{className:"items-title my-5 text-uppercase text-center fw-light",style:{fontFamily:"Lato, sans-serif",color:"rgba(0,0,0,0.8)"},children:e.jsx("h4",{children:"All Items"})}),e.jsx(C,{})]})}}const z=()=>e.jsx("div",{className:"content d-flex w-100 justify-content-between m-0",style:{margin:0},children:e.jsx($,{})});export{z as default};
