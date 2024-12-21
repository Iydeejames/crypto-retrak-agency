import { useState, useEffect } from 'react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([
    { title: 'How to Recover Lost Crypto Wallets', link: '#', date: '2024-12-15' },
    { title: 'Top Crypto Trends in 2024', link: '#', date: '2024-12-10' },
    { title: 'Protecting Your Assets in the Crypto World', link: '#', date: '2024-12-08' },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle search functionality
  const handleSearch = () => {
    if (searchQuery === '') {
      setSearchResults([]);
    } else {
      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredPosts);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">

      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Crypto Tracking & Recovery Blog</h1>

      {/* Subtext */}
      <p className="text-gray-600 text-center max-w-4xl mb-8">
        Stay updated with the latest insights and tips on tracking and recovering cryptocurrency assets. Explore our articles, guides, and news to help you navigate the crypto world with confidence.
      </p>

      {/* Search Section */}
      <div className="w-full max-w-lg flex items-center mb-8 justify-center space-x-4">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-gray-800 text-white font-medium rounded-r-md hover:bg-gray-600 transition"
        >
          Search
        </button>
      </div>

      {/* Search Results Section */}
      {searchResults.length > 0 ? (
        <div className="w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search Results</h2>
          <ul className="space-y-4">
            {searchResults.map((post, index) => (
              <li key={index} className="flex items-center space-x-2">
                <a href={post.link} className="text-blue-600 hover:underline text-md">{post.title}</a>
                <span className="text-gray-500 text-sm">({post.date})</span>
              </li>
            ))}
          </ul>
        </div>
      ) : searchQuery && (
        <p className="text-gray-500 text-center">No results found for "{searchQuery}"</p>
      )}

      {/* Blog Content Section */}
      <div className="w-full max-w-6xl mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left Column - Recent Posts */}
        <div className="col-span-1 md:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Posts</h2>
          <ul className="space-y-6">
            {posts.map((post, index) => (
              <li key={index} className="border-b pb-4">
                <a href={post.link} className="text-xl text-blue-600 hover:underline">{post.title}</a>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Categories & Popular Articles */}
        <div className="col-span-1 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-600 hover:underline">Crypto Recovery</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Security Tips</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Tracking Crypto</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Blockchain News</a></li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Popular Articles</h2>
          <ul className="space-y-4">
            <li><a href="#" className="text-blue-600 hover:underline">Understanding Cryptocurrency Wallets and Their Importance</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">How to Keep Your Cryptocurrency Safe from Hackers</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">What to Do If You Lose Your Crypto Wallet Key</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">The Future of Blockchain Technology</a></li>
          </ul>
        </div>

      </div>

      {/* Crypto News Section */}
      <div className="w-full max-w-6xl mt-16 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest Crypto News</h2>
        <ul className="space-y-4">
          <li className="text-gray-600">
            <span className="font-semibold">Dec 21, 2024:</span> New developments in crypto tracking technology.
          </li>
          <li className="text-gray-600">
            <span className="font-semibold">Dec 19, 2024:</span> How crypto recovery services are evolving.
          </li>
          <li className="text-gray-600">
            <span className="font-semibold">Dec 18, 2024:</span> Global cryptocurrency market update.
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Blog;
