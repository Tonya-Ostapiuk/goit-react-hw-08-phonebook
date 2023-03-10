import styled from 'styled-components';

export const DivStyled = styled.div `
    display: flex;
    flex-direction: column;
`

export const InputStyled = styled.input `
    width: 200px;
    height: 20px;
  
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 4px;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
   
    border-color: rgba(70, 70, 84, 0.227);
    &:focus{
        box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
        border: 1px solid #a9d1de;
        outline: none;
    
  }
`
export const LabelStyled = styled.label `
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71;
  margin-left: 118px;
  margin-top: 5px;
  color: #001a1a;
 
`