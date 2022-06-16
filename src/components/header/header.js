import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import classes from './header.module.css'

function Header({bgColor, textColor, fullPaged, className}) {

  const [isBurgerOpen, setBurgerOpen] = React.useState(false)
  const {totalCount} = useSelector(({cartReducer}) => cartReducer)

/*   const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {type: "spring", duration: 1.5, bounce: 0 },
          opacity: { duration: 0.01 }
        }
    }
  }; */

/*   const draw = {
    hidden: { pathLength: 0, opacity: 0, rotate: -25 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        rotate: 0,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  }; */
  

  return (
    <header style = {{backgroundColor : bgColor}} className = {className ? className : ''}>
        <div className={`container-wrapper ${classes.headerWrapper}`} style = {{width: fullPaged ? '100%' : '', padding: fullPaged ? '0 3%' : ''}}>

          <div className={classes.mainMenu}>
            <Link to = '/'><h3 className={classes.logo} style = {{color: textColor}}>PlantyCo.</h3></Link> 
            <nav className={classes.menu}>
                  <ul>
                    <Link to = '/'><li style = {{color: textColor}}>Main page</li></Link> 
                    <Link to = '/catalog'><li style = {{color: textColor}}>Plants</li></Link>
                    <Link to = '/'><li style = {{color: textColor}} onClick = {() => alert('On development stage')}>Blog</li></Link>
                    <a href = '#footer'><li style = {{color: textColor}}>Contacts</li></a>
                  </ul>
              </nav>
              <Link to = '/cart'>
                <div className={classes.cart}>
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className = {classes.cart}>
                    <path d="M13.5 32C14.8807 32 16 30.8807 16 29.5C16 28.1193 14.8807 27 13.5 27C12.1193 27 11 28.1193 11 29.5C11 30.8807 12.1193 32 13.5 32Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                    <path d="M26.5 32C27.8807 32 29 30.8807 29 29.5C29 28.1193 27.8807 27 26.5 27C25.1193 27 24 28.1193 24 29.5C24 30.8807 25.1193 32 26.5 32Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                    <path d="M33.1 6.39003C33.0068 6.26901 32.8872 6.17094 32.7503 6.10334C32.6133 6.03573 32.4627 6.00039 32.31 6.00003H9.20999L8.75999 4.57003C8.71056 4.41648 8.62472 4.27718 8.50979 4.164C8.39487 4.05081 8.25427 3.96711 8.09999 3.92003L3.99999 2.66003C3.87392 2.62129 3.74145 2.60776 3.61016 2.62021C3.47886 2.63266 3.3513 2.67086 3.23476 2.73261C2.9994 2.85732 2.82323 3.07042 2.74499 3.32503C2.66675 3.57963 2.69286 3.85489 2.81757 4.09025C2.94228 4.32561 3.15538 4.50179 3.40999 4.58003L6.99999 5.68003L11.58 20.15L9.94999 21.49L9.81999 21.62C9.41689 22.0868 9.1885 22.6791 9.17391 23.2957C9.15932 23.9122 9.35942 24.5147 9.73999 25C10.0125 25.3315 10.3589 25.5946 10.7513 25.7682C11.1438 25.9418 11.5714 26.0212 12 26H28.69C28.9552 26 29.2096 25.8947 29.3971 25.7071C29.5846 25.5196 29.69 25.2652 29.69 25C29.69 24.7348 29.5846 24.4805 29.3971 24.2929C29.2096 24.1054 28.9552 24 28.69 24H11.84C11.7248 23.9961 11.6126 23.9625 11.5142 23.9026C11.4159 23.8426 11.3346 23.7583 11.2783 23.6578C11.222 23.5573 11.1926 23.4439 11.1929 23.3287C11.1932 23.2135 11.2232 23.1003 11.28 23L13.69 21H29.12C29.3484 21.0067 29.5722 20.9349 29.7542 20.7966C29.9361 20.6583 30.0652 20.4619 30.12 20.24L33.32 7.24003C33.3504 7.09094 33.3464 6.93689 33.3083 6.78959C33.2701 6.64229 33.1989 6.50563 33.1 6.39003V6.39003Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                  </svg >
                  {
                    totalCount > 1 && <div className = {classes.totalCount}><span>{totalCount}</span></div> 
                  }
                </div>
              </Link>
          </div>

          <div className={classes.mobileMenu}>

            {
              isBurgerOpen && (
                <svg width="63" className = {classes.close} onClick = {() => setBurgerOpen(!isBurgerOpen)} viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4964 36.6149L57.8772 63L63 57.885L36.6119 31.5L63 5.12219L57.8845 0L31.4964 26.385L5.11554 0L0 5.12219L26.3808 31.5L0 57.8778L5.11554 63L31.4964 36.6149Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                </svg>
              )
            }

            {
              !isBurgerOpen && (
                <svg width="308" onClick = {() => setBurgerOpen(!isBurgerOpen)} className = {classes.hamburger} viewBox="0 0 308 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M154 205H0V170.833H154V205ZM308 119.583H0V85.4167H308V119.583ZM308 34.1667H154V0H308V34.1667Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                </svg>
              )
            }

            <Link to = '/'><h3 className={classes.logo} style = {{color: textColor}}>PlantyCo.</h3></Link>

            <Link to = '/cart'>
              <div className={classes.cart}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className = {classes.cart}>
                    <path d="M13.5 32C14.8807 32 16 30.8807 16 29.5C16 28.1193 14.8807 27 13.5 27C12.1193 27 11 28.1193 11 29.5C11 30.8807 12.1193 32 13.5 32Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                    <path d="M26.5 32C27.8807 32 29 30.8807 29 29.5C29 28.1193 27.8807 27 26.5 27C25.1193 27 24 28.1193 24 29.5C24 30.8807 25.1193 32 26.5 32Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                    <path d="M33.1 6.39003C33.0068 6.26901 32.8872 6.17094 32.7503 6.10334C32.6133 6.03573 32.4627 6.00039 32.31 6.00003H9.20999L8.75999 4.57003C8.71056 4.41648 8.62472 4.27718 8.50979 4.164C8.39487 4.05081 8.25427 3.96711 8.09999 3.92003L3.99999 2.66003C3.87392 2.62129 3.74145 2.60776 3.61016 2.62021C3.47886 2.63266 3.3513 2.67086 3.23476 2.73261C2.9994 2.85732 2.82323 3.07042 2.74499 3.32503C2.66675 3.57963 2.69286 3.85489 2.81757 4.09025C2.94228 4.32561 3.15538 4.50179 3.40999 4.58003L6.99999 5.68003L11.58 20.15L9.94999 21.49L9.81999 21.62C9.41689 22.0868 9.1885 22.6791 9.17391 23.2957C9.15932 23.9122 9.35942 24.5147 9.73999 25C10.0125 25.3315 10.3589 25.5946 10.7513 25.7682C11.1438 25.9418 11.5714 26.0212 12 26H28.69C28.9552 26 29.2096 25.8947 29.3971 25.7071C29.5846 25.5196 29.69 25.2652 29.69 25C29.69 24.7348 29.5846 24.4805 29.3971 24.2929C29.2096 24.1054 28.9552 24 28.69 24H11.84C11.7248 23.9961 11.6126 23.9625 11.5142 23.9026C11.4159 23.8426 11.3346 23.7583 11.2783 23.6578C11.222 23.5573 11.1926 23.4439 11.1929 23.3287C11.1932 23.2135 11.2232 23.1003 11.28 23L13.69 21H29.12C29.3484 21.0067 29.5722 20.9349 29.7542 20.7966C29.9361 20.6583 30.0652 20.4619 30.12 20.24L33.32 7.24003C33.3504 7.09094 33.3464 6.93689 33.3083 6.78959C33.2701 6.64229 33.1989 6.50563 33.1 6.39003V6.39003Z" fill={bgColor === "#fff" ? "#2A4E2B" : "#fff"}/>
                </svg>
                {
                  totalCount > 1 && <div className = {classes.totalCount}><span>{totalCount}</span></div> 
                }
              </div>
            </Link>

          </div>
        </div>
                    {isBurgerOpen && (
                          <nav className={classes.mobileNavBar}>
                          <ul style = {{backgroundColor: bgColor}}>
                            <Link to = '/'><li style = {{color: textColor}}>Main page</li></Link> 
                            <Link to = '/catalog'><li style = {{color: textColor}}>Plants</li></Link>
                            <Link to = '/' onClick = {() => alert('On development stage')} ><li style = {{color: textColor}}>Blog</li></Link>
                            <a href = '#footer'><li style = {{color: textColor}}>Contacts</li></a>
                          </ul>
                      </nav>
            )}
    </header>
  )
}

export default Header