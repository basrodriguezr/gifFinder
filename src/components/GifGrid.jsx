import { GifItem } from "./GifItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {   
    console.log("category", category);
    const { images, isLoading } = useFetchGifs(category);   

    return (
        <>
            <h1>{category}</h1>

            {
                isLoading ? <h2>Cargando...</h2> : null
                // isLoading && (<h2>Cargando...</h2>) // Alternativa con operador lógico AND
            }    
        
            <div className="card-grid">  
                {
                    images.map((image) => (
                        <GifItem 
                            key={image.id}
                            {...image } // Spread operator para pasar las props
                        />
                    ))
                }
            </div>
        </>
    );
}
     /*
        *useEffect no debe retornar nada, por eso no se puede usar async directamente
        *useEffect sirve para ejecutar efectos secundarios, como llamadas a APIs
        *useEffect se ejecuta después de que el componente se monta o actualiza
        *useEffect se ejecuta una vez al montar el componente si el segundo argumento es un array vacío
        *useEffect permite la NO repeticion de llamadas a la API al pasar un array vacío como segundo argumento
    */
    /*desde la linea 16 a la linea 25 es la funcion "useFetchGifs" */
    // const [images, setImages] = useState([]);
//============================================================================
    // const getImages = async () => {
    //     const newImages = await getGifs({ category });
    //     setImages(newImages);   
    // };
 
    // useEffect(() => {   
    //     getImages();
    // }, [ ]);
//  {/*
//             Este codigo se actualiza y queda en GridItem.jsx  
//             <ol>
//                 {
//                     images.map(({id, title}) => (
//                         <li key={id}>
//                             {title}
//                         </li>
//                     ))                    
//                 }
//             </ol> */}


