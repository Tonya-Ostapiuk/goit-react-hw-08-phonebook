import React from 'react'
// import { FormStyled, InputStyled, BtnStyled } from '../../components/LogForm/LogForm.Styled';
import { LogForm } from 'components/LogForm/Logform';
import { H1Styled, PageSection } from './LogPage.styled';

export const LogPage = () => {
  return (
   <PageSection>
     <H1Styled> YUOR PHONEBOOK ;)</H1Styled>
    <LogForm />

   </PageSection>
  )
}
