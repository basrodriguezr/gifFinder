import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece', 'Naruto', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);        
    };

    return (
        <>
            
            <h1>Gift Expert App</h1>
            <hr />
            
            <AddCategory onNewCategory={ onAddCategory }/>       
            {/*setCategories={ setCategories }/>*/}
            
            <hr />
            {/*Listado de gifts*/}
            <h2>Categorias</h2>
            <ol>               
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}