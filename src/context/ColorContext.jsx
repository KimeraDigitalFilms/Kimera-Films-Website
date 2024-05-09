import { createContext, useEffect, useState } from "react";

const colorContext = createContext();

export default colorContext;

export const ColorState = (props) =>{

const [canvasBg,setCanvasBg]=useState('#2b1b11')
   const [canvasColor,setCanvasColor]=useState('#ED6E0B')
   const [loadColor,setLoadColor]=useState('#C9D9EE')

  
    

    return(
        <colorContext.Provider value={{canvasBg,setCanvasBg,canvasColor,setCanvasColor,loadColor,setLoadColor}}>
            {props.children}
        </colorContext.Provider>
    )
}