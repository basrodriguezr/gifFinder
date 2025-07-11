import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();        
        const newInputValue = inputValue.trim(); // Eliminar espacios en blanco al inicio y al final
        
        if(newInputValue.length <= 1) return; // Validar que el input no esté vacío o tenga menos de 2 caracteres
        //describe el setcategories como una función que recibe el estado anterior
        //se envia esta funcion desde el componente padre GiftExpertApp
        onNewCategory(newInputValue); // Llamar a la función onNewCategory con el nuevo valor del input
        setInputValue(''); // Limpiar el input después de enviar           
    }
    
    const onInputChange = (event) => {
        setInputValue(event.target.value); // Actualizar el estado del input con el valor actual
    }

    return (
        /*<form onSubmit={(event) => onSubmit(event)}> <=> <form onSubmit={ onSubmit }> */
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

