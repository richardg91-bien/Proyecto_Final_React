import{r as e,j as t}from"./react-core-EPkW1EvQ.js";import{H as s,y as r}from"./ui-libs-3dkMKyrp.js";import{b as i,k as a,l as n,m as c}from"./icons-gJad2iF0.js";import{d}from"./styled-BHroj7Rv.js";import{C as o}from"./app-context-CtOgQFqT.js";import"./vendor-BGXBIffO.js";const l=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;

  svg {
    font-size: 4rem;
    color: #ccc;
    margin-bottom: 1rem;
  }

  h3 {
    color: #666;
    margin-bottom: 0.5rem;
  }

  p {
    color: #999;
  }
`,x=d.button`
  width: 32px;
  height: 32px;
  border: 1px solid #dee2e6;
  background: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: #f8f9fa;
    border-color: #adb5bd;
    transform: scale(1.05);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    font-size: 14px;
  }
`,m=d.img`
  height: 3.5em;
  width: 3.5em;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,h=d.button`
  padding: 0.5rem;
  border: none;
  background: transparent;
  color: #dc3545;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;

  &:hover {
    background: #fff5f5;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`,j=()=>{const{cartProducts:d,setCartProducts:j}=e.useContext(o),p=d.filter(e=>e.quantity>0),b=p.reduce((e,t)=>e+t.price*t.quantity,0),u=.21*b,f=b+u,g=(e,s)=>{j(d.filter(t=>t.id!==e)),r.info(`${s} eliminado del carrito`,{position:"bottom-right",autoClose:2e3,icon:t.jsx(a,{})})},N=(e,t,s)=>{t<=0?g(e,s):j(d.map(s=>s.id===e?{...s,quantity:t}:s))};return t.jsxs(t.Fragment,{children:[t.jsxs(s,{children:[t.jsx("title",{children:"Carrito de Compras - Indumentaria Agat"}),t.jsx("meta",{name:"description",content:"Revisa y gestiona los productos en tu carrito de compras. Completa tu compra en Indumentaria Agat."}),t.jsx("meta",{name:"robots",content:"noindex, nofollow"})]}),t.jsxs("div",{className:"cart border-top border-4 border-dark d-flex w-100 flex-wrap",children:[t.jsxs("div",{className:"cart-items flex-grow-1 p-4",style:{minWidth:"300px"},children:[t.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2",children:[t.jsxs("h2",{className:"mb-0 d-flex align-items-center gap-2",children:[t.jsx(i,{}),"Carrito"]}),t.jsxs("button",{className:"btn btn-danger btn-sm d-flex align-items-center gap-2",onClick:()=>{j([]),r.success("Carrito vaciado correctamente",{position:"bottom-right",autoClose:2e3})},disabled:0===d.length,children:[t.jsx(a,{}),"Vaciar Carrito"]})]}),t.jsx("div",{className:"table-responsive",children:t.jsxs("table",{className:"table table-bordered align-middle bg-white",children:[t.jsx("thead",{className:"table-light",children:t.jsxs("tr",{children:[t.jsx("th",{children:"Producto"}),t.jsx("th",{children:"Descripción"}),t.jsx("th",{className:"text-center",children:"Cantidad"}),t.jsx("th",{className:"text-end",children:"Precio unitario"}),t.jsx("th",{className:"text-end",children:"Subtotal"}),t.jsx("th",{className:"text-center",children:"Acciones"})]})}),t.jsx("tbody",{children:0===p.length?t.jsx("tr",{children:t.jsx("td",{colSpan:"6",className:"p-0",children:t.jsxs(l,{children:[t.jsx(i,{}),t.jsx("h3",{children:"Tu carrito está vacío"}),t.jsx("p",{children:"Agrega productos para comenzar tu compra"})]})})}):p.map(e=>t.jsxs("tr",{children:[t.jsxs("td",{className:"d-flex align-items-center gap-2",children:[t.jsx(m,{src:e.img,alt:e.name}),t.jsx("span",{children:e.name})]}),t.jsx("td",{children:e.description}),t.jsx("td",{className:"text-center",children:t.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-2",children:[t.jsx(x,{onClick:()=>N(e.id,e.quantity-1,e.name),title:"Disminuir cantidad",children:t.jsx(n,{})}),t.jsx("span",{className:"mx-2 fw-bold",children:e.quantity}),t.jsx(x,{onClick:()=>N(e.id,e.quantity+1,e.name),title:"Aumentar cantidad",children:t.jsx(c,{})})]})}),t.jsxs("td",{className:"text-end",children:["$",e.price.toFixed(2)]}),t.jsxs("td",{className:"text-end fw-bold",children:["$",(e.price*e.quantity).toFixed(2)]}),t.jsx("td",{className:"text-center",children:t.jsx(h,{onClick:()=>g(e.id,e.name),title:"Eliminar producto",children:t.jsx(a,{})})})]},e.id))})]})})]}),t.jsxs("div",{className:"total-price bg-white border-start border-bottom border-4 border-dark p-5 d-flex flex-column justify-content-center align-items-center",style:{width:"30vw",minWidth:"300px"},children:[t.jsx("h2",{className:"text-center mb-4",children:"Resumen"}),t.jsxs("div",{className:"w-100",children:[t.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[t.jsx("span",{children:"Subtotal"}),t.jsxs("span",{children:["$",b.toFixed(2)]})]}),t.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[t.jsx("span",{children:"IVA (21%)"}),t.jsxs("span",{children:["$",u.toFixed(2)]})]}),t.jsxs("div",{className:"d-flex justify-content-between border-top pt-2 mt-2 fw-bold fs-5",children:[t.jsx("span",{children:"Total"}),t.jsxs("span",{children:["$",f.toFixed(2)]})]})]})]})]})]})};export{j as default};
