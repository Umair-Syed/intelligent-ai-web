import type { ReactNode } from 'react';

type IHeroTwoButtonProps = {
  title: ReactNode;
  description: string;
  buttonOne: ReactNode;
  buttonTwo: ReactNode;
};

const HeroTwoButton = (props: IHeroTwoButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-white">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl text-gray-400">{props.description}</div>

    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      {props.buttonOne}
      {props.buttonTwo}
    </div>
  </header>
);

export { HeroTwoButton };
