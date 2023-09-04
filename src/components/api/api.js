import axios from "axios"; // libreria que nos ayuda a simplificar la creacion de las solicitudes http

export const api = axios.create({ // creando el objeto api que nos dara acceso a los metodos para modificar el JSON
    baseURL: "http://localhost:5000"  // solo es el url base ya que mas adelante vamos a acceder a otras url 
})

export const buscar = async (url,setData) => { // usando promesa
    const respuesta = await api.get(url); // obteniendo la info de nuestra api
    setData(respuesta.data) // enviando la info
}


