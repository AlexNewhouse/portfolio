import { Section } from '@/components/Section';

import styles from './Quote.module.scss';

interface IQuote {
  quote: string;
  author: string;
}

export const Quote = ({ quote, author }: IQuote) => {
  return (
    <Section backgroundColor="secondary">
      <h6 className={styles['quote__quote']}>
        &quot;{quote}&quot; - {author}
      </h6>
    </Section>
  );
};
