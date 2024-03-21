import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experince Download <br/> Tomoto App</p>
        <div className='app-download-platform'>
            <img src={assets.play_store} alt='Icons'/>
            <img src={assets.app_store} alt='Icons'/>
        </div>
    </div>
  )
}

export default AppDownload