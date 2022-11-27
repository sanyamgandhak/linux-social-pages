import React from 'react'
import { Grid, Typography, Button, ImageList, ImageListItem } from '@mui/material'
import { Box, ThemeProvider, createTheme } from '@mui/system';
import amazon from '../assests/amazon.png'
import uber from '../assests/uber.png'
import google from '../assests/google.png'
import servicenow from '../assests/servicenow.png'
import walmart from '../assests/walmart.png'
import adobe from '../assests/adobe.png'

const theme = createTheme({
    palette: {
        text: {
            color: '#cc1016',
        },
        subText: {
            color: '#232023'
        },
    },
});



export default function Page1() {


    return (
        <>
            <Grid container style={{ marginTop: '20px' }}>
                <Grid container xs={4} style={{ justifyContent: 'space-between', marginLeft: '20px' }}>
                    <Grid item >

                        <Typography style={{ color: '#cc1016', fontWeight: '600', fontSize: '18px' }}>LINUXSOCIALS</Typography>
                    </Grid>

                    <Grid item  >
                        <Typography sx={{ fontSize: '15px', marginTop: '3px' }}>DSA-CheatSheet</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: '15px', marginTop: '3px' }}>Community</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{ fontSize: '15px', marginTop: '3px' }}>Batches</Typography>
                    </Grid>



                </Grid>
                <Grid container xs={7} style={{ justifyContent: 'flex-end', marginLeft: '50px' }}>
                    <Grid item  >
                        <Button variant='contained' style={{ backgroundColor: '#cc1016' }}>Login</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: '90px' }} >
                <Grid container item xs={6} style={{ marginLeft: '20px' }}>
                    <Grid container item xs={12}>
                        <Typography style={{ fontSize: '14px', color: '#333333', fontWeight: '500' }}>IN EVERY</Typography>
                    </Grid>
                    <Grid container item xs={12} style={{ marginTop: '20px' }}>
                        <Typography style={{ fontWeight: '600', fontFamily: 'arial', fontSize: '23px' }}>Interview Preparation Batch</Typography>
                    </Grid>
                    <Grid container item xs={10} style={{ marginTop: '20px' }}>
                        <Typography style={{ color: '#555454' }}>Learn Data Structures and Alogrithm along with System Design, DevOps and Cloud Computing for a <b>complete SDE stack</b> at INR 25,000/-</Typography>
                    </Grid>

                    <Grid container item xs={9} style={{ marginTop: '40px' }} rowSpacing={3} >
                        <ThemeProvider theme={theme}>
                            <Grid container item xs={4}  >
                                <Grid item sx={{ color: 'text.color', fontWeight: 'bold' }}>
                                    Live Sessions
                                </Grid>
                                <Grid item sx={{ color: 'subText.color', fontSize: '13px' }}>+110 meetings</Grid>
                            </Grid>
                            <Grid container item xs={4}  >
                                <Grid item sx={{ color: 'text.color', fontWeight: 'bold' }}>
                                    Questions Solved
                                </Grid>
                                <Grid item sx={{ color: 'subText.color', fontSize: '13px' }}>+250 interview level</Grid>
                            </Grid>
                            <Grid container item xs={4}  >
                                <Grid item container xs={12} sx={{ color: 'text.color', fontWeight: 'bold' }}>
                                    Projects
                                </Grid>
                                <Grid item sx={{ color: 'subText.color', fontSize: '13px' }}>5 real time</Grid>
                            </Grid>
                            <Grid container item xs={4}  >
                                <Grid item sx={{ color: 'text.color', fontWeight: 'bold' }}>
                                    Mock Interviews
                                </Grid>
                                <Grid item sx={{ color: 'subText.color', fontSize: '13px' }}>15 sessions</Grid>
                            </Grid>
                            <Grid container item xs={4}  >
                                <Grid item sx={{ color: 'text.color', fontWeight: 'bold' }}>
                                    Cheat Sheets
                                </Grid>
                                <Grid item sx={{ color: 'subText.color', fontSize: '13px' }}>DSA-company wise</Grid>
                            </Grid>
                            <Grid container item xs={4}  >
                                <Grid item container xs={12} sx={{ color: 'text.color', fontWeight: 'bold' }}>
                                    Referrals
                                </Grid>
                                <Grid item sx={{ color: 'subText.color', fontSize: '13px' }}>20+ tier-1 companies</Grid>
                            </Grid>



                        </ThemeProvider>
                    </Grid>


                </Grid>
                <Grid container item xs={5} direction='column' justifyContent='center' alignContent='flex-end'>

                    <Grid item alignContent='center'>
                        <Typography mb={2} ml={16}>
                            With Placements In
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid item container justifyContent='space-between'>

                            <img width={50} height={20} src={amazon} style={{ marginTop: '4px' }} alt="No Resume Found GIF" />
                            <img width={40} height={17} src={uber} alt="No Resume Found GIF" />
                            <img width={50} height={20} src={adobe} alt="No Resume Found GIF" />
                            <img width={50} height={20} src={walmart} alt="No Resume Found GIF" />
                            <img width={50} height={20} src={servicenow} alt="No Resume Found GIF" />
                            <img width={50} height={20} src={google} style={{ marginTop: '2px' }} alt="No Resume Found GIF" />
                        </Grid>
                    </Grid>
                    <Grid item style={{ marginTop: '15px' }}>

                        <Button variant='contained' style={{ backgroundColor: '#cc1016', minWidth: '25rem' }}>Join Batch</Button>

                    </Grid>

                </Grid>



            </Grid>
        </>
    )

}

// export default Page1