import { RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// eslint-disable-next-line react/prop-types
const Login = ({ setToggle }) => {
  return (
    <div className="w-full h-screen bg-black/20 fixed top-0 left-0 z-50">
      <div className="bg-black shadow-gray-800 shadow rounded-2xl  w-[400px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-50 p-10 flex flex-col gap-6 ">
        <RxCross1
          className="text-white text-2xl absolute top-3 right-3"
          onClick={() => setToggle(false)}
        />
        <h1 className="text-white text-4xl text-center font-bold">Login</h1>
        <input
          type="text"
          placeholder="Name or Email"
          className="px-4 py-3 rounded-lg bg-[#2c2f33] text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-xl bg-[#2c2f33] text-white"
        />
        <div>
          <div className="items-top flex space-x-2 text-white px-2">
            <Checkbox id="terms1" className="border-white" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
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
