import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'pub_61501b4b97a36637901cffcb26145ee4373df';

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category) => {
    const response = await axios.get(
      `https://newsdata.io/api/1/latest?country=in&category=${category}&apikey=${API_KEY}`
    );
    return response.data.results;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
    category: 'entertainment',
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.articles = [];
      });
  },
});

export const { setCategory } = newsSlice.actions;
export default newsSlice.reducer;
