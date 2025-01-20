export interface CardProps {
  id: string;
  title: string;
  body: string;
}

export interface CardListProps {
  wishes: CardProps[];
}
