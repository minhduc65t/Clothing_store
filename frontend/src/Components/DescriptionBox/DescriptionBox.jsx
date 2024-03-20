import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
     <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
     </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is a an online platform that facilities the buying and selling of product or service over the internet.
            </p>
            <p>
                E-commerce website typically display product or service a detail.
            </p>
        </div>
    </div>
  )
}
