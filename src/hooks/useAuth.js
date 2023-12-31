import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  let user;

  if (auth?.accessToken) {
    user = jwtDecode(auth?.accessToken);
  }

  if (auth?.accessToken && user?.userId) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
