import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://662e35dda7dda1fa378c5d62.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (value, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", value);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
