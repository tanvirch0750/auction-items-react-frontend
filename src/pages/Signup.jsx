import InputBox from '../components/form/InputBox';

/* eslint-disable react/prop-types */
const Signup = () => {
  return (
    <section className="py-20 h-[calc(100vh-84px)] flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[725px] overflow-hidden rounded-lg bg-gray-900 px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <span className="text-2xl text-emerald-600 font-bold uppercase">
                  Sign Up
                </span>
              </div>
              <form>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                    />
                    <InputBox type="email" name="email" placeholder="Email" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <InputBox
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer  border border-primary bg-emerald-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>

              <p className="text-base text-body-color dark:text-dark-6">
                <span className="pr-0.5">Already have an account?</span>
                <a href="/#" className="text-emerald-600 hover:underline ml-2">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
