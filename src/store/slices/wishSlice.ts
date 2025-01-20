import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {WishState, Wish} from '../../types/store';

export const fetchWishes = createAsyncThunk<
  Wish[],
  undefined,
  {rejectValue: string}
>('wishes/fetchWishes', async function (_, {rejectWithValue}) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users/1/posts',
  );

  if (!response.ok) {
    return rejectWithValue('Server Error');
  }

  const data = await response.json();
  return data;
});

const initialState: WishState = {
  list: [],
  loading: false,
  error: null,
};

const wishSlice = createSlice({
  name: 'wishes',
  initialState,
  reducers: {
    // addWish(state, action: PayloadAction<Wish>) {
    //   state.list.push({
    //     userId: action.payload.userId,
    //     id: action.payload.id,
    //     title: action.payload.title,
    //     body: action.payload.body,
    //   });
    // },
    // removeWish(state, action: PayloadAction<string>) {
    //   state.list = state.list.filter(todo => todo.id !== action.payload);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWishes.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishes.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

// export const {addWish, removeWish} = wishSlice.actions;

export default wishSlice.reducer;
