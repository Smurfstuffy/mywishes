import {createAsyncThunk} from '@reduxjs/toolkit';
import {Wish} from '../../../types/store';

export const fetchWishes = createAsyncThunk<
  Wish[],
  undefined,
  {rejectValue: string}
>('wishes/fetchWishes', async function (_, {rejectWithValue}) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    return rejectWithValue('Server Error');
  }

  const data = await response.json();
  return data;
});
