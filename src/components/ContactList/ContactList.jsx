import { WraperStyled } from './ContactList.styled';
import ContactItem from '../Contact/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContact } from '../../redux/contacts/contactSelectors';
import { fetchContacts } from '../../redux/contacts/contactThunk';

export const ContactList = () => {
  const items = useSelector(selectContact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <WraperStyled>
      {items.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </WraperStyled>
  );
};
