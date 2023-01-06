import react from 'react';
import { useEffect,useState } from 'react';

import MovieCard from './MovieCard';

import './App.css'
import SearchIcon from './search.svg'

// API-KEY: de54ce5c

const API_URL = 'http://www.omdbapi.com/?apikey=de54ce5c';




const App = (props) =>{

    // Define State for movie Data
    const [movies,setMovies] = useState([]);
    // Define State for movie to search
    const [searchthis,setSearchThis] = useState('');



    
    //Make API Call
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        
        // Set State
        setMovies(data.Search)
    }



    //Make API call on app load
    useEffect(()=>{
        searchMovies('X-men')
    },[]);



    return (
        <div className='app'>
            <h1>BiScope</h1>

            <div className='search'>
                <input
                 placeholder='Movie to search'
                 value={searchthis}
                 onChange={(e)=> setSearchThis(e.target.value)}
                />

                <img
                    src={SearchIcon}
                    alt="Search Button"
                    onClick={()=>{ searchMovies(searchthis) }}
                />
            </div>


                {
                    movies?.length > 0 ? 
                       (
                         <div className='container'>
                            
                             {
                                movies.map((movie)=>(
                                    <MovieCard themovie={movie}/>
                                ))
                             }       
                             
                        </div>
                        
                        ):(
                            <div className='empty'>
                            <h2>There are No Movies at this time</h2>
                            </div>
                        )

                }



        </div>
     
     );
}

export default App