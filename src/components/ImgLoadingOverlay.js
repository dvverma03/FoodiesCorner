import React from 'react'
import "./ImgLoadingOverlay.css"

const ImgLoadingOverlay = () => {
  return (
    <>
    <div className='headerShimmer'></div>
    <div className="container">
          {Array(16).fill("").map((e)=>(
            <>
          <div className="box" key={e}>
            <div className="major"></div>
            <div className="minor_1"></div>
            <div className="minor_2"></div>
          </div>
          </>
        
          ))}
        </div>
    </>
  )
}

export default ImgLoadingOverlay
