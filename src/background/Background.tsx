import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string;
};

const Background = (props: IBackgroundProps) =>
  props.color ? (
    <div className={props.color}>{props.children}</div>
  ) : (
    <div>{props.children}</div>
  );

export { Background };
