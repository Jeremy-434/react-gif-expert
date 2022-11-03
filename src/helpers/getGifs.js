// async function
export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=tVdbZLt4wek4LYB5i2WH0auLSGR6jkQX&q=${category}&limit=10`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = await data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        console.log(gifs)
        return gifs;
    } catch (e) {
        console.error(e);
        return [];
    }
}
