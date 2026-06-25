import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bursaries = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCounty, setFilterCounty] = useState("all");
  const [filterLevel, setFilterLevel] = useState("all");

  const bursaries = [
    {
      id: 1,
      title: "Wajir County Bursary",
      county: "Wajir",
      provider: "Wajir County Government",
      level: "all",
      amount: "Ksh 15,000 - 40,000",
      deadline: "2026-04-30",
      description: "Financial assistance for needy students from Wajir County pursuing secondary, college, or university education.",
      requirements: ["Wajir County resident", "Admitted to recognized institution", "Financial need", "Priority to vulnerable families"],
      status: "open",
      image: "🏜️",
      contacts: "Wajir County Education Office",
      formLink: "/forms/wajir_bursary_form.pdf"
    },
    {
      id: 2,
      title: "Wajir South Bursary",
      county: "Wajir South",
      provider: "Wajir South Sub-County Government",
      level: "all",
      amount: "Ksh 10,000 - 35,000",
      deadline: "2026-05-05",
      description: "Special bursary program for students from Wajir South Sub-County to support educational advancement at all levels.",
      requirements: ["Wajir South resident", "Student in recognized institution", "Vulnerable background", "Community recommendation"],
      status: "open",
      image: "🏜️",
      contacts: "Wajir South Education Office",
      formLink: "/forms/wajir_south_bursary_form.pdf"
    },
    {
      id: 3,
      title: "Garissa Township Bursary",
      county: "Garissa Township",
      provider: "Garissa Township Sub-County Government",
      level: "all",
      amount: "Ksh 12,000 - 35,000",
      deadline: "2026-05-10",
      description: "Bursary for students from Garissa Township supporting all levels of education from secondary to university.",
      requirements: ["Garissa Township resident", "Admission letter", "Financial need", "Academic progress"],
      status: "open",
      image: "🏙️",
      contacts: "Garissa Township Education Department",
      formLink: "/forms/garissa_township_bursary_form.pdf"
    },
    {
      id: 4,
      title: "Garissa County Bursary",
      county: "Garissa",
      provider: "Garissa County Government",
      level: "all",
      amount: "Ksh 15,000 - 35,000",
      deadline: "2026-05-15",
      description: "County-wide bursary program for students from Garissa County at all educational levels.",
      requirements: ["Garissa County resident", "Student in recognized institution", "Vulnerable background", "Means testing"],
      status: "open",
      image: "🏜️",
      contacts: "Garissa County Education Office",
      formLink: "/forms/garissa_county_bursary_form.pdf"
    },
    {
      id: 5,
      title: "Constituency (NG-CDF) Bursary",
      county: "All Constituencies",
      provider: "National Government Constituencies Development Fund (NG-CDF)",
      level: "all",
      amount: "Ksh 5,000 - 30,000 per year",
      deadline: "2026-06-15",
      description: "Constituency-based bursary for needy students from all 290 constituencies across Kenya at all education levels.",
      requirements: ["Constituency resident", "Admitted to secondary school, TVET, or university", "Financial need", "Application through local NG-CDF office"],
      status: "open",
      image: "🏛️",
      contacts: "Your local NG-CDF office",
      formLink: "/forms/ngcdf_bursary_form.pdf"
    }
  ];

  const counties = ["all", "Wajir", "Wajir South", "Garissa Township", "Garissa", "All Constituencies"];

  const filteredBursaries = bursaries.filter(bursary => {
    const matchesSearch = bursary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          bursary.county.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          bursary.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCounty = filterCounty === "all" || bursary.county === filterCounty;
    const matchesLevel = filterLevel === "all" || bursary.level === filterLevel;
    return matchesSearch && matchesCounty && matchesLevel;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case "open":
        return <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">Open</span>;
      case "closing":
        return <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs font-semibold">Closing Soon</span>;
      case "upcoming":
        return <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold">Upcoming</span>;
      default:
        return <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-semibold">Closed</span>;
    }
  };

  const handleDownloadForm = (bursaryTitle, county) => {
    const formContent = `OFFICIAL BURSARY APPLICATION FORM
================================
${bursaryTitle}
${county === "All Constituencies" ? "NG-CDF" : `County: ${county}`}
Government of Kenya

SECTION A: PERSONAL INFORMATION
--------------------------------
Full Name: ___________________________
Date of Birth: ________________________
Gender: M / F
National ID Number: ___________________
Phone Number: ________________________
Email Address: ________________________
Postal Address: _______________________

SECTION B: RESIDENCY INFORMATION
--------------------------------
County: ______________________________
Constituency: _________________________
Ward: _______________________________
Location: ____________________________
Sub-Location: ________________________
Village: _____________________________

SECTION C: EDUCATION INFORMATION
--------------------------------
Current Institution: ___________________
Admission Number: ____________________
Course/Class: ________________________
Year of Study: ________________________
Education Level: (Secondary/TVET/University)
Fee Balance (Ksh): ____________________

SECTION D: FAMILY BACKGROUND
--------------------------------
Parent/Guardian Name: _________________
Parent/Guardian ID: ___________________
Parent/Guardian Phone: ________________
Parent/Guardian Occupation: ____________
Total Family Monthly Income: Ksh ______
Number of Siblings in School: __________

SECTION E: DECLARATION
--------------------------------
I declare that the information provided is true and correct.
Signature: _________________________
Date: _____________________________

SECTION F: OFFICIAL USE ONLY
--------------------------------
Sub-County Officer: ___________________
Recommendation: Approved / Rejected
Reason: _____________________________
Chief Officer Signature: _______________
Date: _______________________________

FOR MORE INFORMATION, CONTACT YOUR LOCAL EDUCATION OFFICE
Submit this form to your local Ward Administrator or NG-CDF Office

Generated by EduFund Kenya - Scholarship & Bursary Finder
Download Date: ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([formContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${county.toLowerCase().replace(/\s/g, '_')}_bursary_form_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert(`Application form for ${bursaryTitle} has been downloaded successfully!\n\nPlease fill it out and submit to your local office.`);
  };

  const handleApply = (title) => {
    alert(`You are about to apply for "${title}".\n\nPlease ensure you have:\n✓ Downloaded the application form\n✓ Filled all required sections\n✓ Attached all required documents\n✓ Submitted to the relevant office`);
  };

  const handleDownloadGuide = () => {
    const guideContent = `KENYA COUNTY BURSARIES & NG-CDF APPLICATION GUIDE
========================================

HOW TO APPLY FOR BURSARIES:

1. ELIGIBILITY REQUIREMENTS:
   - Must be a resident of the specific county/constituency
   - Must be admitted to a recognized educational institution
   - Must demonstrate financial need
   - Open to ALL educational levels (Primary, Secondary, TVET, University, Postgraduate)

2. REQUIRED DOCUMENTS:
   - National ID or Birth Certificate
   - County/Constituency residency proof
   - Institution admission letter
   - KCSE/KCPE certificate (if applicable)
   - Parent/Guardian ID copies
   - Death certificate (if orphaned)
   - Bank statements (for means testing)
   - School fees structure

3. APPLICATION PROCESS:
   - Download the application form
   - Fill all sections accurately
   - Attach all required documents
   - Submit to ward administrator or NG-CDF office
   - Wait for approval notification

4. IMPORTANT DEADLINES:
   - County bursaries: Vary by county
   - NG-CDF bursaries: Usually January-March and July-September

5. EDUCATIONAL LEVELS COVERED:
   - Primary School
   - Secondary School
   - TVET/College
   - University (Undergraduate & Postgraduate)
   - Special Needs Education

6. CONTACTS:
   - Wajir County: Wajir County Education Office
   - Wajir South: Wajir South Sub-County Office
   - Garissa Township: Garissa Township Education Department
   - Garissa County: Garissa County Education Office
   - NG-CDF: Your local constituency office

For more information, visit your county government website or local NG-CDF office.

Generated by EduFund Kenya - Scholarship & Bursary Finder
Date: ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([guideContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bursary_guide_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert("Application guide downloaded successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">County Bursaries & NG-CDF</h1>
          <p className="text-xl mb-8">Financial assistance from counties and constituencies for students at ALL educational levels</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={handleDownloadGuide}
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              📥 Download Application Guide
            </button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by bursary name or county..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select County/Constituency</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={filterCounty}
                onChange={(e) => setFilterCounty(e.target.value)}
              >
                {counties.map(county => (
                  <option key={county} value={county}>
                    {county === "all" ? "All Locations" : county}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
              >
                <option value="all">All Levels (Primary - Postgraduate)</option>
                <option value="primary">Primary School</option>
                <option value="secondary">Secondary School</option>
                <option value="tvet">TVET/College</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Available Bursaries ({filteredBursaries.length})
          </h2>
          <p className="text-gray-600">Showing opportunities from {filterCounty === "all" ? "all locations" : filterCounty}</p>
        </div>

        {filteredBursaries.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No bursaries found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBursaries.map((bursary) => (
              <div key={bursary.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-4xl">{bursary.image}</div>
                    <div className="flex gap-2">
                      {getStatusBadge(bursary.status)}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{bursary.title}</h3>
                  <p className="text-green-600 text-sm mb-2">{bursary.provider}</p>
                  <p className="text-gray-600 text-sm mb-3">{bursary.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-600">💰 <span className="font-semibold">Amount:</span> {bursary.amount}</p>
                    <p className="text-sm text-gray-600">📅 <span className="font-semibold">Deadline:</span> {new Date(bursary.deadline).toLocaleDateString()}</p>
                    <p className="text-sm text-gray-600">📍 <span className="font-semibold">Location:</span> {bursary.county}</p>
                    <p className="text-sm text-gray-600">🎓 <span className="font-semibold">Level:</span> All Educational Levels</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleDownloadForm(bursary.title, bursary.county)}
                      className="flex-1 bg-blue-600 text-white text-center px-3 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                    >
                      📥 Download Form
                    </button>
                    <button 
                      onClick={() => handleApply(bursary.title)}
                      className="flex-1 bg-green-600 text-white text-center px-3 py-2 rounded-lg hover:bg-green-700 transition text-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* How to Apply Section */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">How to Apply for Bursaries</h2>
          <p className="text-center text-gray-600 mb-8">Follow these steps to secure your bursary</p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Download Form</h3>
              <p className="text-gray-600 text-sm">Download the application form</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Fill Form</h3>
              <p className="text-gray-600 text-sm">Complete all sections accurately</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Attach Documents</h3>
              <p className="text-gray-600 text-sm">Attach all required documents</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold mb-2">Submit</h3>
              <p className="text-gray-600 text-sm">Submit to local office</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Important Information</h2>
        <p className="text-center text-gray-600 mb-8">What you need to know before applying</p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-bold mb-2">Required Documents</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• National ID/Birth Certificate</li>
              <li>• County residency proof</li>
              <li>• Admission letter</li>
              <li>• KCSE/KCPE certificate</li>
              <li>• Parent/Guardian ID</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-bold mb-2">Important Dates</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• County bursaries: Vary by county</li>
              <li>• NG-CDF: Jan-March & July-Sept</li>
              <li>• Disbursement: Within 2-3 months</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <div className="text-2xl mb-2">💰</div>
            <h3 className="font-bold mb-2">Bursary Amounts</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Primary: Ksh 3,000 - 8,000</li>
              <li>• Secondary: Ksh 5,000 - 10,000</li>
              <li>• College/TVET: Ksh 10,000 - 20,000</li>
              <li>• University: Ksh 15,000 - 40,000</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Educational Levels Covered Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Educational Levels Covered</h2>
          <p className="text-center text-gray-600 mb-8">All bursaries are open to students at any level of education</p>
          
          <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold text-sm">Primary School</h3>
              <p className="text-xs text-gray-500">Class 1-8</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🏫</div>
              <h3 className="font-bold text-sm">Secondary School</h3>
              <p className="text-xs text-gray-500">Form 1-4</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-sm">TVET/College</h3>
              <p className="text-xs text-gray-500">Certificate & Diploma</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-bold text-sm">Undergraduate</h3>
              <p className="text-xs text-gray-500">Bachelor's Degree</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold text-sm">Postgraduate</h3>
              <p className="text-xs text-gray-500">Masters & PhD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Contacts Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Location Contacts</h2>
          <p className="text-center text-gray-600 mb-8">Reach out to your local education office for assistance</p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-600">Wajir County</h3>
              <p className="text-sm">Wajir County Education Office</p>
              <p className="text-sm">Visit County Headquarters</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-600">Wajir South</h3>
              <p className="text-sm">Wajir South Sub-County Office</p>
              <p className="text-sm">Contact local Ward Administrator</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-600">Garissa Township</h3>
              <p className="text-sm">Garissa Township Education Dept</p>
              <p className="text-sm">Visit Sub-County Office</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-600">Garissa County</h3>
              <p className="text-sm">Garissa County Education Office</p>
              <p className="text-sm">Call County Headquarters</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold text-green-600">NG-CDF</h3>
              <p className="text-sm">Your Local Constituency Office</p>
              <p className="text-sm">Visit CDF Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">Common questions about bursaries</p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">What educational levels are covered?</h3>
            <p className="text-gray-600">All bursaries are available for ALL educational levels including Primary, Secondary, TVET/College, Undergraduate, and Postgraduate studies.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Who is eligible for county bursaries?</h3>
            <p className="text-gray-600">Residents of the specific county who are admitted to recognized educational institutions at any level and demonstrate financial need.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">What is the NG-CDF bursary?</h3>
            <p className="text-gray-600">NG-CDF bursary is funding from the National Government Constituencies Development Fund available to students at all educational levels in all 290 constituencies across Kenya.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Can I apply for multiple bursaries?</h3>
            <p className="text-gray-600">Yes, but you can only apply in the county/constituency where you are a legal resident.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">How do I download the application form?</h3>
            <p className="text-gray-600">Click the "Download Form" button on any bursary card to get the official application form.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bursaries;