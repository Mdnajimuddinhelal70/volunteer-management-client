import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate("/");
    });
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="card w-full max-w-xl bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="p-8 lg:p-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
          <h2 className="text-xl font-bold text-center mb-6 text-gray-800">
            Welcome Back !
          </h2>
          <Helmet>
            <title>Volunteer || Login</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-200"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition duration-200"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-outline w-full transition duration-200"
                type="submit"
                value="Login"
              />
            </div>
            <div>
              <button
                className="btn btn-outline w-full"
                onClick={handleGoogleLogin}
              >
                Google
                <FaGoogle />
              </button>
            </div>
            <p className="text-center mt-4 text-2xl text-gray-700">
              <small>
                New here?
                <Link to="/register" className="text-blue-800 font-bold">
                  Register
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
