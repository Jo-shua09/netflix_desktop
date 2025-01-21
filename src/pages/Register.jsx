import { useRef, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div
      className="h-screen w-full relative"
      style={{ backgroundImage: `url(https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg)` }}
    >
      <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)` }}>
        <div className="flex items-center py-5 px-14 justify-between">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="h-14 mr-6" />
          <button className="text-white bg-red-600 text-2xl cursor-pointer font-medium rounded-sm capitalize py-3 px-5">sign in</button>
        </div>
        <div className="w-full h-full m-auto text-center top-0 left-0 absolute flex items-center justify-center flex-col">
          <h1 className="text-7xl normal-case font-bold">Unlimited movies, TV shows, and more.</h1>
          <h2 className="my-5 text-3xl normal-case font-semibold">Watch anywhere, Cancel anytime.</h2>
          <p className="normal-case text-3xl font-normal">Ready to watch? Enter your email to create or restart your membership. </p>

          <div className="w-11/12 sm:w-1/2 mt-5">
            {!email ? (
              <div className="flex items-center justify-between rounded-sm bg-white h-20">
                <input type="email" placeholder="Email address" ref={emailRef} className="w-full h-full pl-3 text-main text-xl normal-case" />
                <button onClick={handleStart} className="w-1/3 h-full bg-red-600 text-white cursor-pointer text-2xl capitalize">
                  get started
                </button>
              </div>
            ) : (
              <form className="flex items-center justify-between rounded-sm bg-white h-20">
                <input type="password" placeholder="Password" ref={passwordRef} className="w-full h-full pl-3 text-main text-xl normal-case" />
                <button onClick={handleFinish} className="w-1/3 h-full bg-red-600 text-white cursor-pointer text-2xl capitalize">
                  start membership
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
