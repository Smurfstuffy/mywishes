import Card from './Card';
import {useAppSelector} from '../../hooks/useRedux';

const CardList = () => {
  const wishes = useAppSelector(state => state.wishes.list);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
      {wishes.map(wish => {
        return (
          <Card
            key={wish.id}
            id={wish.id}
            title={wish.title}
            body={wish.body}
          />
        );
      })}
    </div>
  );
};

export default CardList;
