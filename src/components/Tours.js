import React from 'react'
import Tour from './Tour'

function Tours({tours}) {
  return (
    <div>
        <h2>Our Tours</h2>
        <div>
            {tours.map((tour) => {
                return(
                    <Tour key={tour.id} {...tour} />
                )
            })}
        </div>
    </div>
  )
}

export default Tours 