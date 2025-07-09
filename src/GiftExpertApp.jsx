import { useState } from 'react';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'Naruto', 'Dragon Ball']);

    return (
        <>
        {/*Titulo*/}
        <h1>Gift Expert App</h1>
        <hr />
        {/*input*/}

        {/*Listado de gifts*/}
        <ol>
            {
                categories.map(category => (
                    <li key={category}>
                        {category}
                    </li>
                ))
            }
        </ol>
        {/*GiftItem*/}
        </>
    );
}