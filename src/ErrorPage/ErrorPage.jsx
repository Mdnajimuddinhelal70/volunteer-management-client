import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" flex-1 text-center items-center justify-center">
        <h1 className="text-4xl text-center">404</h1>
        <h1 className="text-red-500 text-center text-5xl p-7">
          Page is not found!
        </h1>
        <button className=" content-center btn btn-outline">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    );
};

export default ErrorPage;