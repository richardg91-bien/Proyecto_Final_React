import{j as e}from"./react-jsx-BHrkn65s.js";import{r as t}from"./react-BlGBNzmT.js";import{H as s,y as r}from"./ui-libs-CMC0-5Gq.js";import{b as i,k as a,l as n,m as c}from"./icons-B0J-VIpq.js";import{d}from"./styled-C-B3fQLS.js";import{C as o}from"./app-context-CeLer4GA.js";import"./vendor-DuX8qqVz.js";import"./react-dom-CdLH0Htr.js";import"./scheduler-6ULW7vKx.js";const l=d.div`
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
`,m=d.button`
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
`,x=d.img`
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
`,j=()=>{const{cartProducts:d,setCartProducts:j}=t.useContext(o),p=d.filter(e=>e.quantity>0),b=p.reduce((e,t)=>e+t.price*t.quantity,0),u=.21*b,f=b+u,g=(t,s)=>{j(d.filter(e=>e.id!==t)),r.info(`${s} eliminado del carrito`,{position:"bottom-right",autoClose:2e3,icon:e.jsx(a,{})})},N=(e,t,s)=>{t<=0?g(e,s):j(d.map(s=>s.id===e?{...s,quantity:t}:s))};return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx("title",{children:"Carrito de Compras - Indumentaria Agat"}),e.jsx("meta",{name:"description",content:"Revisa y gestiona los productos en tu carrito de compras. Completa tu compra en Indumentaria Agat."}),e.jsx("meta",{name:"robots",content:"noindex, nofollow"})]}),e.jsxs("div",{className:"cart border-top border-4 border-dark d-flex w-100 flex-wrap",children:[e.jsxs("div",{className:"cart-items flex-grow-1 p-4",style:{minWidth:"300px"},children:[e.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2",children:[e.jsxs("h2",{className:"mb-0 d-flex align-items-center gap-2",children:[e.jsx(i,{}),"Carrito"]}),e.jsxs("button",{className:"btn btn-danger btn-sm d-flex align-items-center gap-2",onClick:()=>{j([]),r.success("Carrito vaciado correctamente",{position:"bottom-right",autoClose:2e3})},disabled:0===d.length,children:[e.jsx(a,{}),"Vaciar Carrito"]})]}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table table-bordered align-middle bg-white",children:[e.jsx("thead",{className:"table-light",children:e.jsxs("tr",{children:[e.jsx("th",{children:"Producto"}),e.jsx("th",{children:"Descripción"}),e.jsx("th",{className:"text-center",children:"Cantidad"}),e.jsx("th",{className:"text-end",children:"Precio unitario"}),e.jsx("th",{className:"text-end",children:"Subtotal"}),e.jsx("th",{className:"text-center",children:"Acciones"})]})}),e.jsx("tbody",{children:0===p.length?e.jsx("tr",{children:e.jsx("td",{colSpan:"6",className:"p-0",children:e.jsxs(l,{children:[e.jsx(i,{}),e.jsx("h3",{children:"Tu carrito está vacío"}),e.jsx("p",{children:"Agrega productos para comenzar tu compra"})]})})}):p.map(t=>e.jsxs("tr",{children:[e.jsxs("td",{className:"d-flex align-items-center gap-2",children:[e.jsx(x,{src:t.img,alt:t.name}),e.jsx("span",{children:t.name})]}),e.jsx("td",{children:t.description}),e.jsx("td",{className:"text-center",children:e.jsxs("div",{className:"d-flex align-items-center justify-content-center gap-2",children:[e.jsx(m,{onClick:()=>N(t.id,t.quantity-1,t.name),title:"Disminuir cantidad",children:e.jsx(n,{})}),e.jsx("span",{className:"mx-2 fw-bold",children:t.quantity}),e.jsx(m,{onClick:()=>N(t.id,t.quantity+1,t.name),title:"Aumentar cantidad",children:e.jsx(c,{})})]})}),e.jsxs("td",{className:"text-end",children:["$",t.price.toFixed(2)]}),e.jsxs("td",{className:"text-end fw-bold",children:["$",(t.price*t.quantity).toFixed(2)]}),e.jsx("td",{className:"text-center",children:e.jsx(h,{onClick:()=>g(t.id,t.name),title:"Eliminar producto",children:e.jsx(a,{})})})]},t.id))})]})})]}),e.jsxs("div",{className:"total-price bg-white border-start border-bottom border-4 border-dark p-5 d-flex flex-column justify-content-center align-items-center",style:{width:"30vw",minWidth:"300px"},children:[e.jsx("h2",{className:"text-center mb-4",children:"Resumen"}),e.jsxs("div",{className:"w-100",children:[e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsx("span",{children:"Subtotal"}),e.jsxs("span",{children:["$",b.toFixed(2)]})]}),e.jsxs("div",{className:"d-flex justify-content-between mb-2",children:[e.jsx("span",{children:"IVA (21%)"}),e.jsxs("span",{children:["$",u.toFixed(2)]})]}),e.jsxs("div",{className:"d-flex justify-content-between border-top pt-2 mt-2 fw-bold fs-5",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:["$",f.toFixed(2)]})]})]})]})]})]})};export{j as default};
