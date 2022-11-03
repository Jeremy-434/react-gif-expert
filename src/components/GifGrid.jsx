import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h1>{category}</h1>
      {
        isLoading && (<p>Loading...</p>)
      }
      {/* Otra manera de mostrar el mensaje de carga "<p>Loading...</p>" */}
      {/* {
        isLoading
          ? (<p>Loading...</p>)
          : null
      } */}

      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
