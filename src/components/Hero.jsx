import comida01 from '../images/comida-01.jpg'
import comida02 from '../images/comida-02.jpg'
import comida03 from '../images/comida-03.jpg'
import comida04 from '../images/comida-04.jpg'
import comida05 from '../images/comida-05.jpg'
import comida06 from '../images/comida-06.jpg'
import comida07 from '../images/comida-07.jpg'



const Hero = () => {

  return (
  <div className="hero">
    <div className="slider ">
      <div className="slider-slides ">
        <div className="slider-slide box-shadow-1">
          <img src={comida01} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
          <img src={comida03} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
          <img src={comida02} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
          <img src={comida03} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
           <img src={comida04} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
           <img src={comida05} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
           <img src={comida06} alt=""/>
        </div>
        <div className="slider-slide box-shadow-1">
           <img src={comida07} alt=""/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
