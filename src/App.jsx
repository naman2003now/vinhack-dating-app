import "./App.css";
import Profile from "./pages/Profile";
import { createUser } from "./faker";
import { useState } from "react";

function App() {
  const [right, setRight] = useState(false);
  const [ok, setOk] = useState(true);
  return (
    <div className="App h-screen w-screen">
      {ok ? (
        <div
          className="z-100 bg-white text-black h-screen w-full flex justify-center items-center"
          onClick={() => {
            setOk(false);
          }}
        >
          This is a dating app where you have to pick between two choice. It
          will implement the chess ELO system and some AI to understand your
          choice and suggest you the type of people you like so the both the
          partner can have as similar taste as they can. You can find your
          partner on the bases of music, location, taste of movies and more
        </div>
      ) : (
        <></>
      )}
      {!right && !ok ? (
        <>
          <Profile user={createUser()} />
          <div
            className="z-50 absolute top-[30%] right-5 bg-white h-20 w-20 flex justify-center items-center rounded-full text-black"
            onClick={() => {
              setRight(true);
            }}
          >
            right
          </div>
        </>
      ) : (
        <></>
      )}
      {right && !ok ? (
        <>
          <Profile user={createUser()} />
          <div
            className="z-50 absolute top-[30%] left-5 bg-white h-20 w-20 flex justify-center items-center rounded-full text-black"
            onClick={() => {
              setRight(false);
            }}
          >
            left
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
