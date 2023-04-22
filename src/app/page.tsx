import { Hero } from './components/Hero';
import { Section } from './components/Section';

export default function Home() {
  return (
    <main>
      <Hero />
      <Section backgroundColor="secondary">More content goes here</Section>
    </main>
  );
}
