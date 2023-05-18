
import comida01 from "../images/comida-01.jpg";
import comida02 from "../images/comida-02.jpg";
import comida03 from "../images/comida-03.jpg";
import comida04 from "../images/comida-04.jpg";
import comida05 from "../images/comida-05.jpg";
import comida06 from "../images/comida-06.jpg";
import comida07 from "../images/comida-07.jpg";
import comida08 from "../images/comida-08.jpeg";
import comida09 from "../images/comida-09.jpg";
import comida10 from "../images/comida-10.jpg";
import { useState } from "react";
import { formatearDinero } from "../helpers/index.js";

const Menu = ({menu,handleModal,mostrarModal,setMostrarModal,animarModal,itemAgregar,setItemAgregar}) => {
  const { id, title, category, price, img, desc } = menu;
  const diccionarioImagenes = {
    img01: comida01,
    img02: comida02,
    img03: comida03,
    img04: comida04,
    img05: comida05,
    img06: comida06,
    img07: comida07,
    img08: comida08,
    img09: comida09,
    img10: comida10,
  };



  return (
    <>
      <article className="menu-item card p-3">
        <img
          className="item-photo  card-img-top"
          src={diccionarioImagenes[img]}
        />
        <div className="menu-item-container">
          <div className="menu-item-info">
            <h4 className="menu-item-title">{title}</h4>
            <p className="menu-item-price">{formatearDinero(price)}</p>
          </div>
          <div className="menu-item-description">{desc}</div>
          <div className="menu-item-button">
            <button
              className="agregar-carrito  btn btn-danger  col txt-center"
              type="submit"
              data-id={id}
             onClick={()=>{
              handleModal();
              setItemAgregar(menu)
             }}
            >
              Ordenar
            </button>
          </div>
        </div>
      </article>
 {/*      <ModalCarrito show={show} handleClose={handleClose} /> */}

    </>
  );
};

export default Menu;
