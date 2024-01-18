  import {Box ,styled }from '@mui/material';
  import { useState } from 'react';
  import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'
  import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
  
  import { Controlled as ControlledEditor } from 'react-codemirror2';

 const Container=styled(Box)`
 flex-grow:1;
 flex-basic:0;
 flex-direction:colunm;
 padding:0 8px 8px;
 `
  const Heading = styled(Box)`
  background:#1d1e22;
  display:flex;
  padding:9px 12px ;
  `;

  const Header=styled(Box)`
  display:flex;
  background:#060606;
  color:#AAAEBc;
  justify-content:space-between;
  font-weight:700;
  `
const Edit=({Heading, icon,color,value,onChang})=>{
  const [open,setOpen]=useState(true);
 const handleChange=(edit,data,value)=>{
  console.log("hihi")
 onChang(value);
  }
    return(
    <Container style={open ? null  :{flexGrow :0}}>
        <Header>
        <Heading>
        <Box component="span"
        style={{
            background:color,
            height:20,
            width:20,
            display:"flex",
            placeContent:"center",
            margin:5,
            borderRadius:5,
            paddingButton:2,
            color:'#000'
        } 
        }
        >
        {icon}
       </Box>
       {Heading}
        </Heading>
        <CloseFullscreenIcon  
        fontSize="small"
        style={{alignSelf:'center'}}
         onClick={()=>setOpen(prevState=>!prevState)}/>
        </Header>
       <ControlledEditor
       className='controlled-editor'
       value={value}
       onBeforeChange={handleChange}
       options={{
        theme:'material',
        lineNumber:true
       }}/>
    </Container>
    )

}
export default Edit;