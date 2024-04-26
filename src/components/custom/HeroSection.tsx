import Link from "next/link";

interface ImageProps {
  id: number;
  url: string;
  alternativeText: string;
}
interface LinkProps {
  id: number;
  url: string;
  text: string;
}
interface HeroSectionProps {
  data: {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: ImageProps;
    link: LinkProps;
  };
}
export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  console.dir(data, { depth: null });
  const { heading, subHeading, image, link } = data;
  const imageUrl = "http://localhost:1337" + image.url;
  return (
    <header className="relative h-[600px] overflox-hidden">
      <img
        alt={image.alternativeText}
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
        src={imageUrl}
        //  src="https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
        <Link
          className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100"
          href={link.url}
        >
          {link.text}
        </Link>
      </div>
    </header>
  );
}
