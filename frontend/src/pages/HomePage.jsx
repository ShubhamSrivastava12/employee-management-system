import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl bottom-10 right-10"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 text-center">

        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center text-5xl">
          👨‍💼
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-white">
          Employee Management
        </h1>

        <p className="text-gray-200 mt-4 text-lg leading-8">
          Manage employees effortlessly with a fast, secure and modern
          dashboard. Add, update and organize employee records in one place.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-10 bg-white text-blue-700 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
        >
          View Employees →
        </button>

        {/* Bottom Cards */}
        <div className="grid grid-cols-3 gap-5 mt-12">

          <div className="bg-white/10 rounded-2xl py-5 hover:bg-white/20 transition">
            <h2 className="text-3xl">👥</h2>
            <p className="text-white font-semibold mt-2">Employees</p>
          </div>

          <div className="bg-white/10 rounded-2xl py-5 hover:bg-white/20 transition">
            <h2 className="text-3xl">⚡</h2>
            <p className="text-white font-semibold mt-2">Fast Access</p>
          </div>

          <div className="bg-white/10 rounded-2xl py-5 hover:bg-white/20 transition">
            <h2 className="text-3xl">🔒</h2>
            <p className="text-white font-semibold mt-2">Secure</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;