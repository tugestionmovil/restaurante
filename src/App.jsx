import { useState,useEffect } from "react";
import Navegacion from "./components/Navegacion";
import Hero from "./components/Hero";
import ListadoMenu from "./components/ListadoMenu";
import Modal from "./components/Modal";
import "./Index.css";

function App() {
  const menuAjaxReq = [
    {
      id: 1,
      title: "Hamburguesa",
      category: "dinner",
      price: 15,
      img: "img01",
      desc: `Hamburguesa doble carne con tocineta, queso cheddar y papas firtas con tocineta en trozos `,
    },
    {
      id: 2,
      title: "Buffalo Chicken wings",
      category: "lunch",
      price: 13,
      img: "img02",
      desc: `Alitas de pollo a la boraster acompañadas de nuestra salsa picante , papas firtas y ensalada de la casa`,
    },
    {
      id: 3,
      title: "lasagna",
      category: "lunch",
      price: 6,
      img: "img03",
      desc: `deliciosa lasagna con salsas de la casay exquisita carne, jamon, queso mozzarella y parmesano gratinado.`,
    },
    {
      id: 4,
      title: "Pasta con Camarones",
      category: "lunch",
      price: 20,
      img: "img04",
      desc: `Exquisita pasta vermicelli con salsa roja de la casa y camarones,a compañada de tu bebida favorita `,
    },
    {
      id: 5,
      title: "Pizza Tentación",
      category: "dinner",
      price: 22,
      img: "img05",
      desc: `Pizza Gourmet tamaño familiar con queso mozarella, jamon, salchichon, aceitunas negras y tocineta. Acompañada de refresco familiar `,
    },
    {
      id: 6,
      title: "Baby Ribs",
      category: "dinner",
      price: 18,
      img: "img06",
      desc: `Suave rack de costillas baby rib con salsa barbeque,a compañada de papas ftitas o al vapor y ensalada`,
    },
    {
      id: 7,
      title: "Panqueques",
      category: "Breakfast",
      price: 10,
      img: "img07",
      desc: `Suave panqueca de vainilla con frutas frescas y crema batida, acompañada de tocineta, café y jugo`,
    },
  ];
const [mostrarModal,setMostrarModal]=useState(false);

const[animarModal,setAnimarModal]=useState(false);
  const [menus, setMenus] = useState(menuAjaxReq);
  const [itemAgregar, setItemAgregar]=useState({})
  const [cantidad,setCantidad]=useState(1)
const handleModal=()=>{
  setMostrarModal(true)
  setTimeout(() => {
    setAnimarModal(true)
    console.log('animado')
  }, 500);
  
}
const handleCloseM=()=>{
  console.log('Cerrando')
  setMostrarModal(false);
  setAnimarModal(false);
  setItemAgregar({});

}
useEffect(()=>{
  if(Object.keys(itemAgregar).length>0){
    console.log(itemAgregar)
    handleModal()
  }
},[itemAgregar])

return (
    <>
      <Navegacion />
      <Hero />
      <ListadoMenu 
      menus={menus} 
      setMenus={setMenus} 
       handleModal={handleModal}
      mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        handleCloseM={handleCloseM}
        animarModal={animarModal}
        itemAgregar={itemAgregar}
        setItemAgregar={setItemAgregar}
     
      />
       {mostrarModal &&  <Modal 
        mostrarModal={mostrarModal}
        handleModal={handleModal}
        setMostrarModal={setMostrarModal}
        handleCloseM={handleCloseM}
        animarModal={animarModal}
       itemAgregar={itemAgregar}
        setItemAgregar={setItemAgregar}
       />}
    </>
  );
}

export default App;
