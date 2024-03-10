import React from 'react'
import "./ImgLoadingOverlay.css"

const ImgLoadingOverlay = () => {
  return (
    <>
    <div className='headerShimmer1'></div>
    <div className="container1">
          {Array(16).fill("").map((e)=>(
            <>
          <div className="box1" key={e}>
            <div className="major1"></div>
            <div className="minor_11"></div>
            <div className="minor_21"></div>
          </div>
          </>
        
          ))}
        </div>
    </>
  )
}

export default ImgLoadingOverlay
