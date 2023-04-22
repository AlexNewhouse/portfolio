import Image from 'next/image';

import { Section } from '../Section';

import styles from './Hero.module.scss';

export const Hero = () => {
  return (
    <Section className={styles['hero']} paddingTop="0" paddingBottom="0">
      <div className={styles['hero__content']}>
        <h1>Alex Newhouse</h1>
        <p>Software Engineer. Skateboarder. Gamer.</p>
      </div>
      <div className={styles['hero__image-container']}>
        <div className={styles['hero__blur']}></div>
        <Image
          className={styles['hero__image']}
          src="/assets/images/me.png"
          alt="a headshot of me"
          // width={540}
          // height={600}
          fill
        />
      </div>
    </Section>
  );
};
