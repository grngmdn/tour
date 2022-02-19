import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';


function Tour({id, image, info, price, name, removeTour}) {

    const [readMore, setReadMore] = useState(false)

  return (
    <Box>
        <Card
            sx={{ 
                maxWidth: 580,
                paddingBottom:"25px" 
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="image tour"
                />
                <CardContent>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        paddingBottom="20px"
                    >
                        <Typography
                            variant='h6'
                        >
                            {name}
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            $ {price}
                        </Typography>
                    </Box>
                    <Typography
                        variant='body1'
                    >
                        {readMore ? info : `${info.substring(0,200)}...`}
                        <Button 
                            onClick={() => setReadMore(!readMore)}
                        >
                            {readMore ? "less info" : "more info"}
                        </Button>
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button 
                        onClick={() => {
                        removeTour(id)
                        }}
                        variant="contained"
                    >Not interested
                    </Button>
                </CardActions>
        </Card><br />
    </Box>
  )
}

export default Tour 