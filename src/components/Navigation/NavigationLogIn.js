import React from 'react'

import { useDispatch, useSelector  } from 'react-redux';
import { logOut } from 'redux/Login/LoginOperation';
import { selectUserEmail } from 'redux/Login/logInSelectos';
import { NavLi, UlStyled, UserSt } from './NavigationLogIn.styled'

export const NavigationLogIn = () => {
  
        const dispatch = useDispatch();
          const userEmail = useSelector(selectUserEmail);
    

  return (
    <>
        <nav>
        <UlStyled>
            <li>

                <UserSt>{userEmail}</UserSt>
            </li>
            <li>
                <NavLi onClick={() => dispatch(logOut())}>Logout</NavLi>
            </li>

        </UlStyled>
    </nav>
    </>
  )
}
