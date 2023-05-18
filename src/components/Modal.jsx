import { useState,useEffect } from "react";

import cerrarModal from '../images/cerrar.svg';
import comida01 from "../images/comida-01.jpg";
import { formatearDinero,generarId } from "../helpers/index.js";
const Modal = ({handleCloseM,animarModal,itemAgregar,setItemAgregar}) => {

  const[title,setTitle] =useState('')
  const[price,setPrice] =useState('')
  const[category,setCategory]=useState('')
const [img,setImg]=useState('')
const [desc,setDesc]=useState('')
 const [cantidad,setCantidad]=useState(1);
const [subtotal,setSubtotal]=useState(''); 
const[comida,setComida]=useState({})
let articulosPedidos=[];
const handleSubtotal= (e)=>{
    setSubtotal(e.target.value*price)
                  itemAgregar.cantidad=e.target.value
                 itemAgregar.subtotal= itemAgregar.cantidad*itemAgregar.price
                  console.log(itemAgregar)
}


useEffect(()=>{
  console.log('componente listo')
  if(Object.keys(itemAgregar).length>0){
    
    setTitle(itemAgregar.title)
    setDesc(itemAgregar.desc)
    setPrice(itemAgregar.price)
    setSubtotal(itemAgregar.price)
    setCantidad(1)
    itemAgregar.cantidad=cantidad
    itemAgregar.subtotal=Number(itemAgregar.price*itemAgregar.cantidad)

    console.log(itemAgregar)
    
  }else{
    console.log('Arreglo vacio')
  }
},[itemAgregar])

const handleCarrito=(infoArticulo)=>{
  console.log('Entre a handleCarrito')
  
  const articulosCarrito=JSON.parse(localStorage.getItem('articulosCarrito'))||[];
/*  localStorage.setItem('articulosCarrito',JSON.stringify([...articulosCarrito,infoArticulo])); */
articulosPedidos=articulosCarrito;
const existe=articulosPedidos.some(articulo=>articulo.id===infoArticulo.id);
if(existe){
  console.log('Si existe el articulo')
  const articulos=articulosPedidos.map(articulo=>{
    if(articulo.id===infoArticulo.id){
      articulo.cantidad++;
      articulo.subtotal=Number(articulo.precio)*Number(articulo.cantidad);
      
      return articulo;

    }else{
      return articulo;
    }
  })
  articulosPedidos=[...articulos];
}else{
  console.log('No existe el articulo')
  articulosPedidos=[...articulosPedidos,infoArticulo];
  console.log(articulosPedidos)
}
localStorage.setItem('articulosCarrito',JSON.stringify(articulosPedidos));
}
  return (
 <>
      <div className="modalOverlay">
       <div className={`contenedorModal  box-shadow-1 ${animarModal ?'animar' :' '}`}>
          <div className="modalHeader">
            <h4>{`${title}`}</h4>
            <div className="cierra-modal" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" onClick={handleCloseM}>
          <path
            d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
        </svg></div>
         
          </div>
          <div className="modal-body contenido-modal">
              
                <p>{`${desc}`}</p>
          <div className="precio-cantidad row">
              <div className="col-8">
              <p>Precio: <span className="menu-item-price">{`${formatearDinero(price)}`}</span></p>
          </div>
          <div className="col-4">
              <input type="number" min="1" className="form-control" 
                value={`${cantidad}`}
                 onChange={e=>{      
                 setCantidad(e.target.value)
                  handleSubtotal(e)
                  }}
              />
          </div>
          </div>
         <div className="subtotal row">
                <p className="col-12">Subtotal: <span className="menu-item-price">{`${formatearDinero(subtotal)}`}</span></p>
          </div> 
          </div>
          <div className="modal-footer flex justify-content-between">
            <button className="btn btn-danger col" id="#add-cart" data-id="1" type="submit"
            onClick={()=>{
             itemAgregar.idCar=generarId()
            
             handleCarrito(itemAgregar)
             handleCloseM()
             
             
            }}>Agregar</button>
            <button className="btn btn-secondary col" onClick={handleCloseM}>Cerrar</button></div>
       </div>
      </div>

 </>

   
  )
}

export default Modal
