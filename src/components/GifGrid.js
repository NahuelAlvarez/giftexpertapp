import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    

    // const [images, setimages] = useState([]);
    
    const {data:images ,loading} = useFetchGifs(category);

    // useEffect(() => { // Para que se renderice solo una vez
    //     getGifs(category).then(setimages);
    // }, [category]);
    
   
    // getGifs();

    
    return (
            <>
            <h3 className=' animate__animated animate__rubberBand'>{category}</h3>

            {loading && <p className=' animate__animated animate__flash'> Loading...</p>}

                    <div className='card-grid  animate__animated animate__bounce'>
                    
                        <ol>
                            {
                                images.map(img => (
                                    // <li key={id}> {title} </li>
                                    <GifGridItem
                                        key={img.id}
                                        {...img}
                                    />
                                ))     
                            }
                        </ol>
                        
                    </div>
            </>       
    )
};
