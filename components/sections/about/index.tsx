const aboutText = `Hello! My name is Valentín Galfré and I’m a fullstack software developer. My interest in computers and
software development began at a young age messing around in 2D game engines, creating
whatever I could think of. Today that interest has grown into my passion. I love learning new
technologies and solving problems to create high-quality user experiences.`;

export const About = () => {
  return (
    <section className='container my-40 px-5 md:px-8 max-w-2xl'>
      <p className='text-lg font-normal leading-relaxed text-dark-400 dark:text-dark-200'>
        {aboutText}
      </p>
    </section>
  );
};
