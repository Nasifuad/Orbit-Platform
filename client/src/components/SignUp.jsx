import { RxCross1 } from "react-icons/rx";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { myContext } from "@/Context/ContextProvider";
// eslint-disable-next-line react/prop-types
const SignUp = ({ setToggle }) => {
  const { isLogged, setIsLogged, setUserInfo } = useContext(myContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [notMatch, setNotMatch] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();

    name.length < 6 ? setNameError(true) : setNameError(false);
    password.length < 6 ? setPasswordError(true) : setPasswordError(false);
    password !== confirmPass ? setNotMatch(true) : setNotMatch(false);

    if (nameError || passwordError || notMatch) {
      return;
    }

    const UserInfo = { username: name, useremail: email, password: password };
    postToServer(UserInfo);
    // const res = await postToServer(UserInfo);
    // res && navigate("/login");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  };
  const postToServer = async (UserInfo) => {
    console.log(UserInfo);
    try {
      const res = await fetch("http://localhost:5050/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(UserInfo),
      });
      const data = await res.json();
      console.log("User created successfully", data);
      setUserInfo(data.username);
      setIsLogged(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-black shadow-white shadow rounded-2xl  w-[400px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative z-50 p-10 flex flex-col gap-6 ">
      <RxCross1
        className="text-white text-2xl absolute top-3 right-3"
        onClick={() => setToggle(false)}
      />
      <h1 className="text-white text-3xl text-center">Create your account</h1>
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSignUp(e)}>
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="px-4 py-3 rounded-full bg-[#2c2f33] text-white"
          required
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        {nameError && (
          <li className="text-red-500 text-sm px-2">
            Name must be 3 characters or more
          </li>
        )}
        {passwordError && (
          <li className="text-red-500 text-sm px-2">
            Password must be 6 characters or more
          </li>
        )}
        {!passwordError && notMatch && (
          <li className="text-red-500 text-sm px-2">Passwords doesnot match</li>
        )}
        <Button variant="outline" type="submit" className="px-8">
          Sign Up
        </Button>
        <p className="text-white text-center">
          Already have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => setToggle(false)}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
