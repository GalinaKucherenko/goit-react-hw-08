import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addContacts, fetchContacts, deleteContact } from "./contactsOps";
import { selectTextFilter } from "./filtersSlice";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: [],
    loading: false,
    error: null
    },
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        }).addCase(fetchContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(addContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(addContacts.fulfilled, (state, action) => {
            state.items.push(action.payload);
            state.loading = false;
        }).addCase(addContacts.rejected, (state) => {
            state.loading = false;
            state.error = true;
        }).addCase(deleteContact.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload.id);
            state.loading = false;
        }).addCase(deleteContact.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectTextFilter],
    (contacts, textFilter) => {
        return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(textFilter.toLowerCase())
    );
    })

export default contactsSlice.reducer;