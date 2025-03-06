import { ItemList } from "./item-list";

export default function Page() {
  return (
    <main className="p-8 bg-blue-50 ">
      <h1 className="text-3xl font-bold text-center text-yellow-600 mb-6">Shopping List</h1>
      <div >
        <ItemList />
      </div>
    </main>
  );
}