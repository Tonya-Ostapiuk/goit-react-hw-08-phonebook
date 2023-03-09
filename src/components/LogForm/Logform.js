import React from 'react'
import { FormStyled, InputStyled, BtnStyled } from './LogForm.Styled';

export const LogForm = () => {
  return (
   <>
    
    <FormStyled >
    {/* <FormStyled onSubmit={handleSubmit}> */}
      {/* <LabelStyled> */}
      {/* E-mail */}
        <InputStyled
          type="text"
          name="email"
          required
          placeholder='E-mail'
          // value={name}
          // onChange={handleChange}
        />
      {/* </LabelStyled> */}
      {/* <LabelStyled> */}
      {/* Password */}
        <InputStyled
          type="tel"
          name="password"
          required
          placeholder='Password'
          // value={number}
          // onChange={handleChange}
        />
      {/* </LabelStyled> */}
      <BtnStyled type="submit">Log in</BtnStyled>
    </FormStyled>
 
   </>
  )
}