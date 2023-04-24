import clsx from 'clsx';

import styles from './Section.module.scss';

interface ISection {
  children: React.ReactNode;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
  backgroundColor?: 'background-color' | 'primary' | 'secondary' | 'tertiary';
}

export const Section = ({
  children,
  className,
  paddingTop = '5rem',
  paddingBottom = '5rem',
  backgroundColor = 'background-color',
}: ISection) => {
  const contentClass = clsx(styles['section__content'], className);

  return (
    <section
      className={styles['section']}
      style={{
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        backgroundColor: `var(--${backgroundColor})`,
      }}
    >
      <div className={contentClass}>{children}</div>
    </section>
  );
};
