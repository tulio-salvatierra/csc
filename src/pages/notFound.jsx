import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#faf7f2] px-6">
      <div className="text-center">
        <p className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4">404</p>
        <h1 className="text-4xl md:text-5xl mb-4">Page not found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-3 no-underline"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
