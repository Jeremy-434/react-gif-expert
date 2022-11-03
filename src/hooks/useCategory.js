import { useState } from "react";

export const useCategory = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (onNewCategory) => {
    // console.log(onNewCategory);
    const category = categories.toString().toLowerCase();
    const newCategory = onNewCategory.toString().toLowerCase();

    if (category.includes(newCategory)) return;

    // setCategories([...categories, 'Valorant']);
    setCategories(category => {
      return [ onNewCategory, ...categories ]
    });
  }

  return {
    categories,
    onAddCategory
  }
}
