import { RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";
// eslint-disable-next-line react/prop-types
const SignUp = ({ setToggle }) => {
  return (
    <div className="w-full h-screen bg-black/20 fixed top-0 left-0 z-50">
      <div className="bg-black shadow-white shadow rounded-2xl  w-[400px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-50 p-10 flex flex-col gap-6 ">
        <RxCross1
          className="text-white text-2xl absolute top-3 right-3"
          onClick={() => setToggle(false)}
        />
        <h1 className="text-white text-3xl text-center">Create your account</h1>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
        />
        <div className="text-white flex flex-col justify-center items-center gap-2 p-3">
          <p className="text-center">Date of birth</p>
          <p className="text-center text-sm text-gray-300">
            This will not be shown publicly.
          </p>
          <input
            type="date"
            className="w-max px-4 py-3 rounded-full bg-[#2c2f33] text-center text-white"
          />
        </div>
        <Button variant="outline" className="w-max mx-auto px-8">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
