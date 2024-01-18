import { AppBar,Toolbar,styled}  from '@mui/material';
const Continer=styled(AppBar)`from '@mui/material';
background:#060606;
hight:9vh;
`
const Header=()=>{
    return(
        <Continer position='static'>
            <Toolbar>
               
            </Toolbar>
        </Continer>
    )
}
export default Header;