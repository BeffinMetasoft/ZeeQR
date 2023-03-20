// import Contacts from 'react-native-contacts';
import{NativeModules} from 'react-native'
const {Contacts} =NativeModules

const createContact = (givenName, phoneNumbers, callback) => {
    const newContact = {
        givenName: givenName,
        phoneNumbers: phoneNumbers,
    };
    Contacts.addContact(newContact, callback);
};

const updateContact = (contact, callback) => {
    Contacts.updateContact(contact, callback);
};

const deleteContact = (contact, callback) => {
    Contacts.deleteContact(contact, callback);
};

export default window.ContactsModule = {
    createContact,
    updateContact,
    deleteContact,
  };