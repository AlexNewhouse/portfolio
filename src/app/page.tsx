import { Hero } from '@/components/Hero';
import { Quote } from '@/components/Quote';

export default function Home() {
  return (
    <main>
      <Hero />
      <Quote
        quote="Design is not just what it looks like and feels like. Design is how it
          works."
        author="Steve Jobs."
      />
    </main>
  );
}
