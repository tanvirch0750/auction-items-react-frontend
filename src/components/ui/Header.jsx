import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../redux/api/apiSlice';
import { userLoggedOut } from '../../redux/features/auth/authSlice';

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    dispatch(api.util.resetApiState());
    navigate('/signin');
  };

  return (
    <div className="navbar bg-gray-900 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl uppercase">
          <span>Sport</span>
          <span className=" text-emerald-600">Bids</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {auth?.accessToken && (
            <>
              <li>
                <Link to="/create-product">Add Product</Link>
              </li>
              <li>
                <Link to="/my-products">My Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end mr-4 flex items-center gap-4">
        {!auth?.accessToken ? (
          <>
            {' '}
            <Link
              to="/signin"
              className="btn bg-emerald-600 px-8 hover:bg-emerald-500"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn bg-emerald-600 px-8 hover:bg-emerald-500"
            >
              Sign Up
            </Link>{' '}
          </>
        ) : (
          <button
            to="/signup"
            className="btn bg-emerald-600 px-8 hover:bg-emerald-500"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
