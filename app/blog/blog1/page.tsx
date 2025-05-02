import Link from 'next/link';

export default function Page() {
  return (
    <div>
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 font-sans">
  {/* Logo */}
  <div className="text-2xl font-bold">Vivaha</div>

  {/* Navigation Links */}
  <nav className="flex space-x-10">
    <Link href="/" className="text-black font-medium hover:text-gray-600 transition-colors duration-200">
      Home
    </Link>
    <Link href="/" className="text-black font-medium hover:text-gray-600 transition-colors duration-200">
      Services
    </Link>
    <Link href="/" className="text-black font-medium hover:text-gray-600 transition-colors duration-200">
      About
    </Link>
    <Link href="/blog" className="text-black font-medium hover:text-gray-600 transition-colors duration-200">
      Blog
    </Link>
    <Link href="/testimonials" className="text-black font-medium hover:text-gray-600 transition-colors duration-200">
      Testimonial
    </Link>
    <Link href="/contact" className="text-black font-medium hover:text-gray-600 transition-colors duration-200">
      Contact
    </Link>
  </nav>

  {/* Consultation Button */}
  <Link href="/consultation">
    <button className="bg-zinc-900 text-white px-6 py-2 rounded-md font-medium hover:opacity-90 transition">
      Free Consultation
    </button>
  </Link>
</header>


      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Court Marriage in Nepal</h1>
        <p className="mb-4">
          Court Marriage in Nepal is a legally recognized procedure under the Chapter on Marriage of the National
          Civil (Code) Act, 2017 (2074). It allows male-female couples to get married through a legal process
          without the need for traditional ceremonies, provided they meet the eligibility criteria set by law.
          Nepali Citizens living abroad, as well as Foreign Citizens, can register a Marriage in Nepal.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. What are the Eligibility Criteria To apply for court marriage in Nepal?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Be at least 20 years old.</li>
          <li>Provide consent freely, without coercion.</li>
          <li>Be mentally sound.</li>
          <li>Not be closely related by blood (within prohibited degrees of kinship).</li>
          <li>Be unmarried (or legally divorced/widowed).</li>
          <li>Be legally eligible under Nepalese law (in case of foreigners, legal eligibility as per their home country is also required).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. What documents are required to conclude a Court Marriage?</h2>
        <h3 className="text-xl font-medium mb-1">For Nepali citizens:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Citizenship certificates of both parties.</li>
          <li>4 Passport-size photos of each party.</li>
          <li>Letter from the Ward Office stating that both are either unmarried or divorced.</li>
          <li>15 days Temporary Residence letter from Ward Office.</li>
          <li>Application Form of Marriage Registration.</li>
        </ul>
        <h3 className="text-xl font-medium mb-1">For foreign nationals:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Valid passport and visa.</li>
          <li>No-objection letter from respective Embassy in Nepal.</li>
          <li>Proof of legal stay in Nepal and 15 days Temporary Residence letter from Ward Office.</li>
          <li>Translated Notarized Copy of the Marriage Law of the Foreign Country in Nepali Language.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. What is the Procedure of Court Marriage?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>File an application at the District Court where either party resides.</li>
          <li>Appear before a bench of judges (or designated registrar) on the assigned date.</li>
          <li>Provide necessary documents and undergo interview/verification.</li>
          <li>If everything is in order, the court will register the marriage and issue a marriage certificate.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. In which court is the marriage concluded?</h2>
        <p className="mb-4">The Court Marriage shall be concluded in concerned District Court of Nepal.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. How many days does it take to conclude Court Marriage?</h2>
        <p className="mb-4">
          For Nepali Citizens, it takes around 2 days if all documents are prepared. Otherwise, it can take 4–5 days.
          For foreign citizens, the process may take 16 to 28 days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Is online Court Marriage possible?</h2>
        <p className="mb-4">
          No, there is no provision of Online Court Marriage in Nepal. Both parties must be present at the court.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. How much is the cost of concluding Court Marriage in Nepal?</h2>
        <p className="mb-4">
          The government fee is Nrs. 500 (3.67 US$). Legal fees vary depending on the service, urgency, and complexity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. What are the advantages of Court Marriage?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Legally valid and recognized in Nepal and abroad.</li>
          <li>Useful for visa, immigration, and legal documentation.</li>
          <li>Suitable for inter-caste, inter-religious, or international marriages.</li>
          <li>Simple and cost-effective compared to traditional ceremonies.</li>
        </ul>

        <p className="mt-6 font-semibold">Contact: +977 9860939932 for Legal Assistance</p>
      </main>
    </div>
  );
}
