import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { authSelectors } from 'redux/Login/logInSelectos';
import { FormStyled, InputStyled, BtnStyled } from './RegistForm.styled';
import { registerUser } from 'redux/Login/LoginOperation';

export const RegistForm = () => {
  const dispatch = useDispatch();
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleChange = ({ target: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
        case 'password':
            setPassword(value);
            break;
      default:
        alert('Error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setName = ('');
    setEmail = ('');
    setPassword = ('');
  }

  return (
    <>
      {/* <FormStyled> */}
        <FormStyled onSubmit={handleSubmit}>
        {/* <LabelStyled> */}
        {/* E-mail */}
        <InputStyled
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={handleChange}
        />
        <InputStyled
          type="email"
          name="email"
          required
          placeholder="E-mail"
          value={email}
          onChange={handleChange}
        />
        {/* </LabelStyled> */}
        {/* <LabelStyled> */}
        {/* Password */}
        <InputStyled
          type="password"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        {/* </LabelStyled> */}
        <BtnStyled type="submit">Registration</BtnStyled>
      </FormStyled>
    </>
  );
};
