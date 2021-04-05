/* THIS HOOK RETURNS THE WINDOW'S SIZE (Width and Height) */

import { useEffect, useState } from 'react';

export const useWindowWidthAndHeight = ()=>{
    // 1- Gets the size of window 
    let windowInnerSize = [window.innerWidth, window.innerHeight];

    // 2- Defines the state variable windowSize and pass windowInnerSize as its initial value
    let [ windowSize, setWidowSize ] = useState(windowInnerSize);

    useEffect(()=>{
        const changeWindowSize = ()=>{
            setWidowSize([window.innerWidth, window.innerHeight]);
        }
        /* 3- adds a 'resize' eventListener to window so that whenever 
the size of window changes the state variable windowSize changes and the component re-renders */
        window.addEventListener("resize", changeWindowSize);

        // 4- cleanup the 'resize' eventListener
        return ()=> window.removeEventListener('resize', changeWindowSize);
    }, []);
    // 5- returns the window size
    return windowSize;
}