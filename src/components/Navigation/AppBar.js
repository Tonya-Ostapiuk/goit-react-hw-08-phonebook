import { useSelector} from 'react'
import { selectIsLoggedIn } from 'redux/Login/logInSelectos';
import { Navigation } from './Navigation';
import { NavigationLogIn } from './NavigationLogIn';

export const AppBar = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <header >
        <Navigation />
        {isLoggedIn ? <Navigation /> : <NavigationLogIn />}
      </header>
    );

}



