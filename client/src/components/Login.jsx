import { RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";
// eslint-disable-next-line react/prop-types
const Login = ({ setToggle }) => {
  return (
    <div className="w-full h-screen bg-black/20 fixed top-0 left-0 z-50">
      <div className="bg-black shadow-white shadow-2xl rounded-2xl  w-[400px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-50 p-10 flex flex-col gap-4 ">
        <RxCross1
          className="text-white text-2xl absolute top-3 right-3"
          onClick={() => setToggle(false)}
        />
        <h1 className="text-white text-2xl text-center">Create your account</h1>
        <input
          type="text"
          placeholder="Name or Email"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
        />
        <div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-white text-2xl">Keep me signed in</p>
          </div>
        </div>
        <Button variant="outline" className="w-max mx-auto px-8">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
