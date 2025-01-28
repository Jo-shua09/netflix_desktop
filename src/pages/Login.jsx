const Login = () => {
  return (
    <div
      className="relative w-full h-screen"
      style={{ backgroundImage: `url(https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg)` }}
    >
      <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)` }}>
        <div className="flex items-center justify-between py-5 px-14">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="mr-6 h-14" />
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full m-auto text-center">
          <form className="w-[25%] h-auto gap-y-3 rounded-md bg-main flex flex-col justify-around p-[30px]">
            <h1 className="mb-5 text-5xl font-bold text-left">sign in</h1>
            <input
              type="email"
              placeholder="Email or Phone number"
              className="h-16 pl-2 mb-3 text-xl text-white placeholder-white normal-case bg-gray-500 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-16 pl-2 mb-3 text-xl text-white placeholder-white normal-case bg-gray-500 rounded-md"
            />
            <button className="h-16 text-2xl font-semibold capitalize bg-red-500 rounded-md cursor-pointer">sign in</button>
            <span className="mt-10 text-xl font-normal text-left text-gray-300 normal-case">
              New to Netflix? <b className="text-white normal-case cursor-pointer">Sign up now.</b>
            </span>
            <small className="text-lg font-normal text-left text-gray-300 normal-case">
              This page is protected by Google reCAPTCHA to ensuure you're not a bot.
              <b className="text-white normal-case cursor-pointer">Learn more.</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
