import HeroFrame from "../assets/hero-images.png";
import { FaArrowRightLong } from "react-icons/fa6";

export const Hero = () => {
  return (
    <main className="section md:flex">
      <div className="w-fit">
        <h1 className="sm:text-[4rem] text-[3.4rem] leading-[2.8rem] sm:leading-[3.5rem]">
          See the NFT <br /> new world
        </h1>
        <p className="font-medium mt-6 text-[.9rem] sm:w-[30rem]">
          Lorem ipsum dolor sit amet consectetur, <br />
          adipisicing elit. Molestiae sapiente <br />
          quae ullam dolorum.
        </p>
        <div className="font-medium mt-6 flex items-center gap-6">
          <p>Discover now</p>
          <div className="border border-neutral-900 p-3 rounded-full hover:text-white hover:border-neutral-200 hover:bg-neutral-900 transition-all cursor-pointer">
            <FaArrowRightLong />
          </div>
        </div>
      </div>
        <img
          className=" max-w-[40rem] md:min-w-[30rem] max-md:min-w-[30rem]"
          src={HeroFrame}
        />
    </main>
  );
};
