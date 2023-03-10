import { NavLi, UlStyled } from './HomePage.styled';

export const HomePage = () => {
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