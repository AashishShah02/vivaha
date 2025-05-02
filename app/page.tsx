import { Metadata } from "next";
import Link from 'next/link';

export const metadata : Metadata = {
  title:"Vivaha",
}

export default function Home() {
  return(
    <div>
      <div className="Navbar">
      <div className="Navbar__logo">
        <span>Vivaha </span>
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
      <div className="HeroSection">
        <div className="HeroSection__content">
          <h1>Expert Legal Guidance for Marriage & Family Law</h1>
          <p>
          Compassionate representation for divorce, prenuptial agreements, child custody, and all family law matters.
          </p>
          <div className="HeroSection__buttons">
            <button className="primary">Schedule Consultation</button>
      <      button className="secondary">Our Services</button>
          </div>
        </div>
          <img src="https://media.istockphoto.com/id/1413761479/photo/mature-couple-meeting-financial-advisor-for-investment.webp?a=1&b=1&s=612x612&w=0&k=20&c=a72IjW3zYOuSiJnyPOkqpIb6KwuffHw7-LgSo2x9xx0=" alt="Lawyer consulting" />
      </div>
      <section className="Services">
        <div>Our Services</div>
        <h2>Comprehensive Family Law Services</h2>
        <p>We provide expert legal guidance for all aspects of marriage and family law.</p>
      
        <div className="Services__cards"> 
          <div className="Marriage-Reg">
            <span>Marriage Registration</span>
            <p>Assistance with legal marriage registration, ensuring compliance with regulations and smooth documentation for official recognition.</p>
          </div>
          <div className="Divorce-Pro">
            <span>Divorce Proceedings</span>
            <p> Expert guidance through contested and uncontested divorce proceedings, ensuring fair settlements.</p>
          </div>
          <div className="Child-Cus">
            <span>Child Custody</span>
            <p>Compassionate representation focused on the best interests of your children in custody disputes.</p>
          </div>
        </div>
        <div className="View-all-services">
          <button >View All Services</button>
        </div>
        </section>
        <div className="contact">
          <div>
          <div>Contact Us</div>
          <h2>Schedule Your Free Consultation</h2>
          <p>We're here to help you navigate your legal challenges. Contact us today to discuss your case with our experienced attorneys.</p>
          </div>
        
        <section className="ContactUs">
          <div className="ContactUs__container">
            <h2>Get in Touch</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            <form className="ContactUs__form">
            <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" id="firstName" placeholder="First Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName" id="lastName" placeholder="Last Name" required />
                </div>
            </div>
                      Email<input
                      type="email"
                      name="email"
                      placeholder="Email"
                      pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                      required
                    />
                    Phone number<input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      pattern="[0-9]{10}"
                      required
                      title="Phone number must be 10 digits"
                    />
                    Service Needed<select name="service" required>
                      <option value="">Select Service Needed</option>
                      <option value="marriage">Marriage Registration</option>
                      <option value="divorce">Divorce Proceedings</option>
                      <option value="custody">Child Custody</option>
                      <option value="adoption">Adoption Assistance</option>
                      <option value="consultation">Legal Consultation</option>
                    </select>
                    Message<textarea
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      required
                    ></textarea>
                    <button type="submit">Submit</button>
            </form>
          </div>
        </section>
        </div>
    </div>
    
  )
}