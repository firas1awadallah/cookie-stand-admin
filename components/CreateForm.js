export default function CreateForm({CookieStandAdmin}) {
  return (
    <form
      className="flex flex-col w-full p-4 mx-auto bg-white rounded-lg shadow-md md:w-1/2"
      onSubmit={CookieStandAdmin}
    >
      <input
        name="location"
        placeholder="Location"
        
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        
      />
      <input
        name="minCustomers"
        type="number"
        placeholder="Min Customers per Hour"
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="maxCustomers"
        type="number"
        placeholder="Max Customers per Hour"
        
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        
      />
      <input
        name="averageCookies"
        type="number"
        placeholder="Average Cookies per Sale"
        className="p-3 m-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        
      />
      <button
        className="px-4 py-2 text-white bg-blue-400 rounded-lg"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}