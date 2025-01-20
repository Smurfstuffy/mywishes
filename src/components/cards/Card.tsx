import {FC} from 'react';
import {CardProps} from '../../types/components/cards';

const Card: FC<CardProps> = ({title, body}) => (
  <div className="flex flex-col justify-between items-center bg-zinc-100 border border-zinc-200 p-4 rounded-lg w-full h-full min-h-[10rem] max-w-xs">
    <h1 className="text-4xl text-zinc-900 font-bold text-center mb-2 truncate w-full">
      {title}
    </h1>
    <span className="text-xl block text-zinc-700 truncate w-full text-center">
      {body}
    </span>
  </div>
);

export default Card;
