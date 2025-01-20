import {useEffect} from 'react';
import {fetchWishes} from '../store/slices/wishSlice';
import {useAppDispatch} from '../hooks/useRedux';
import CardList from '../components/cards/CardList';

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWishes());
  }, [dispatch]);

  return (
    <div>
      <CardList />
    </div>
  );
};

export default HomePage;
