import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Registar from './Registrar'
import Listar from './Listar'
import Estadistica from './Estadistica'

export default function Menu(props) {

  const [registro, setRegistro] = useState("");
  const [list, setList] = useState("");
  const [estadistica, setEstadistica] = useState("");


  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";    //ocultarla estructura del menu
    document.getElementById("form_login").style.display = "block";  //visible el formulario del login
    document.getElementById("txtusu").value = "" ;               //limpiar el nombre del usuario
    document.getElementById("txtpass").value = "" ;              //limpiar la contraseña
    document.getElementById("txtusu").focus();                //poner el foco en el usuario
  }

  function opcion_registrar(){
    setRegistro("1");
    setList("0");
    setEstadistica("0");
  }

  function opcion_listar(){
    setRegistro("0");
    setList("1");
    setEstadistica("0");
  }
  function opcion_estadistica(){
    setRegistro("0");
    setList("0");
    setEstadistica("1");
  }

  return (
    <>
      <div id="caja_menu" style={{ textAlign: "left" }}>

        <strong className="h3">
          Bienvenido Usuario : {props.usuario}
        </strong>

        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ marginTop: 20 }}>
          <div className="container-fluid">

            <label className="navbar-brand  h5" href=" ">Menú Principal</label>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink to="" className="nav-link  h5  text-center" onClick={opcion_registrar} >Registrar</NavLink>
                <NavLink to="" className="nav-link  h5  text-center" onClick={opcion_listar} >Listar</NavLink>
                <NavLink to="" className="nav-link  h5  text-center" onClick={opcion_estadistica} >Estadistica</NavLink>
                <a className="nav-link  h5  text-center" style={{ color: "blue" }} href=" " onClick={cerrarSesion} >Cerrar Sesión</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {registro === "1" && <Registar/> }
      {list === "1" && <Listar/>}
      {estadistica ==="1" && <Estadistica/>}



    </>
  )
}
