export const useFetchGifs = () => {
    const [gifs, setGifs] = useState([]);

    const getImages = async () => {
        const newGifs = await getGifs({ category });
        setGifs(newGifs);   
    };

    useEffect(() => {   
        getImages();
    }, [ ]);
}
