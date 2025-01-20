import {createAsyncThunk} from '@reduxjs/toolkit';

export const deleteWish = createAsyncThunk<
  string,
  string,
  {rejectValue: string}
>('wishes/deleteWish', async function (id, {rejectWithValue}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'DELETE',
    },
  );

  if (!response.ok) {
    return rejectWithValue('Cannot delete a wish. Server error.');
  }

  return id;
});
