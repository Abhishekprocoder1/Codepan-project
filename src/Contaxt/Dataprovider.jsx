
import { createContext,useState  } from "react";

export const DataContact=createContext();

const Dataprovider=({children})=>{
const [html,setHtml]=useState('');
const [css,setCss]=useState('');
const [js,setjs]=useState('');

    return(
        <DataContact.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setjs
        }      
        }>
           {children} 
        </DataContact.Provider>
    )
}
export default Dataprovider;