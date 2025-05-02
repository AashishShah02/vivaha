import Link from 'next/link';

export default function Home() {
    return (
      <div>
        {/* Navbar */}
        <div className="Navbar">
          <div className="Navbar__logo">
            <span>Vivaha</span>
          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/">Services</Link>
            <Link href="/">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog">Testimonial</Link>
            <Link href="/blog">Contact</Link>
          </nav>
            <Link href="">
            <button>Free Consultation</button>
            </Link>
        </div>
  
        {/* Blog Section Header */}
        <div className="Blog">
          <div className="blog-label">Our Blog</div>
          <h2>Latest Legal Insights</h2>
          <p>Stay informed with our latest articles on family law topics.</p>
        </div>
  
        {/* Blog Cards */}
        <div className="b1">
          <div>
            <img
              src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
              alt="court marriage in nepal"
            />
            <h3>COURT MARRIAGE IN NEPAL</h3>
            <p>A comprehensive guide to how child support is calculated and what factors courts consider.</p>
            <span className="Date">May 1, 2023</span>
          </div>
  
          <div>
            <img
              src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
              alt="court marriage in nepal"
            />
            <h3>COURT MARRIAGE IN NEPAL</h3>
            <p>A comprehensive guide to how child support is calculated and what factors courts consider.</p>
            <span className="Date">May 1, 2023</span>
          </div>
  
          <div>
            <img
              src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
              alt="court marriage in nepal"
            />
            <h3>COURT MARRIAGE IN NEPAL</h3>
            <p>A comprehensive guide to how child support is calculated and what factors courts consider.</p>
            <span className="Date">May 1, 2023</span>
          </div>
        
          <div>
            <img
              src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
              alt="court marriage in nepal"
            />
            <h3>COURT MARRIAGE IN NEPAL</h3>
            <p>A comprehensive guide to how child support is calculated and what factors courts consider.</p>
            <span className="Date">May 1, 2023</span>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
              alt="court marriage in nepal"
            />
            <h3>COURT MARRIAGE IN NEPAL</h3>
            <p>A comprehensive guide to how child support is calculated and what factors courts consider.</p>
            <span className="Date">May 1, 2023</span>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1652943055585-0b932b58b7ea?fm=jpg&q=60&w=3000"
              alt="court marriage in nepal"
            />
            <h3>COURT MARRIAGE IN NEPAL</h3>
            <p>A comprehensive guide to how child support is calculated and what factors courts consider.</p>
            <span className="Date">May 1, 2023</span>
          </div>
          
        </div>
  
        {/* View All Articles */}
        <div className="view-all">
          <button>View All Articles</button>
        </div>
      </div>
    );
  }
  