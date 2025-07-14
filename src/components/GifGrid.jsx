import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {   
    //const {} = useFetchGifs(category);

    /*desde la linea 8 a la linea 25 es la funcion "useFetchGifs" */
    const [gifs, setGifs] = useState([]);

    const getImages = async () => {
        const newGifs = await getGifs({ category });
        setGifs(newGifs);   
    };

    /*
        *useEffect no debe retornar nada, por eso no se puede usar async directamente
        *useEffect sirve para ejecutar efectos secundarios, como llamadas a APIs
        *useEffect se ejecuta después de que el componente se monta o actualiza
        *useEffect se ejecuta una vez al montar el componente si el segundo argumento es un array vacío
        *useEffect permite la NO repeticion de llamadas a la API al pasar un array vacío como segundo argumento
    */
    useEffect(() => {   
        getImages();
    }, [ ]);

    return (
        <>
            <h1>{category}</h1>
            <div className="card-grid">  
                {
                    // gifs.map(({ id, title, url }) => (
                    //     <GifItem 
                    //         key={id}
                    //         title={title}
                    //         url={url}   
                    //     />
                    // ))
                    //esto de arriba es lo mismo que lo de abajo
                    gifs.map((gif) => (
                        <GifItem 
                            key={gif.id}
                            {...gif } // Spread operator para pasar las props
                        />
                    ))
                }
            </div>
        </>
    );
}
