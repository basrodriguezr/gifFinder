import { useState } from 'react';
import {AddCategory} from './components/AddCategory';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'Naruto', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories]);        
    };

    return (
        <>
        {/*Titulo*/}
        <h1>Gift Expert App</h1>
        <hr />
        {/*input*/}
        <AddCategory setCategories={ setCategories }/>       

        {/* <button onClick={() => {
            const input = document.querySelector('input');  
            if (input.value.trim().length > 0) {
                onAddCategory(input.value.trim());
                input.value = ''; // Limpiar el input
            }
        }}>Agregar</button> */}
        <hr />
        {/*Listado de gifts*/}
        <h2>Categorias</h2>
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