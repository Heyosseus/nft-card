import React from 'react'
import content from './Content.module.css'
const Content = () => {
  return (
    <div>
          <div className={content.flexbox}>
              <div className={content.div}>
                  <div className={content.eth}></div>
                <h3 className={content.cyan__heading}>0.041 ETH</h3>   
              </div>

              <div className={content.div}>
                <div className={ content.clock} ></div>
                <h3 className={content.softBlue__heading}>3 days left</h3>
              </div>

        </div>
              
    </div>
  )
}

export default Content