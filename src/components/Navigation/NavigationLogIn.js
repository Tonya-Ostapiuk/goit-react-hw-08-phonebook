import React from 'react'

import { useDispatch, useSelector  } from 'react-redux';
import { logOut } from 'redux/Login/LoginOperation';
import { selectUsername } from 'redux/Login/logInSelectos';
import { NavLi, UlStyled, UserSt } from './NavigationLogIn.styled'

export const NavigationLogIn = () => {
  
        const dispatch = useDispatch();
          const userName = useSelector(selectUsername);
    

  return (
    <>
        <nav>
        <UlStyled>
            <li>

                <UserSt>{userName}</UserSt>
            </li>
            <li>
                <button onClick={() => dispatch(logOut())}>Logout</button>
            </li>

        </UlStyled>
    </nav>
    </>
  )
}
