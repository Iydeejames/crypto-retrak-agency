
const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Nothing Found</h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center max-w-lg mb-6">
        It seems we can’t find what you’re looking for. Perhaps searching can help.
      </p>

      {/* Search Section */}
      <div className="w-full max-w-md flex items-center mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition">
          Search
        </button>
      </div>

      {/* Sidebar */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
        {/* Categories Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
          <ul>
            <li className="text-gray-500 italic">No categories</li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
          <ul>
            <li className="text-gray-500 italic">No recent posts</li>
          </ul>
        </div>
      </div>

      {/* Additional Search Boxes (for uniqueness) */}
      <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Search Box */}
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Right Search Box */}
        <div className="flex items-center bg-gray-100 p-4 rounded-lg shadow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 transition">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
