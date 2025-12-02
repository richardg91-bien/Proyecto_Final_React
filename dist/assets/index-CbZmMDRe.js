import{j as e,a as s}from"./bootstrap-vendor-Ei7xZnWI.js";import{L as o,r}from"./react-vendor-DhwnvXGV.js";import{F as t,S as i,a,b as n}from"./index-DCuYD6uT.js";import{u as l}from"./useProducts-BappK3kq.js";import{u as d}from"./useCartActions-BYBdI1xP.js";import{d as c}from"./ui-vendor-CaARl6lq.js";import{E as m}from"./index-C1bxvZkV.js";import{S as p}from"./index-CgC3Tvfr.js";import"./icons-vendor-CNWg5Z-e.js";const h=c.div`
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
`,x=c.div`
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
`,f=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  
  ${x}:hover & {
    transform: scale(1.1);
  }
`,u=c.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 200px;
`,g=c.h5`
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
`,b=c.p`
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
`,j=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e9ecef;
`,v=c.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #28a745;
  font-family: 'Lato', sans-serif;
`,w=c.button`
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
`,y=c.span`
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
`,k=({product:s,onAddToCart:r})=>{const i=void 0===s.stock||s.stock>0;return e.jsxs(h,{children:[e.jsx(o,{to:`/products/${s.id}`,style:{textDecoration:"none",color:"inherit"},children:e.jsxs(x,{children:[void 0!==s.stock&&e.jsx(y,{inStock:i,children:i?`Stock: ${s.stock}`:"Sin stock"}),e.jsx(f,{src:s.img,alt:s.name,loading:"lazy"})]})}),e.jsxs(u,{children:[e.jsxs(o,{to:`/products/${s.id}`,style:{textDecoration:"none",color:"inherit"},children:[e.jsx(g,{children:s.name}),e.jsx(b,{children:s.description})]}),e.jsxs(j,{children:[e.jsxs(v,{children:["$",parseFloat(s.price).toFixed(2)]}),e.jsxs(w,{onClick:()=>r(s),disabled:!i,"aria-label":`Agregar ${s.name} al carrito`,children:[e.jsx(t,{}),"Agregar"]})]})]})]})},N=()=>{const{products:o,loading:t,error:c,refetch:h}=l(),{addToCart:x}=d(),[f,u]=r.useState(1),g=e=>{x(e)};if(t)return e.jsx(i,{message:"Cargando productos..."});if(c)return e.jsx(m,{message:c,onRetry:h});const b=12*f,j=b-12,v=o.slice(j,b),w=Math.ceil(o.length/12),y=e=>{u(e),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Todos los Productos",description:"Explora nuestra colección completa de productos de moda y accesorios. Encuentra lo que necesitas con la mejor calidad y precio.",keywords:"productos, catálogo, moda, ropa, accesorios, tienda online"}),e.jsxs("div",{className:"container-fluid py-4",children:[e.jsx("div",{className:"row mb-4",children:e.jsxs("div",{className:"col-12",children:[e.jsx("h2",{className:"text-center mb-2",style:{fontFamily:"Lato, sans-serif"},children:"Todos los Productos"}),e.jsxs("p",{className:"text-center text-muted",style:{fontFamily:"Quicksand, sans-serif"},children:["Mostrando ",j+1,"-",Math.min(b,o.length)," de ",o.length," productos"]})]})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"d-flex flex-wrap justify-content-center align-items-start",style:{minHeight:"60vh"},children:v.map(s=>e.jsx(k,{product:s,onAddToCart:g},s.id))})})}),w>1&&e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-12",children:e.jsxs(s,{className:"justify-content-center",children:[e.jsx(s.Prev,{onClick:()=>y(f-1),disabled:1===f,"aria-label":"Página anterior",children:e.jsx(a,{})}),(()=>{const e=[];if(w<=5)for(let s=1;s<=w;s++)e.push(s);else if(f<=3){for(let s=1;s<=4;s++)e.push(s);e.push("..."),e.push(w)}else if(f>=w-2){e.push(1),e.push("...");for(let s=w-3;s<=w;s++)e.push(s)}else{e.push(1),e.push("...");for(let s=f-1;s<=f+1;s++)e.push(s);e.push("..."),e.push(w)}return e})().map((o,r)=>"..."===o?e.jsx(s.Ellipsis,{disabled:!0},`ellipsis-${r}`):e.jsx(s.Item,{active:o===f,onClick:()=>y(o),"aria-label":`Ir a página ${o}`,"aria-current":o===f?"page":void 0,children:o},o)),e.jsx(s.Next,{onClick:()=>y(f+1),disabled:f===w,"aria-label":"Página siguiente",children:e.jsx(n,{})})]})})})]})]})};class C extends r.Component{render(){return e.jsxs("div",{className:"items-wrapper border-top border-4 border-dark",children:[e.jsx("div",{className:"items-title my-5 text-uppercase text-center fw-light",style:{fontFamily:"Lato, sans-serif",color:"rgba(0,0,0,0.8)"},children:e.jsx("h4",{children:"All Items"})}),e.jsx(N,{})]})}}const $=()=>e.jsx("div",{className:"content d-flex w-100 justify-content-between m-0",style:{margin:0},children:e.jsx(C,{})});export{$ as default};
