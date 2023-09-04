import { useParams } from "react-router-dom";
import ListPosts from "../components/ListPost";

const SubCategoria = () => {
    const {subcategoria} = useParams()
    return(
        <ListPosts url={`/posts?subcategoria=${subcategoria}`}></ListPosts> // aqui mandamos a llamar el componye que muestra la lista de post y agregamos el filtro de las subcategorias que coincidan
    )
}

export default SubCategoria;