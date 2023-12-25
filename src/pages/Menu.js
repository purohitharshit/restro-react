import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Card, Typography,CardActionArea,CardContent, CardMedia } from '@mui/material'
import { MenuList } from '../data/data'


const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
        {
          MenuList.map((menu) => (
            <Card>
              <CardActionArea sx={{maxWidth:"400px",p:"1rem"}}>
                <CardMedia sx={{minHeight:"300px",fontFamily:"monospace"}} component={"img"} src={menu.image} alt={menu.name}  />

                <CardContent>
                  <Typography sx={{fontFamily:"monospace"}} variant="h5" component={"div"} gutterBottom>{menu.name}</Typography>
                  <Typography variant="h6" color="gray">{menu.description}</Typography>
                </CardContent>


              </CardActionArea>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu
