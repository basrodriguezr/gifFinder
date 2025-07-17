 export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MpCCd3aDNOECdUHeVRBGqtaiea36Eb7D&q=${encodeURIComponent(category)}&limit=3`;
    const response = await fetch(url);
    const { data } = await response.json(); 
    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    
    console .log("category", category)
    return gifs;
}
