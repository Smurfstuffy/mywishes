import {createAsyncThunk} from '@reduxjs/toolkit';
import {Wish} from '../../../types/store';

export const addWish = createAsyncThunk<Wish, Wish, {rejectValue: string}>(
  'wishes/addWish',
  async function (wish, {rejectWithValue}) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wish),
    });

    if (!response.ok) {
      return rejectWithValue('Cannot add a wish. Server error.');
    }

    return (await response.json()) as Wish;
  },
);
