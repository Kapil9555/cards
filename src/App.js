import { Box, Button, Container, Grid, InputBase, Typography } from '@mui/material';
import { useState } from 'react';
import './App.css';
import cardbg from './assests/blankcard.jpeg';
import imgdata from './assests/redbg.png';
import sign from './assests/signimage.png';
import './print-styles.css';

function App() {
  const [screen,setScreen]=useState(true)
  const[data, setData]=useState({
    image:imgdata,
    name:"",
    post:"",
    district:"",
    mobile:"",
    email:"",
    address:"",
    date:""
  })


const handleFileChange =(e)=>{
  setData({...data,image:URL.createObjectURL(e.target.files[0])})
}

const handleSetValue=(e)=>{
  const {name,value}=e.target;
  setData({...data,[name]:value})
}

const handleSavePdf=()=>{
  setScreen(false)

  setTimeout(() => {
   
    window.print()
  },400);

  setTimeout(()=>{
    setScreen(true)
  },700)
  
 
}

// console.log(data)

  return (
    <div style={{position:'absolute'}}>
    <Container disableGutters maxWidth={'xl'}>
    
     <Grid container sx={{justifyContent:"center",alignItems:"center",height:"100vh"}}>
        <Grid  item xs={12} sm={11} md={10} lg={8} sx={{position:"relative",height:{xs:"270px",sm:"500px",md:"500px",lg:"500px"},}}> 
        <Box sx={{position:"absolute",height:"100%",width:"100%"}}>
            <img src={cardbg} alt='card' height={"100%"} width={"100%"}/>
        </Box>
            
            <Grid container sx={{zIndex:9999}}>
              <Grid item xs={5}>
                 <Box sx={{display:screen?"flex":"none",justifyContent:"space-around",alignItems:"center",height:{lg:"65px",md:"60px",sm:"50px",xs:"40px"}}}>
                 <Button
        sx={{
          color: 'white',
          bgcolor: 'black',
          '&:hover': {
            bgcolor: 'black',
          },
          border: '1.5px solid gray',
          borderRadius: '20px',
          whiteSpace: 'nowrap',
          fontSize: {
            xs: '7px',
            sm: '8px',
            md: '11px',
            lg: '12px',
          },
          position:"relative"
        }}
      >
        <input
        type="file"
        accept="image/*"
        style={{border:"1px solid white",position:"absolute",height:"100%",width:"100%",opacity:0}}
        onChange={handleFileChange}
      />
        Upload Image
      </Button>
    
                      
                     <Button onClick={handleSavePdf} className="print-only-button" sx={{color:"white",bgcolor:"black","&:hover":{bgcolor:"black"},border:"1.5px solid gray",borderRadius:"20px",whiteSpace:"nowrap",fontSize:{xs:"7px",sm:"8px",md:"11px",lg:"12px"}}}>Print pdf</Button>
                 </Box>
              </Grid>

              <Grid item xs={7} sx={{height:"fit-content",zIndex:999999999}}>
              <Box sx={{}}>
                 <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:{lg:"70px",md:"69px",sm:"71px",xs:"37px"},}}>
                    <Typography  sx={{textTransform:"uppercase",fontSize:{lg:"20px",md:"17px",sm:"14px",xs:"13px"},fontWeight:"600",color:"black",letterSpacing:"0.5px"}}>
                        Registration no 3347/18 
                    </Typography>
                 </Box>
           
                 <Box sx={{ height:{lg:'103px', md:'106px', sm:'104px', xs:'58px',},}}>
                     <Box sx={{display:"flex",alignItems:":center",height:'33.33%',  }}>
                      <Typography sx={{ fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'14px'}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                        Name:
                      </Typography>
                      <InputBase placeholder='Enter Name' name='name' value={data.name}  sx={{fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'14px'},height:"100%",ml:'3px',width:{lg:"50%",md:"60%", sm:'70%', xs:'85%'}}} onChange={handleSetValue}/>
                     </Box>

                     <Box sx={{display:"flex",alignItems:":center",height:'33.33%',  }}>
                      <Typography sx={{ fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'14px'}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                      Post:
                      </Typography>
                      <InputBase placeholder="Enter Post" name='post' value={data.post}   sx={{fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'14px'},height:"100%",ml:'3px',width:{lg:"50%",md:"60%", sm:'70%', xs:'85%'}}}  onChange={handleSetValue}/>
                     </Box>

                     <Box sx={{display:"flex",alignItems:":center",height:'33.33%',  }}>
                      <Typography sx={{ whiteSpace:'nowrap',fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'14px'}, display:'flex', justifyContent:'center', alignItems:'center'}}>
                        District-State:
                      </Typography>
                      <InputBase   placeholder="Enter District-State"  name='district' value={data.district}  sx={{fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'14px'},height:"100%",ml:'3px',width:{lg:"50%",md:"60%", sm:'70%', xs:'85%'}}}  onChange={handleSetValue}/>
                     </Box>

                   
                 </Box>
                 
                 <Grid container sx={{mt:"3px"}}>
                   <Grid item xs={4.8} sx={{position:"relative",height:"fit-content"}}>
                   <Box sx={{ml:"2.5px",height:{lg:"180px",md:"180px",sm:"180px",xs:"100px"},width:"75%",mt:{lg:"27px",md:"25px",sm:"25px",xs:"10px"}}}>
                     <img alt='img' src={data.image} height={"100%"} width={"100%"}/>
                   </Box>
                   <Box sx={{ml:"3px",position:"absolute",top:{lg:"135px",md:"135px",sm:"135px",xs:"80px"},height:{lg:"110px",md:"110px",sm:"110px",xs:"50px"},width:"73%",mt:{lg:"25px",md:"25px",sm:"25px",xs:"9px"}}}>
                       <img src={sign} alt='sign' width={"100%"} height={"100%"}/>
                   </Box>
                  
                   </Grid>
                   <Grid item xs={7.2} sx={{pr:"5px"}}>
                    <Box sx={{mt:{lg:"27px",md:"25px",sm:"25px",xs:"13px"}}}>
                    <InputBase placeholder='Enter Mobile' type='number'  name='mobile' value={data.mobile}  onChange={handleSetValue} sx={{bgcolor:"white",fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'12px'},pl:"3px"}} fullWidth/>
                    <InputBase placeholder='Enter Email'   name='email' value={data.email}  onChange={handleSetValue}  sx={{bgcolor:"white",pl:"3px",mt:{lg:"17px",md:"20px",sm:"25px",xs:"3px"},fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'12px'}}} fullWidth/>
                    <InputBase placeholder='Enter Address'   name='address' value={data.address}   onChange={handleSetValue}  sx={{bgcolor:"white",pl:"3px",height:{xs:"50px",sm:"60px",md:"70px",lg:"80px"},mt:{lg:"32px",md:"35px",sm:"40px",xs:"4px"},fontSize:{lg:'19px',md:'17px', sm:'15px', xs:'12px'}}} fullWidth/>
                     
                    </Box>
                   </Grid>



                   <Grid item xs={12} sx={{display:"flex",justifyContent:"center",mt:{xs:"18px",sm:"60px",md:"53px",lg:"45px"},zIndex:999999}}>
                      <Box sx={{width:"90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                         <Typography sx={{fontSize:{lg:"22px",md:"19px",sm:"16px",xs:"15px"},color:"black",fontWeight:"700"}}>
                             दिनांक -
                         </Typography>
                         <Box sx={{width:{xs:"80px",sm:"80px",md:"80px",lg:"120px"},ml:"3px"}}>
                         <input placeholder='dd/mm/yy' name='date' value={data.date}   onChange={handleSetValue}  style={{width:"100%"}}/>
                         </Box>
                      </Box>
                        <Box>
                           <Typography align='right' sx={{fontSize:{lg:"22px",md:"19px",sm:"16px",xs:"15px"},color:"black",whiteSpace:"nowrap",fontWeight:"700"}}>
                              वैध है
                           </Typography>
                        </Box>
                      </Box>
                   </Grid>
                   </Grid>
              </Box>
              </Grid>
            </Grid>
        </Grid>
     </Grid>
     </Container>
    </div>
  );
}

export default App;
