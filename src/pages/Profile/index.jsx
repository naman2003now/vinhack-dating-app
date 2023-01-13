import Header from "./Header";

export default function Profile({ user }) {
  return (
    <div className="relative h-screen w-full max-w-xl flex flex-col justify-evenly items-center bg-white ">
      <Header />
      <div className="z-10 h-screen overflow-scroll">
        <div className="mt-[125%] w-full rounded-xl bg-white flex justify-center">
          <div className="w-[80%]">
            <h1 className="w-full h-24 text-secondary flex justify-start items-end text-4xl font-extrabold">
              {user.name}
            </h1>
            <p className="text-secondary flex justify-start items-start ">
              {user.location}
            </p>
            <h4 className="w-full h-16 text-secondary flex justify-start items-end text-lg font-extralight opacity-25">
              About
            </h4>
            <p className="text-left text-secondary flex justify-start items-start ">
              {user.bio}
            </p>
            <h4 className="w-full h-16 text-secondary flex justify-start items-end text-lg font-extralight opacity-25">
              About
            </h4>
            <p className="text-left text-secondary flex justify-start items-start ">
              {user.bio}
            </p>
            <h4 className="w-full h-16 text-secondary flex justify-start items-end text-lg font-extralight opacity-25">
              About
            </h4>
            <p className="text-left text-secondary flex justify-start items-start ">
              {user.bio}
            </p>
            <h4 className="w-full h-16 text-secondary flex justify-start items-end text-lg font-extralight opacity-25">
              About
            </h4>
            <p className="text-left text-secondary flex justify-start items-start ">
              {user.bio}
            </p>
            <h4 className="w-full h-16 text-secondary flex justify-start items-end text-lg font-extralight opacity-25">
              About
            </h4>
            <p className="text-left text-secondary flex justify-start items-start ">
              {user.bio}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 overflow-hidden h-[90%] w-full flex justify-center rounded-lg shadow-2xl">
        <img src={user.image} className="w-full" />
      </div>
    </div>
  );
}
