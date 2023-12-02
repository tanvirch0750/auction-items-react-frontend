import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';

const useUserInfo = () => {
  const auth = useSelector((state) => state.auth);

  const user = jwtDecode(auth?.accessToken);

  if (auth?.accessToken && user?.userId) {
    return user;
  } else {
    return null;
  }
};

export default useUserInfo;
