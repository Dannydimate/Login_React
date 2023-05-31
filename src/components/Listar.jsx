import React, { useState, useEffect } from 'react'

export default function Listar() {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registrosLogin");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  }
  const [registrosLogin, setRegistrosLogin] = useState(obtenerRegistros());

  const botonEliminar = (miElemento) => {
    if (window.confirm('¿Esta seguro de eliminar el registro')) {
      var registrosFiltrados = registrosLogin.filter((e, index) => {
        return miElemento !== index
      });
      setRegistrosLogin(registrosFiltrados);
    }
  }

  useEffect(() => {
    localStorage.setItem("registrosLogin", JSON.stringify(registrosLogin));
  }, [registrosLogin])

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Listado De Registro De Pinturas
      </div>

      <div className="table-responsive">
        {registrosLogin.length > 0 ?
          <>
            <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
              <thead className="text-center" style={{ background: "lightgray" }}>
                <tr>
                  <th>#</th>
                  <th>Titulo</th>
                  <th>Estilo</th>
                  <th>Tecnica</th>
                  <th>Precio</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody className="text-center align-baseline">
                {
                  registrosLogin.map((elemento, posicion) => (
                    <tr key={posicion}>
                      <th>{posicion + 1}</th>
                      <td>{elemento.titulo}</td>
                      <td>{elemento.estilo}</td>
                      <td>{elemento.tecnica}</td>
                      <td>{elemento.precio}</td>
                      <td className='text-center'>
                        <button className='btn btn-outline-success' onClick={() => botonEliminar(posicion)}>
                          <i class="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
          : <p className='h5' style={{ color: "red" }}> "no hay registros para listar"</p>
        }
      </div>
    </div>
  )
}
