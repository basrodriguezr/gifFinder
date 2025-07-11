import { useEffect, useState } from "react";
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
            <ol>  
                {gifs.map(({ id, title, url }) => (
                    <li key={id}>
                        <h5>{title}</h5>
                        <img src={url} alt={title} />
                    </li>
                ))}
            </ol>
        </>
    );
}
