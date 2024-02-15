import { useState } from "react"


export default function SideBar(){
    const [activeclassName, setActiveclassName] = useState(0)

    function makeActive(categoryNumber){

        setActiveclassName(categoryNumber);
    }
    return(
      <>
          <div className="mobile-header">
            <span>
                <a className = "menu-bar" href="javacsript:void(0);">
                    <em className = "fas fa-bars"></em>
                </a>
            </span>
            <span>
                <a href="">
                    <img src="https://www.bundle.app/_nuxt/img/bundlemobil.79064cd.svg" alt="" />
                </a>
            </span>
            <span>
                <a className = "search-bar" href="">
                    <em className = "fas fa-search"></em>
                </a>
            </span>
          </div>
          <div className="sidebar">
            <div className="logo">
                <img src="https://www.bundle.app/_nuxt/img/bundlelogo.31534f7.png" alt="" />
            </div>
            <div className="menu">
                <a 
           
                href={`/gundem`}>Life</a>
                <a
          
                 href={`/spor`}>Sport</a>
                <a
      
                href={`/eglence`}>Fun</a>
            </div>
            {/* <div className="theme-switcher">
                <span className="bar">
                    <span className = "ball"></span>
                </span>
                <span>LIGHT</span>
            </div> */}
          </div>  
      </>
    )
  }