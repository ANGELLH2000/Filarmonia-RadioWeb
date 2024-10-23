import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";


function Sec5() {
    return (
        <div className='footer5'>
            <h4>Redes SOCIALES</h4>
            <div className="social flex-row">
                <FaFacebookF />
                <p>/ Filarmonía</p>
            </div>
            <div className="social flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M4 9.4a6.8 6.8 0 0 1-2.41 1.21a.5.5 0 0 0 0 .94C8.51 14.39 12.91 10 12.24 5.13l1.12-2.32h-1.3C10.44.82 6.14.92 6.85 5.16c0 0-2.3.41-5.24-2.48A.5.5 0 0 0 .76 3A5.52 5.52 0 0 0 4 9.4"></path></svg>
                <p>/ Filarmonía</p>
            </div>
            <div className="social flex-row">
                <ImYoutube2 />
                <p>/ Filarmonia TV</p>
            </div>

        </div>
    )
}

export default Sec5