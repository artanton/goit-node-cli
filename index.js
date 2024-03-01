import {
  addContact,
  getContactById,
  listContacts,
  removeContact,
} from "./contacts.js";
import yargs from "yargs";

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
      break;

    case "get":
      const getContacts = await getContactById(id);
      return console.log(getContacts);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
