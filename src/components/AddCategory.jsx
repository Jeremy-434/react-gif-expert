import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( {target} ) => {
    // console.log( target.value );
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const inputNewValue = inputValue.trim();
    if (inputNewValue.length <= 1) return;

    // Se agrega una categoria desde este componente
    // setCategories( category => [ inputValue, ...category ] );

    // Se le pasa el valor del input a "onNewCategory"
    onNewCategory(inputNewValue);

    setInputValue('');
  }

  return (
    <form onSubmit={(event) => { onSubmit(event) }}>
      <input
        type="texts"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
