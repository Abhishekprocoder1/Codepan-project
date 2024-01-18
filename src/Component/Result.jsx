import { useContext ,useState,useEffect} from 'react';
import {Box,styled} from '@mui/material';
import {DataContact, Dataprovide} from'../Contaxt/Dataprovider';
const Continer=styled(Box)`
 height:41px;
`


const Result=()=>{
    const [src,setSrc]=useState('');
    const {html,css,js}=useContext(DataContact);
    const srccode=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </htm>`
useEffect(()=>{
const timeout=setTimeout(()=>{
 setSrc(srccode)
  },1000)
  return ()=>clearTimeout(timeout);
},[html,css,js])
    return(
        <Continer>
     <iframe
     srcDoc={src}
     title="output"
     sandbox='allow-scripts'
     width="100%"
     height="100%"
     frameBorder={0}
     />
        </Continer>
    )
}
export default Result;