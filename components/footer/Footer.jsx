import React from 'react'
import footer from './Footer.module.css'
const Footer = () => {
  return (
    <div>
        <div>
            <div className={footer.line}></div>
          </div>
          <div className={footer.flex}>
              <div className={footer.avatar}></div>
              <p className={footer.softBlue__p}>Creation of <span className={footer.span}>Jules Wyvern</span></p>
          </div>
    </div>
  )
}

export default Footer