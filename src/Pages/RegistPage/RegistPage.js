import React from 'react'
// import { FormStyled, InputStyled, BtnStyled } from '../../components/LogForm/LogForm.Styled';
import { RegistForm } from 'components/RegistForm/RegistForm';
import { H2Styled, PageSection} from './registPage.styled'; 

export const RegistPage = () => {
  return (
   <PageSection>
   <H2Styled> Please fill out the form. </H2Styled>
    <RegistForm />
    {/* <H2Styled> YUOR PHONEBOOK </H2Styled> */}
   </PageSection>
  )
}