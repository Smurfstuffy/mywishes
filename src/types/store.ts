export interface Wish {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface WishState {
  list: Wish[];
  loading: boolean;
  error: string | null;
}
