import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <div className="Navbar flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="Navbar__logo text-xl font-bold">
          <span>Vivaha</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/">Services</Link>
          <Link href="/">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/blog">Testimonial</Link>
          <Link href="/blog">Contact</Link>
        </nav>
        <Link href="">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Free Consultation
          </button>
        </Link>
      </div>

      {/* Blog Section Header */}
      <div className="Blog text-center py-12">
        <div className="blog-label uppercase text-sm text-blue-600 font-semibold mb-2">Our Blog</div>
        <h2 className="text-3xl font-bold mb-2">Latest Legal Insights</h2>
        <p className="text-gray-600">Stay informed with our latest articles on family law topics.</p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {[...Array(6)].map((_, i) => (
          <Link href="/blog/blog1" key={i}>
            <div className="b1 bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
                alt="court marriage in nepal"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">COURT MARRIAGE IN NEPAL</h3>
                <p className="text-sm text-gray-600 mb-2">
                  A comprehensive guide to how child support is calculated and what factors courts consider.
                </p>
                <span className="text-xs text-gray-500">May 1, 2023</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Articles */}
      <div className="view-all text-center mt-12 mb-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          View All Articles
        </button>
      </div>
    </div>
  );
}
