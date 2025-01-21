const Login = () => {
  return (
    <div
      className="h-screen w-full relative"
      style={{ backgroundImage: `url(https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg)` }}
    >
      <div className="w-full h-full" style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)` }}>
        <div className="flex items-center py-5 px-14 justify-between">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="h-14 mr-6" />
        </div>
        <div className="w-full h-full m-auto text-center top-0 left-0 absolute flex items-center justify-center flex-col">
          <form className="w-[25%] h-auto gap-y-3 rounded-md bg-main flex flex-col justify-around p-[30px]">
            <h1 className="font-bold text-5xl mb-5 text-left">sign in</h1>
            <input
              type="email"
              placeholder="Email or Phone number"
              className="h-16 normal-case rounded-md bg-gray-500 mb-3 text-white pl-2 placeholder-white text-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-16 normal-case mb-3 rounded-md bg-gray-500 text-xl text-white pl-2 placeholder-white"
            />
            <button className="h-16 rounded-md bg-red-500 text-2xl cursor-pointer font-semibold capitalize">sign in</button>
            <span className="text-gray-300 text-left text-xl normal-case mt-10 font-normal">
              New to Netflix? <b className="text-white normal-case">Sign up now.</b>
            </span>
            <small className="text-lg text-left text-gray-300 normal-case font-normal">
              This page is protected by Google reCAPTCHA to ensuure you're not a bot. <b className="text-white normal-case">Learn more.</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
