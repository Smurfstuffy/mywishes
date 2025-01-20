import {createSlice, AnyAction, PayloadAction} from '@reduxjs/toolkit';
import {WishState} from '../../../types/store';
import {fetchWishes} from './fetchWishes';
import {addWish} from './addWish';
import {editWish} from './editWish';
import {deleteWish} from './deleteWish';

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
      })
      .addCase(addWish.pending, state => {
        state.error = null;
      })
      .addCase(addWish.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(editWish.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          wish => wish.id === action.payload.id,
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteWish.fulfilled, (state, action) => {
        state.list = state.list.filter(wish => wish.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// export const {addWish, removeWish} = wishSlice.actions;

export default wishSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
