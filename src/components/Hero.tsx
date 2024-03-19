import React from 'react'


interface HeroProps {
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div
      className="hero min-h-screen" 
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold uppercase">title</h1>
          <p className="mb-5 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore excepturi ullam vero quibusdam qui quam, amet mollitia consectetur architecto beatae dolorum ratione laudantium neque. Voluptatem autem quam itaque porro quas!</p>
          <button className="btn btn-secondary">
            <a href="/blog" className="text-2xl text-gray-100 font-bold uppercase">enter the void</a>
          </button>
        </div>
      </div></div>
  );
};

export default Hero;