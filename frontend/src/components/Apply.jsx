import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Apply = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Personal Details
    fullName: "",
    dob: "",
    idNumber: "",
    phone: "",
    email: "",
    constituency: "",
    ward: "",
    county: "",
    // Parent Details
    parentName: "",
    parentPhone: "",
    occupation: "",
    relationship: "",
    // Institution
    schoolName: "",
    admissionNo: "",
    course: "",
    yearOfStudy: "",
    feesBalance: "",
    // Bursary
    bursaryType: "",
    amountRequested: "",
    reason: "",
    // Documents
    hasId: false,
    hasAdmission: false,
    hasResults: false,
    // Declaration
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.declaration) {
    alert("Please confirm the declaration before submitting");
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch(
      "http://127.0.0.1:5000/applications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_name: formData.fullName,
          institution: formData.schoolName,
          course: formData.course,
          amount_requested: parseFloat(formData.amountRequested),
          reason: formData.reason,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      navigate("/my-applications");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Could not connect to backend server");
  }

  setIsSubmitting(false);
};
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStepIndicator = () => {
    const steps = ["Personal", "Parent", "Education", "Bursary", "Documents", "Review"];
    return (
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-all ${
                currentStep > index + 1 ? "bg-green-500 text-white" :
                currentStep === index + 1 ? "bg-blue-600 text-white ring-4 ring-blue-200" :
                "bg-gray-300 text-gray-600"
              }`}>
                {currentStep > index + 1 ? "✓" : index + 1}
              </div>
              <p className={`text-sm hidden md:block ${
                currentStep === index + 1 ? "text-blue-600 font-semibold" : "text-gray-500"
              }`}>
                {step}
              </p>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded"></div>
          <div 
            className="absolute top-0 left-0 h-1 bg-blue-600 rounded transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 5) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const renderPersonalInfo = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ID Number *</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">County *</label>
          <input
            type="text"
            name="county"
            value={formData.county}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Constituency *</label>
          <input
            type="text"
            name="constituency"
            value={formData.constituency}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Ward *</label>
          <input
            type="text"
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderParentInfo = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Parent/Guardian Name *</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Parent Phone *</label>
          <input
            type="tel"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Occupation *</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Relationship *</label>
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderInstitutionInfo = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Institution Name *</label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Admission Number *</label>
          <input
            type="text"
            name="admissionNo"
            value={formData.admissionNo}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Course/Program *</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Year of Study *</label>
          <select
            name="yearOfStudy"
            value={formData.yearOfStudy}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Fee Balance (Ksh) *</label>
          <input
            type="number"
            name="feesBalance"
            value={formData.feesBalance}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderBursaryInfo = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
       <div>
  <label className="block text-sm font-semibold text-gray-700 mb-1">Bursary Type *</label>
  <select
    name="bursaryType"
    value={formData.bursaryType}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Select bursary type</option>
    <option value="wajir_south">Wajir South Bursary</option>
    <option value="wajir_county">Wajir County Bursary</option>
    <option value="wajir_east">Wajir East Bursary</option>
    <option value="garissa_township">Garissa Township Bursary</option>
    <option value="county_government">County Government Bursary</option>
  </select>
</div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Amount Requested (Ksh) *</label>
          <input
            type="number"
            name="amountRequested"
            value={formData.amountRequested}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Reason for Application *</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Explain why you need this bursary..."
          required
        ></textarea>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-4">
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <p className="text-yellow-800 text-sm">Please confirm you have the following documents ready for submission:</p>
      </div>
      <div className="space-y-3">
        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="checkbox"
            name="hasId"
            checked={formData.hasId}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600"
          />
          <span className="text-gray-700">National ID Copy</span>
        </label>
        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="checkbox"
            name="hasAdmission"
            checked={formData.hasAdmission}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600"
          />
          <span className="text-gray-700">Admission Letter</span>
        </label>
        <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="checkbox"
            name="hasResults"
            checked={formData.hasResults}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600"
          />
          <span className="text-gray-700">KCSE Results Slip/Certificate</span>
        </label>
      </div>
    </div>
  );

  const renderReview = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-3 text-blue-600">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <p><span className="font-semibold">Name:</span> {formData.fullName || "-"}</p>
          <p><span className="font-semibold">DOB:</span> {formData.dob || "-"}</p>
          <p><span className="font-semibold">ID:</span> {formData.idNumber || "-"}</p>
          <p><span className="font-semibold">Phone:</span> {formData.phone || "-"}</p>
          <p><span className="font-semibold">Email:</span> {formData.email || "-"}</p>
          <p><span className="font-semibold">County:</span> {formData.county || "-"}</p>
          <p><span className="font-semibold">Constituency:</span> {formData.constituency || "-"}</p>
          <p><span className="font-semibold">Ward:</span> {formData.ward || "-"}</p>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-3 text-blue-600">Education Information</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <p><span className="font-semibold">Institution:</span> {formData.schoolName || "-"}</p>
          <p><span className="font-semibold">Admission No:</span> {formData.admissionNo || "-"}</p>
          <p><span className="font-semibold">Course:</span> {formData.course || "-"}</p>
          <p><span className="font-semibold">Year:</span> {formData.yearOfStudy || "-"}</p>
          <p><span className="font-semibold">Fee Balance:</span> Ksh {formData.feesBalance || "0"}</p>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-3 text-blue-600">Application Details</h3>
        <div className="grid md:grid-cols-2 gap-2 text-sm">
          <p><span className="font-semibold">Bursary Type:</span> {formData.bursaryType || "-"}</p>
          <p><span className="font-semibold">Amount:</span> Ksh {formData.amountRequested || "0"}</p>
          <p><span className="font-semibold">Reason:</span> {formData.reason || "-"}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <label className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg cursor-pointer">
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={handleChange}
            className="w-5 h-5 text-blue-600"
            required
          />
          <span className="text-gray-700">I confirm that all information provided is true and correct to the best of my knowledge.</span>
        </label>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderParentInfo();
      case 3: return renderInstitutionInfo();
      case 4: return renderBursaryInfo();
      case 5: return renderDocuments();
      case 6: return renderReview();
      default: return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">EduFund Kenya</h1>
            <p className="text-blue-100 mt-1">County Bursary & Scholarship Application Form</p>
          </div>
          
          <div className="p-8">
            {renderStepIndicator()}
            
            <form onSubmit={handleSubmit}>
              {renderCurrentStep()}
              
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 6 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Next
                  </button>
                )}
                {currentStep === 6 && (
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.declaration}
                    className="ml-auto px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>For assistance, contact: 0700 000 000 | support@edufundkenya.com</p>
        </div>
      </div>
    </div>
  );
};

export default Apply;