import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Piece']);

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