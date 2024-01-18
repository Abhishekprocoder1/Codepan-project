import { useContext } from "react";
import Edit from "./Edit";
import {Box,styled} from "@mui/material";
import { DataContact } from "../Contaxt/Dataprovider";
const Container=styled(Box)`
display:flex;
background-color:#060606;
hight:50vh;
`
const Code=()=>
{
const {html,setHtml,css,setCss,js,setjs}=useContext(DataContact)

return(
<Container>
<Edit Heading="HTML" 
   icon="/"
    color="#FF3C41"
    value={html}
    onChang={setHtml}
/>
  <Edit
Heading="CSS"
icon="*"
color="#0EBEFF"
value={css}
onChang={setCss}
  />
<Edit
Heading="JavaScript"
icon="()"
color="#FCD000"
value={js}
onChang={setjs}
/>
</Container>
)
}
export default Code;