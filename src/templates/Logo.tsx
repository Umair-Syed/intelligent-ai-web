import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl text-white'
    : 'font-semibold text-xl text-white';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src="/apple-touch-icon.png"
        alt="logo"
        sizes={size}
        width={size}
        height={size}
        className="mr-4"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
