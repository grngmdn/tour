import { Box, Typography } from '@mui/material'
import React from 'react'
import Tour from './Tour'

function Tours({tours, removeTour}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center' 
      }}
    >
        <Typography
          variant='h2'
          sx={{
            fontWeight: "bold"
          }}
        >Available Tours
        </Typography>
        <Box>
            {tours.map((tour) => {
                return(
                    <Tour key={tour.id} {...tour} removeTour={removeTour} />
                )
            })}
        </Box>
    </Box>
  )
}

export default Tours 