import React, { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import GoogleLogo from "../../../assets/CIPMS_WEB_GOOGLE.svg";
import { Mail } from "lucide-react";
import Logo from "../../../assets/Logo";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };
  return (
    <div className="flex justify-center items-center min-h-svh relative">
      <div className="absolute top-0 left-0">
        <Logo />
      </div>
      <div className="sm:basis-1/2 md:basis-4/12 flex justify-center items-center flex-col">
        <form className=" md:min-w-[80%]">
          <h3 className="text-center">Sign In</h3>
          <p className="text-center">
            Stay signed in to apply latest internships
          </p>
          <div className="space-y-3">
            <Input
              label="Email"
              icon={<Mail size={18} />}
              placeholder="Enter your email"
              value={auth.email}
              onChange={handleChange}
              name="email"
            ></Input>
            <Input
              label="Password"
              icon={<Mail size={18} />}
              type="password"
              placeholder="Enter your password"
              name="password"
              value={auth.password}
              onChange={handleChange}
            ></Input>
            <Button
              fullWidth={true}
              size="md"
              onClick={(e) => {
                e.preventDefault();
                console.log(auth);
                navigate("/internships");
              }}
            >
              Sign In
            </Button>
            <div className="text-right">
              <small className="underline text-primary-light">
                Forget Password?
              </small>
            </div>
            <p className="text-center">Or</p>
            <div className="border-border-light dark:border-border-dark cursor-pointer hover:bg-neutral-200 active:bg-neutral-400 border py-3 px-2 flex justify-center items-center rounded-lg">
              <span className="flex justify-center items-center gap-3">
                <img src={GoogleLogo} alt="Google logo" className="w-8 h-8" />
                Sign in with Google
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden sm:flex basis-9/12 bg-primary-light min-h-svh"></div>
    </div>
  );
};

export default Signin;
