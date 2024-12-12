import React from "react"
import './estilos.css'


function Ejemplo() {

  return (
    <div className="header">


        <header>
            
            <div className="logo">
                <img src="../src/img/logo.png" alt="Logo" />
            </div>
            <div className="titulo">
                <h1>TITULO</h1>
            </div>

            <nav>
                <ul>
                    <li><a class="rayita" href="#">INICIO</a></li>
                    <li><a class="rayita" href="#">PRODUCTOS</a>
                        <ul>
                            <li>
                                <a  href="">Guitarra</a>
                            </li>
                            <li>
                                <a href="">Bajo</a>
                            </li>
                            <li>
                                <a href="">Piano</a>
                            </li>
                            <li>
                                <a href="">Flauta</a>
                            </li>
                            <li>
                                <a href="">Tambor</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="rayita" href="#">ACCESORIOS <i class="fa-solid fa-caret-down"></i></a>
                        <ul>
                            <li>
                                <a href="">Capotraste</a>
                            </li>
                            <li>
                                <a href="">Puas</a>
                            </li>
                            <li>
                                <a href="">Correas</a>
                            </li>
                            <li>
                                <a href="">Fundas</a>
                            </li>
                            <li>
                                <a href="">Metronomo</a>
                            </li>
                            <li>
                                <a href="">Soporte</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="rayita" href="">MARCAS <i class="fa-solid fa-caret-down"></i></a>
                        <ul>
                            <li>
                                <a href="">Fender</a>
                            </li>
                            <li>
                                <a href="">Gibson</a>
                            </li>
                            <li>
                                <a href="">Ibanez</a>
                            </li>
                            <li>
                                <a href="">Yamaha</a>
                            </li>
                        </ul>
                    </li>
                    <li><a class="rayita" href="">NOTICIAS</a></li>
                </ul>
                <button><i class="fa-solid fa-cart-shopping"></i></button>
            </nav>

            

        </header>

      

    </div>
  )
}

export default Ejemplo
