import React, { useState } from 'react'
import Menu from './Menu'


export default function Login() {

  const comprobarSesion = () => {
    var sesion = localStorage.getItem("miLogin");
    if (sesion) {
      return true;
    } else {
      return false;
    }
  }

  const [miLogin, setMiLogin] = useState(comprobarSesion());
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");


  function iniciarSesion(e) { //capturar el evento
    e.preventDefault(); //evitar que la pagina se recargue
    //capturar el nombre de usuario y contraseña
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;

    if (txtusu.length === 0 || txtpas.length === 0) {
      alert("complete los campos faltantes!");
    } else {
      if (usuario === "admin" && password === "123") {
        setMiLogin(true);
        localStorage.setItem("miLogin", true);
        localStorage.setItem("usuario", usuario);
        document.getElementById("form_login").style.display = "none";
      } else {
        setMiLogin(false);
        alert("error de usuario o contraseña");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }
    }
  }

  return (
    <div className='container' style={{ background: "lightblue", marginTop: 20, padding: 20 }}>
      {
        miLogin === false ?

          <form id='form_login'>
            <div className="form-group">
              <h1 style={{ color: "green", textAlign: "center" }}>LOGIN</h1>
              <label htmlFor='txtusu'><strong>Username</strong></label>
              <input type='text' id='txtusu' style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsuario(e.target.value)} required></input>
            </div>
            <div>
              <label htmlFor='txtpas'><strong>Password</strong></label>
              <input type='password' id='txtpas' style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPassword(e.target.value)} required></input>
            </div><br />
            <button type='submit' className="btn btn-success" value="Login" onClick={iniciarSesion}> Ingresar</button>
          </form>
        : <Menu/>
      }
    </div>
  )
}
