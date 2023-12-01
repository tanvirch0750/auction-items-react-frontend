import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/form/InputBox';
import { useSigninMutation } from '../redux/features/auth/authApi';

/* eslint-disable react/prop-types */
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [signin, { data, isLoading, error }] = useSigninMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      if ('data' in error) {
        if (error?.data?.message) {
          const message = error?.data?.message;
          setErrorMsg(message);
        } else {
          setErrorMsg('Something went wrong! Try again');
        }
      }
    }

    if (data?.success) {
      alert('Signin successfully');
      navigate('/products');
    }
  }, [data, error, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    setErrorMsg('');

    signin({ email, password });
  }

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
              <form onSubmit={handleSubmit}>
                <InputBox
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  handleChange={(e) => setPassword(e.target.value)}
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value={isLoading ? 'Signning in...' : 'Signin'}
                    className="w-full cursor-pointer  border border-primary bg-emerald-600 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90"
                  />
                </div>
                {errorMsg !== '' && (
                  <p className="mt-4 rounded-md bg-red-100 p-2 text-lg text-red-700">
                    {errorMsg}
                  </p>
                )}
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
