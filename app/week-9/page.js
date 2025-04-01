"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handle login with GitHub
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Shopping List App</h1>

      {/* Check if user is logged in */}
      {user ? (
        <div className="text-center">
          <p className="text-lg mb-4">
            Welcome, <span className="font-semibold">{user.displayName}</span> (
            {user.email})
          </p>
          <Link
            href="/week-9/shopping-list"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
          >
            Go to Shopping List
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-6 py-2 rounded-lg"
        >
          Login with GitHub
        </button>
      )}
    </div>
  );
}
