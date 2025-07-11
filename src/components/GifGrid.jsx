import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {   
    const [gifs, setGifs] = useState([]);
    const getImages = async () => {
        const newGifs = await getGifs({ category });
        setGifs(newGifs);   
    };

    useEffect(() => {   
        getImages();
    }, [ ]);

    return (
        <>
            <h4>{category}</h4>
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
