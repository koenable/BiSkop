import React from 'react';

const themovieCard = ({themovie}) => {

return (
    <div className='movie'>
        <div>
            <p>{themovie.Year}</p>
        </div>

        <div>
            <img
                src={ themovie.Poster !== 'N/A' ? themovie.Poster : 'https://via.placeholder.com/400'}
                alt={ themovie.Title }
            />
        </div>

        <div>
            <span>{themovie.Type}</span>
            <h3>{themovie.Title}</h3>
        </div>

</div>

)

}


export default themovieCard
