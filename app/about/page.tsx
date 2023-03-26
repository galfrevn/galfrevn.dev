import { AnimatedImage } from 'components/animated/image';
import { AboutHero } from 'components/sections/about/hero';

export default function About() {
  return (
    <section className='container max-w-7xl px-6 mt-40'>
      <AboutHero />
      <AnimatedImage />
      <p className='text-lg font-normal leading-relaxed text-dark-400 dark:text-dark-200 mb-10'>
        My name is Valentín Galfré. I am 20 years old, I live in Copenhagen, Denmark, and I&apos;m a
        self-taught designer and developer. Digital design has been my main focus for many years,
        specifically UI/UX, but I have the past years shifted my focus to frontend development,
        which I have developed a great passion for. I enjoy the constant change in the technologies
        used in the area and love diving into new frameworks and technologies. Spending time
        customizing, improving and tinkering with my work environment and tools is something I enjoy
        a lot, as it is something I use for many hours daily. It allows me to have it exactly as I
        desire. For instance, I use Neovim as my editor of choice, I have built multiple custom
        mechanical keyboards, and I use Colemak DHk as my keyboard layout.
      </p>
    </section>
  );
}
