import {createAsyncThunk} from '@reduxjs/toolkit';
import {Wish, WishState} from '../../../types/store';

export const editWish = createAsyncThunk<
  Wish,
  string,
  {rejectValue: string; state: {wishes: WishState}}
>('wishes/editWish', async function (id, {rejectWithValue, getState}) {
  const wish = getState().wishes.list.find(wish => wish.id === id);

  if (!wish) {
    return rejectWithValue('No wish with sucn an id to edit.');
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'PUT',
      headers: {
        'Contet-Type': 'application/json',
      },
      body: JSON.stringify(wish),
    },
  );

  if (!response.ok) {
    return rejectWithValue('Cannot edit wish. Server error.');
  }

  return (await response.json()) as Wish;
});
