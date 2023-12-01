import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../redux/features/auth/authSlice';

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    const localAuth = localStorage?.getItem('auth');

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken) {
        dispatch(
          userLoggedIn({
            accessToken: auth?.accessToken,
          })
        );
      }
    }
    setAuthCheck(true);
  }, [dispatch]);

  return authCheck;
};

export default useAuthCheck;
