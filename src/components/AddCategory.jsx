import { useState } from "react";

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();        
        
        if(inputValue.trim().length <= 1) return; // Validar que el input no esté vacío o tenga menos de 2 caracteres
        //describe el setcategories como una función que recibe el estado anterior
        //se envia esta funcion desde el componente padre GiftExpertApp
        setCategories(categories => [inputValue, ...categories]); 
        
        setInputValue(''); // Limpiar el input después de enviar    
       
    }
    
    const onInputChange = (event) => {
            setInputValue(event.target.value);
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
         <form onSubmit={ onSubmit }>

            <input 
                 type="text" 
                 placeholder="Buscar Gifs" 
                 value={inputValue}
                 onChange={onInputChange}
             />
        </form>
    );
};

