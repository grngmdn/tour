import React from 'react'
import Tour from './Tour'

function Tours({tours, removeTour}) {
  return (
    <div>
        <h2>Our Tours</h2>
        <div>
            {tours.map((tour) => {
                return(
                    <Tour key={tour.id} {...tour} removeTour={removeTour} />
                )
            })}
        </div>
    </div>
  )
}

export default Tours 