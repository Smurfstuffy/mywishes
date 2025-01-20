import {useEffect} from 'react';
import {fetchWishes} from '../store/slices/wishes/fetchWishes';
import {useAppDispatch} from '../hooks/useRedux';
import CardList from '../components/cards/CardList';
import AddWishForm from '../components/forms/AddWishForm';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWishes());
  }, [dispatch]);

  return (
    <div className="flex sm:px-16 py-4 md:px-32 lg:px-48 min-h-screen justify-center items-center ">
      <AddWishForm />

      <CardList />
    </div>
  );
};

export default HomePage;
