import { useSelector } from 'react-redux';
import { decodedToken } from '../utils/jwt';

const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  const user = decodedToken(auth?.accessToken);
  console.log(user);

  if (auth?.accessToken && auth?.userId) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
