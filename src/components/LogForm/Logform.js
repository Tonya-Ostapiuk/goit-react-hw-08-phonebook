import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/Login/LoginOperation';
import { FormStyled, InputStyled, BtnStyled } from './LogForm.Styled';

export const LogForm = () => {
  const dispatch = useDispatch();
  // let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const handleChange = ({ target: {name, value}}) => {
    switch (name) {
      // case 'name':
      //   setName(value);
      //   break;
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
    dispatch(logInUser({ email, password }));
    // setName = ('');
    setEmail = ('');
    setPassword = ('');
  }


  return (
   <>
    
    {/* <FormStyled > */}
    <FormStyled onSubmit={handleSubmit}>
      {/* <LabelStyled> */}
      {/* E-mail */}
        <InputStyled
          type="text"
          name="email"
          required
          placeholder='E-mail'
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
          placeholder='Password'
          value={password}
          onChange={handleChange}
        />
      {/* </LabelStyled> */}
      <BtnStyled type="submit">Log in</BtnStyled>
    </FormStyled>
 
   </>
  )
}