import Image from "next/image";
import React from "react";

const ProfileComponent = () => {
  const iconWidth = 30;
  const iconHeight = 30;

  return (
    <div className="sm:h-fit h-full w-full sm:w-auto bg-[#ffffff]  p-4 rounded-lg flex flex-col justify-start items-center relative">
      {/* Image container */}
      <div className=" size-32 aspect-square bg-sky-300 overflow-hidden rounded-lg flex justify-center items-center sm:absolute -top-[16%] sm:left-1/2 transform sm:-translate-x-1/2">
        {/* You can replace this div with an img tag */}
        <Image
          src="/bg.png"
          alt="Profile Image"
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Profile details */}
      <div className="mt-14 text-center">
        <h2 className="font-bold text-lg">Monalisa Ashley</h2>
        <p className="text-sm text-gray-500">UI/UX Designer</p>
      </div>

      {/* Other info */}
      <div className="mt-4 w-[15rem] bg-gray-400 rounded-lg p-2 flex flex-col items-center justify-center">
        <p className="p-2 flex gap-3 items-center w-full border-b border-b-black">
          <Image
            src="/email.png"
            width={iconWidth}
            height={iconHeight}
            alt="email"
            className=" bg-gray-300 p-1 rounded-md"
          />
          <span className="flex flex-col">
            <span className="text-[0.8rem]">Email</span>
            <span> example@mail.com</span>
          </span>
        </p>
        <p className="p-2 flex gap-3 items-center w-full border-b border-b-black">
          <Image
            src="/location.png"
            width={iconWidth}
            height={iconHeight}
            alt="email"
            className=" bg-gray-300 p-1 rounded-md"
          />
          <span className="flex flex-col">
            <span className="text-[0.8rem]">Location</span>
            <span> Hong Kong, China</span>
          </span>
        </p>
        <p className="p-2 flex gap-3 items-center  w-full border-b border-b-black">
          <Image
            src="/phone.png"
            width={iconWidth}
            height={iconHeight}
            alt="email"
            className=" bg-gray-300 p-1 rounded-md"
          />
          <span className="flex flex-col">
            <span className="text-[0.8rem]">Phone</span>
            <span>+123 456 7890</span>
          </span>
        </p>
        <p className="p-2 w-full flex gap-3 items-center  ">
          <Image
            src="/date.png"
            width={iconWidth}
            height={iconHeight}
            alt="email"
            className=" bg-gray-300 p-1 rounded-md"
          />
          <span className="flex flex-col">
            <span className="text-[0.8rem]"> Birthday</span>
            <span> May 27, 1990</span>
          </span>
        </p>
      </div>

      {/* Download CV Button */}
      <button className="mt-4 bg-blue-500 text-white p-2 rounded-lg">
        Download CV
      </button>
    </div>
  );
};

export default ProfileComponent;
