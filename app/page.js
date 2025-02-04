import Link from "next/link";


export default function Page() {
  return (
    <div className="p-8 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 min-h-screen text-white text-center">
      <h2 className="text-3xl font-extrabold mb-6">CPRG 306: Web Development 2 - Assignments</h2>
      <div className="space-y-4">
        <Link href="week-2" className="block p-3 bg-yellow-400 text-pink-900 font-bold rounded-lg shadow-md hover:scale-105 transition-transform">Week-2</Link>
        <Link href="week-3" className="block p-3 bg-yellow-400 text-pink-900 font-bold rounded-lg shadow-md hover:scale-105 transition-transform">Week-3</Link>
        <Link href="week-4" className="block p-3 bg-yellow-400 text-pink-900 font-bold rounded-lg shadow-md hover:scale-105 transition-transform">Week-4</Link>
      </div>
    </div>
  );
}