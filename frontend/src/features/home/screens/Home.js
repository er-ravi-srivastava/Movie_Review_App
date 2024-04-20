import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center h-full relative">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Welcome to MovieMania <br /> Your Ultimate Destination for Film
          Reviews!
        </h1>
        <p className="mt-6 text-lg leading-8 text-black-600 px-10">
          "Welcome to MovieMania" - Your Ultimate Destination for Film Reviews!
          Immerse yourself in the mesmerizing world of cinema, where every frame
          tells a story and every performance captivates the soul. At
          MovieMania, we're passionate about bringing you the latest insights,
          reviews, and analyses of the silver screen's finest offerings. Embark
          on a cinematic adventure like never before as you explore a vast array
          of genres, from pulse-pounding action thrillers to heartwarming
          romantic comedies and thought-provoking dramas. Discover hidden
          cinematic gems waiting to be unearthed and revisit timeless classics
          that have shaped the landscape of modern filmmaking.
        </p>
      </div>
      <div className=" flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
