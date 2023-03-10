
export const selectStatus = state => state.contacts.status;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const selectContacts = state =>state.contacts.contacts;

export const selectContact = state => {

      return state.contacts.contacts.filter(({ name }) =>
        name.toLowerCase().includes(state.contacts.filter.toLowerCase())
      );
    };