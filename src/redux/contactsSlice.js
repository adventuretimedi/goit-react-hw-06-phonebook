import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialValue = [
  // { id: 0, name: 'Rosie Simpson', number: '555-12-24' },
  // { id: 1, name: 'Diana', number: '555-12-45' },
  // { id: 2, name: 'Kookie', number: '2233312' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: contactsInitialValue },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.value.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: contactsSlice.name,
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
