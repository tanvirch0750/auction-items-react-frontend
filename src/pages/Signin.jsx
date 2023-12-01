import InputBox from '../components/form/InputBox';

/* eslint-disable react/prop-types */
const Signin = () => {
  return (
    <section className="py-20 h-[calc(100vh-84px)] flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-gray-900 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <span className="text-2xl text-emerald-600 font-bold uppercase">
                  Sign In
                </span>
              </div>
              <form>
                <InputBox type="email" name="email" placeholder="Email" />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer  border border-primary bg-emerald-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Not a member yet?</span>
                <a href="/#" className="text-emerald-600 hover:underline ml-2">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
