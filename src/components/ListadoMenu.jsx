import Menu from "./Menu";
import Modal from "./Modal";
import React, { useState } from "react";

const ListadoMenu = ({ menus,handleModal,mostrarModal,setMostrarModal,animarModal,itemAgregar,setItemAgregar}) => {
  
  return (
    <>
    <div className="menu-items" id="menu">
      {menus.map((menu) => (
        <Menu 
        key={menu.id} 
        menu={menu} 
        handleModal={handleModal}
      mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        animarModal={animarModal}
        itemAgregar={itemAgregar}
        setItemAgregar={setItemAgregar}
        />
      ))}
    </div>
      
    </>

  );
};

export default ListadoMenu;
