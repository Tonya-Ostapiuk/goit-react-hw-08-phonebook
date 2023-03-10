import React from 'react'
// import { NavLink } from 'react-router-dom';
import { NavLi, UlStyled } from './Navigation.styled'

export const Navigation = () => {
return (
    // <header>
    <nav>
        <UlStyled>
            <li>

                <NavLi to='/register'>Registration</NavLi>
            </li>
            <li>
                <NavLi to='/login'>Log in</NavLi>
            </li>

        </UlStyled>
    </nav>
    // </header>

)
}