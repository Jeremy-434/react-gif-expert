// Components
import { AddCategory, GifGrid } from './components';

// Çustom Hook
import { useCategory } from './hooks/useCategory';

export const GifExpertApp = () => {

  const { categories, onAddCategory } = useCategory();

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={onAddCategory}
      />

      {/* Gifs */}
      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }
    </>
  )
}
