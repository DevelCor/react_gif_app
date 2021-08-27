import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {

    const { data , loading  } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Cargando data</p> }
            <div className="gif-grid">
                    {
                        data.map( imgs => <GifGridItem key={imgs.id} img={imgs}/> )
                    }
            </div>
        </>
    );
};

export default GifGrid;
