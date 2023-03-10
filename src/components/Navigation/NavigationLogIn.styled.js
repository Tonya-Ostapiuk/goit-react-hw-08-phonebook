import styled from 'styled-components';

export const NavLi = styled.button`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.71;
  color: #0b544a;
  justify-content: center;
  width: 120px;
  height: 25px;
  margin-left: 39px;
  margin-top: 15px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: rgba(70, 70, 84, 0.227);
  &:hover{
    border-color: #5e8591;
    background-color: #a9d1de;
    box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
    cursor: pointer;
  }
`;


export const UlStyled = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-bottom: 12px;
  border-bottom: 1px solid #bbb7b7;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const UserSt = styled.p `
  color: #009999;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.14;
`