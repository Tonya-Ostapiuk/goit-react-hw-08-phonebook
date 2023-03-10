import { H1Styled, H2Styled, PageSection } from './ContactsPage.styled';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';

export function ContactsPage() {
  return (
    <PageSection>
      <H1Styled>Phonebook</H1Styled>
      <ContactForm />
      <H2Styled>Contacts</H2Styled>
      <Filter />
      <ContactList />
    </PageSection>
  );
};