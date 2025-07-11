import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category, key }) => {   
    
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
        </>
    )
}
