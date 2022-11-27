import React from 'react'
import { Grid, Typography , Button } from '@mui/material'
import { Box } from '@mui/system';
import amazon from '../assests/amazon.png'

export default function Page2(){
 

    return(
<>
<Grid container style={{ marginTop:'20px'}}>
<Grid container xs={4} style={{justifyContent:'space-between',marginLeft:'20px'}}>
    <Grid item >

<Typography  style={{color:'#cc1016',fontWeight:'600',fontSize:'18px'}}>LINUXSOCIALS</Typography>
    </Grid> 

    <Grid item  >
   <Typography sx={{fontSize:'15px' , marginTop:'3px'}}>DSA-CheatSheet</Typography>
   </Grid>
    <Grid item>
    <Typography sx={{fontSize:'15px', marginTop:'3px'}}>Community</Typography>
   </Grid>
    <Grid item>
    <Typography sx={{fontSize:'15px', marginTop:'3px'}}>Batches</Typography>
   </Grid>
  

    
</Grid>
<Grid container xs={7} style={{justifyContent:'flex-end',marginLeft:'50px'}}>
    <Grid item  >
        <Button variant='contained' style={{backgroundColor:'#cc1016'}}>Login</Button>
    </Grid>
</Grid>
</Grid>
<Grid container style={{marginTop:'90px',backgroundColor:'#D6CFC7' }} >
    <Grid container item style={{backgroundColor:'#ffa98a ',marginTop:'50px',marginBottom:'50px'}}>
    <Grid container item xs={7} style={{marginLeft:'20px'}} >
<Grid item container >
<Typography variant='h6' sx={{marginBottom:'20px',marginTop:'20px',fontWeight:'bold',color:'#AA0000'}}>DSA BATCH</Typography>
</Grid>
<Grid item container xs={8}>
    <Grid item xs={12}>
    <Typography sx={{color:'#AA0000',fontWeight:600}}>Basics</Typography>
    </Grid>
    <Typography >Starting with basics of CPP/Java and Data Structures.</Typography>
</Grid>
<Grid item container xs={8}>
    <Grid item xs={12} style={{marginTop:'20px'}}>
    <Typography sx={{color:'#AA0000',fontWeight:600}}>DSA & CP</Typography>
    </Grid>

<Typography display="block">Covering DSA Cheat Sheet with 300 questions from top PBCs.</Typography>
</Grid>
<Grid item container xs={8} style={{marginBottom:'20px'}}>
    <Grid item xs={12} style={{marginTop:'20px'}}>
    <Typography sx={{color:'#AA0000',fontWeight:600}}>System Design</Typography>
    </Grid>

<Typography>Work on concepts that can help you create all patterns of HLD and LLD.</Typography>
</Grid>
    </Grid>
    <Grid container item xs={4} alignContent='center'>
        <Grid container item justifyContent='center' mr={8}>
        <Box>
        <Typography>March/2023 - July/2023</Typography>
        </Box> 
        </Grid>
    <Grid container item justifyContent='center' mr={8} mt={1} mb={1}>
    <Box>
      <Typography>Live Sessions</Typography>
        </Box>
    </Grid>
       
        <Button variant='contained' style={{backgroundColor:'#cc1016',minWidth:'25rem'}}>Join Batch</Button>
   
   
    </Grid>
    </Grid>

    
</Grid>
<Grid container mt={4} justifyContent='center'>
    With Placements In <img width={50} height={20} src={amazon} style={{marginTop:'6px',marginLeft:'3px'}} alt="No Resume Found GIF" />
</Grid>
</>
    )
    
}
