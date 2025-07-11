import { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);        
    };

    return (
        <>
            
            <h1>Gift Expert App</h1>
            <hr />            
            <AddCategory onNewCategory={ onAddCategory }/>                 
            <hr />
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