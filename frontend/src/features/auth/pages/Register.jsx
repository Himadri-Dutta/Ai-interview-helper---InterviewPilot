import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  };

  if (loading) {
    return (
      <main className="flex min-h-screen w-full items-center justify-center bg-[#0d1117] text-[#e6edf3]">
        <h1 className="text-xl font-semibold">Loading...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex justify-center items-center bg-primary">
      <div className="min-w-87.5 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Register</h1>

        {/* <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>

          <button className="button primary-button">Register</button>
        </form> */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <input
              className="border-none outline-none px-4 py-3 rounded-xl text-gray-900"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              className="border-none outline-none px-4 py-3 rounded-xl text-gray-900"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              className="border-none outline-none px-4 py-3 rounded-xl text-gray-900"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button className="border-none outline-none px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 ease-in-out active:scale-90 bg-[#e1034d] text-white">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
