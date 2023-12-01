import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputBox from '../components/form/InputBox';
import { useSignupMutation } from '../redux/features/auth/authApi';

/* eslint-disable react/prop-types */
const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [signup, { data, isLoading, error }] = useSignupMutation();

  console.log(data);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setErrorMsg('Email already exists');
    } else {
      setErrorMsg('');
    }

    if (data?.success) {
      alert('Signup successfull');
      navigate('/signin');
    }
  }, [data, error, navigate]);

  // TEMP
  const contactNumber = '+880';
  const gender = 'male';
  const imageUrl = 'tba';

  function handleSubmit(e) {
    e.preventDefault();

    setErrorMsg('');

    signup({
      fullName,
      email,
      password,
      contactNumber,
      gender,
      imageUrl,
      address,
    });
  }

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
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={fullName}
                      handleChange={(e) => setFullName(e.target.value)}
                    />
                    <InputBox
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      handleChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputBox
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      handleChange={(e) => setPassword(e.target.value)}
                    />
                    <InputBox
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={address}
                      handleChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value={isLoading ? 'Signing up...' : 'Signup'}
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
