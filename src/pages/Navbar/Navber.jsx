import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";

const Navber = () => {
  const {user, logOut} = useContext(AuthContext)
  const navLinks = (
    <>
      <li>
        <Link to="/" className="text-gray-700 hover:text-gray-900">
          Home
        </Link>
      </li>
      <li>
        <Link to="/login" className="text-gray-700 hover:text-gray-900">
          Login
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
  }

  return (
    <div className="navbar bg-white shadow-lg">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Volunteer Management Website
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
       {user ?  <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
             <button onClick={handleLogOut}>Logout</button>
            </li>
          </ul>
        </div>
        :
        <Link to="/login">Login</Link>
      }
      </div>
    </div>
  );
};

export default Navber;
