import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  imageSmall?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-300">{props.title}</h3>
        <div className="mt-6 text-xl leading-9 text-gray-500">
          {props.description}
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        {props.imageSmall ? (
          <Image
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            width={350}
            height={250}
            layout="fixed"
          />
        ) : (
          <Image
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            width={500}
            height={300}
            layout="fixed"
          />
        )}
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
