import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Employee Management System
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          View Employees
        </button>
      </div>
    </div>
  );
};

export default HomePage;