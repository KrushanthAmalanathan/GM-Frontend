// eslint-disable-next-line no-unused-vars
import React from "react";
import { GoDotFill } from "react-icons/go";

const FooterLinks = () => {
  return (
    <div className=" flex flex-col justify-evenly ml-[2%] w-[26%] text-black ">
      <div className="flex flex-row text-[1rem]">
        <GoDotFill className="text-[1rem] mt-[5px] mr-[5px]" />
        <p className="text-[100%] text-black font-BreeSerif">
        Gym sessions boost overall health.
        </p>
      </div>
      <div className="flex flex-row text-[1rem]">
        <GoDotFill className="text-[1rem] mt-[5px] mr-[5px]" />
        <p className="text-[100%] text-black font-BreeSerif">
        Start today, achieve fitness goals.
        </p>
      </div>
      <div className="flex flex-row text-[1rem]">
        <GoDotFill className="text-[1rem] mt-[5px] mr-[5px]" />
        <p className="text-[100%] text-black font-BreeSerif">
        Daily workouts enhance mental clarity.
        </p>
      </div>
      <div className="flex flex-row text-[1rem]">
        <GoDotFill className="text-[1rem] mt-[5px] mr-[5px]" />
        <p className="text-[100%] text-black font-BreeSerif">
        Join the gym, feel better.
        </p>
      </div>
      <div className="flex flex-row text-[1rem]">
        <GoDotFill className="text-[1rem] mt-[5px] mr-[5px]" />
        <p className="text-[100%] text-black font-BreeSerif">
        Strong body fosters strong mind.
        </p>
      </div>
      <div className="flex flex-row text-[1rem]">
        <GoDotFill className="text-[1rem] mt-[5px] mr-[5px]" />
        <p className="text-[100%] text-black font-BreeSerif">
        Daily workouts enhance mental clarity.
        </p>
      </div>
    </div>
  );
};

export default FooterLinks;
