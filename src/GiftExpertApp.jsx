import { useState } from 'react';

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
       <input type="text" placeholder="Agregar Categoria"
            onKeyDown={(event) => { 
                // Verificar si la tecla presionada es Enter y el input no está vacío
                // Si es así, agregar la categoría vía onkeydown
                if (event.key === 'Enter' && event.target.value.trim().length > 0) {
                    onAddCategory(event.target.value.trim());
                    event.target.value = ''; // Limpiar el input
                }
            }} 
        />
        
        <button onClick={() => {
            const input = document.querySelector('input');  
            if (input.value.trim().length > 0) {
                onAddCategory(input.value.trim());
                input.value = ''; // Limpiar el input
            }
        }
        }>Agregar</button>
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