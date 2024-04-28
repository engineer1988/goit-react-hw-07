import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "../redux/contactsOps";
const contactsInitialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = true;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const selectContacts = (state) => {
  return state.contacts.items;
};

export const contactsReducer = contactsSlice.reducer;
