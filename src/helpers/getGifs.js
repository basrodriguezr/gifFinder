 export const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=dMhevMvHp9VU7VIAR9FnZXvIHlVxge5Q&q=${encodeURIComponent(category)}`;
    const response = await fetch(url);
    const { data } = await response.json(); 
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    console.log(gifs);
    return gifs;
}
