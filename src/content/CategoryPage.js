import React, {Component} from 'react';
import ButtonAppBar from '../components/Navbar'
import Grid from '@material-ui/core/Grid'
// import Paper from '@material-ui/core/Paper'
import Typhography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Recommendation from './Recommendation'

class CategoryPage extends Component {
    render() {
        return(
            <div>
                <div style={{margin:'0 350px 80px 350px'}}>
                <ButtonAppBar/>
                </div>
                <div style={{margin:'0 350px 0 350px'}}>
                    <Grid container spacing={2}>
                        <Grid container item  spacing={2}>
                            <Grid item>
                                <img src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" alt="#" style={{width:"270px", height:'61', marginLeft:'20px'}}/>

                            </Grid>

                            <Grid item sm>
                                <div style={{maxWidth:450, paddingTop:5}}>
                                <Typhography variant="h6">
                                The front lines of the future. A Medium publication about tech and science.

                                </Typhography>
                                </div>
                            </Grid>
                            <Grid item>
                                <div style={{marginRight:20, marginTop:10}}>
                                    <Button variant="outlined" size="small">Follow</Button>
                                </div>
                            </Grid>
                            
                        </Grid>

                        <Grid item md={12} >
                            <CardActionArea>
                                <Card style={{display:'flex', backgroundColor:'#6A0BFF'}}>
                                    <CardMedia
                                    style={{flex:2}}
                                    image={'https://miro.medium.com/max/1958/1*KrWzdaB7HuC1mQvZnHmIDg.png'}
                                    title="Live from space album cover"
                                    />
                                    <div style={{flex:1, textAlign:'center', alignItems:'center',}} >
                                        <CardContent >
                                            <Typhography variant='h5' style={{color:'white', paddingTop: '20px'}}>
                                                Architects Are Playing With the Future of Design in Video Games
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'white', paddingTop:'20px'}}>
                                            Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented and the invisible made visible
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'white', paddingTop:'20px'}}>
                                            Thomas McMullan
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'white', paddingTop:'20px'}}>
                                            Dec 9 · 6 min read
                                            </Typhography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </CardActionArea>
                        </Grid>

                        <Grid item md={12} >
                            <CardActionArea>
                                <Card style={{display:'flex'}}>
                                    <div style={{flex:1, textAlign:'center', alignItems:'center',}} >
                                        <CardContent >
                                            <Typhography variant='h5' style={{color:'black', paddingTop: '20px'}}>
                                                Architects Are Playing With the Future of Design in Video Games
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'black', paddingTop:'20px'}}>
                                            Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented and the invisible made visible
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'black', paddingTop:'20px'}}>
                                            Thomas McMullan
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'black', paddingTop:'20px'}}>
                                            Dec 9 · 6 min read
                                            </Typhography>
                                        </CardContent>
                                    </div>
                                    <CardMedia
                                    style={{flex:2}}
                                    image={'https://miro.medium.com/max/2400/1*FmMLsjcukXpE2EtT-lV2Sw.jpeg'}
                                    title="Live from space album cover"
                                    />
                                </Card>
                            </CardActionArea>
                        </Grid>

                        <Grid item md={12} >
                            <CardActionArea>
                                <Card style={{display:'flex', backgroundColor:'#6A0BFF'}}>
                                    <CardMedia
                                    style={{flex:2}}
                                    image={'https://miro.medium.com/max/1958/1*KrWzdaB7HuC1mQvZnHmIDg.png'}
                                    title="Live from space album cover"
                                    />
                                    <div style={{flex:1, textAlign:'center', alignItems:'center',}} >
                                        <CardContent >
                                            <Typhography variant='h5' style={{color:'white', paddingTop: '20px'}}>
                                                Architects Are Playing With the Future of Design in Video Games
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'white', paddingTop:'20px'}}>
                                            Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented and the invisible made visible
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'white', paddingTop:'20px'}}>
                                            Thomas McMullan
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'white', paddingTop:'20px'}}>
                                            Dec 9 · 6 min read
                                            </Typhography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </CardActionArea>
                        </Grid>

                        <Grid item md={12} >
                            <CardActionArea>
                                <Card style={{display:'flex', backgroundColor:'#DAF832'}}>
                                    <div style={{flex:1, alignItems:'center', marginLeft:'200px', marginRight:'300px'}} >
                                        <CardContent >
                                            <Typhography variant='h5' style={{color:'black', paddingTop: '20px'}}>
                                                Architects Are Playing With the Future of Design in Video Games
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'black', paddingTop:'20px'}}>
                                            Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented and the invisible made visible
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'black', paddingTop:'20px'}}>
                                            Thomas McMullan
                                            </Typhography>

                                            <Typhography variant='subtitle1' style={{color:'black', paddingTop:'20px'}}>
                                            Dec 9 · 6 min read
                                            </Typhography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </div>
                
                <div style={{margin:'40px 600px 0 600px'}}>
                    <div style={{marginBottom:'40px'}}><hr/></div>

                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>

                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>

                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>

                    <Recommendation 
                    url="https://miro.medium.com/max/2073/1*yHRoGYIxxTaPVLO3m7JkYw.jpeg" 
                    judul="One Man’s Execution Convinced Me the Death Penalty Is Wrong" 
                    isi="I used to think ‘an eye for an eye’ was fair and just, but I’ve seen enough to know it’s not" 
                    user="D.A. Kirk" 
                    time="Dec 13, 2018 · 7 min read"/>

                    


                </div>

            </div>
        );
    }
}

export default CategoryPage;