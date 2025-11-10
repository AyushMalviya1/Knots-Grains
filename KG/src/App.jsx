import { useState } from "react";
import hero from'./assets/hero.webp'
export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const openSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* ---------- Navbar ---------- */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063192.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-yellow-600">CarpentryHub</h1>
        </div>

        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#home" className="hover:text-yellow-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-600 transition">
            Contact
          </a>
        </nav>

        <div className="space-x-3">
          <button
            onClick={openLogin}
            className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-50 transition"
          >
            Login
          </button>
          <button
            onClick={openSignup}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* ---------- Hero Section ---------- */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-8 py-20"
      >
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-600">
            Expert Carpentry Services for Every Need
          </h2>
          <p className="text-gray-600 text-lg">
            Join our network of skilled carpenters. Create your profile, showcase
            your work, and connect with clients looking for professional woodwork
            services.
          </p>
          <button
            onClick={openSignup}
            className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg hover:bg-yellow-600 transition"
          >
            Get Started
          </button>
        </div>

        <img
          src={hero}
          alt="Carpenter at work"
          className="md:w-1/2 mt-10 md:mt-0 rounded-lg shadow-lg"
        />
      </section>

      {/* ---------- About Section ---------- */}
      <section id="about" className="px-8 py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold text-yellow-600 mb-6">About Us</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          CarpentryHub is a platform built for carpenters to grow their business
          online. Whether you craft furniture, handle home renovations, or create
          custom wooden pieces, our platform helps you showcase your skills and
          connect with customers directly.
        </p>
      </section>

      {/* ---------- Contact Section ---------- */}
      <section id="contact" className="px-8 py-20 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold text-yellow-600 mb-6">Contact Us</h3>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Have questions or need support? Reach out to us anytime — we’re here to
          help you grow your craft.
        </p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-yellow-600 text-white text-center py-4">
        © {new Date().getFullYear()} CarpentryHub. All rights reserved.
      </footer>

      {/* ---------- Modal Forms ---------- */}
      {(showLogin || showSignup) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {showLogin ? (
              <LoginForm switchToSignup={openSignup} />
            ) : (
              <SignupForm switchToLogin={openLogin} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Login Form Component ---------- */
function LoginForm({ switchToSignup }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6 text-yellow-600">
        Login to Your Account
      </h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account?{" "}
        <button
          onClick={switchToSignup}
          className="text-yellow-500 hover:underline font-medium"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

/* ---------- Signup Form Component ---------- */
function SignupForm({ switchToLogin }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6 text-yellow-600">
        Create Your Carpenter Profile
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-yellow-400 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <button
          onClick={switchToLogin}
          className="text-yellow-500 hover:underline font-medium"
        >
          Login
        </button>
      </p>
    </div>
  );
}
