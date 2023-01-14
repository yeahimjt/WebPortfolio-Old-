import React, {useRef,useEffect} from 'react'
import WebViewer from '@pdftron/webviewer'
import './pdf.css'

function PDF() {
    const viewerDiv = useRef(null);

    useEffect(()=>{
        WebViewer({path:'lib', initialDoc:'Resume.pdf'}, viewerDiv.current).then(instance=>{

        });
    },[]);

    return(
        <div className="pdf__container">
            <div className="pdf__webviewer" ref={viewerDiv}>
            </div>
        </div>
    );
}

export default PDF