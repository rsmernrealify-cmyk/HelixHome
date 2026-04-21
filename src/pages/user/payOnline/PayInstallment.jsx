import React, { useState } from 'react'

const PayInstallment = () => {
  const [step, setStep] = useState(1) // Track the current step
  const [formData, setFormData] = useState({
    stream: 'Science', // Default stream
    course: 'Engineering', // Default course
    fees: '', // Default fees
    studentName: '', // Default student name
    gender: '', // Default gender
    dateOfBirth: '', // Default date of birth
    fatherName: '', // Default father's name
    motherName: '', // Default mother's name
    category: '', // Default category
    email: '', // Default email
    city: '', // Default city
    district: '', // Default district
    state: '', // Default state
    pinCode: '', // Default pin code
    parentPhoneNumber: '', // Default phone number
    address: '', // Default address
  })

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Validate inputs for each step
  const validateStep = () => {
    const stepData = {
      1: ['stream', 'course', 'fees'],
      2: [
        'studentName',
        'gender',
        'fatherName',
        'motherName',
        'dateOfBirth',
        'category',
        'email',
      ],
      3: [
        'city',
        'district',
        'state',
        'pinCode',
        'parentPhoneNumber',
        'address',
      ],
    }

    const requiredFields = stepData[step]
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert("Please fill out all required fields in Step ${step}.")
        return false
      }
    }

    // Additional validations for Step 2
    if (step === 2) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      if (!emailPattern.test(formData.email)) {
        alert('Please enter a valid email address.')
        return false
      }

      const dob = new Date(formData.dateOfBirth)
      const today = new Date()
      var age = today.getFullYear() - dob.getFullYear()
      const m = today.getMonth() - dob.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age-- // This line is trying to modify the age constant
      }
      if (age < 14) {
        alert('You must be at least 14 years old.')
        return false
      }
    }

    // Additional validations for Step 3
    if (step === 3) {
      const pinCodePattern = /^\d{6}$/
      if (!pinCodePattern.test(formData.pinCode)) {
        alert('Please enter a valid 6-digit pin code.')
        return false
      }

      const phonePattern = /^\d{10}$/
      if (!phonePattern.test(formData.parentPhoneNumber)) {
        alert('Please enter a valid 10-digit phone number.')
        return false
      }
    }

    return true
  }

  // Navigate to the next step
  const nextStep = () => {
    if (validateStep()) {
      setStep((prevStep) => prevStep + 1)
    }
  }

  // Navigate to the previous step
  const prevStep = () => setStep((prevStep) => prevStep - 1)

  // Progress bar
  const progressPercentage = (step / 3) * 100

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formDataToSend = new FormData()
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key])
    })

    try {
      const response = await fetch('https://your-backend-api.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        alert('Form submitted successfully!')
      } else {
        alert('Failed to submit the form.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center py-8">
      <div className="w-full max-w-4xl bg-gradient-to-r from-violet-100 to-blue-100 shadow-lg rounded-lg p-8">
        {/* Progress Bar */}
        <div className="relative w-full h-2 rounded bg-gray-400 mb-8">
          <div
            className="absolute top-0 left-0 h-2 bg-blue-500 rounded transition-all duration-500"
            style={{ width: '${progressPercentage} %' }}
          ></div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Details of Course */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">
                Step 1: Details of Course
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  name="stream"
                  value={formData.stream}
                  label="Stream"
                  disabled
                  handleChange={handleChange}
                />
                <InputField
                  name="course"
                  value={formData.course}
                  label="Course"
                  disabled
                  handleChange={handleChange}
                />
                <InputField
                  name="fees"
                  value={formData.fees}
                  label="Enter the Amount (in ₹)"
                  type="number"
                  handleChange={handleChange}
                />
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Student Details */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">
                Step 2: Student Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  name="studentName"
                  value={formData.studentName}
                  label="Student Name"
                  handleChange={handleChange}
                />
                <SelectField
                  name="gender"
                  value={formData.gender}
                  label="Gender"
                  options={['Male', 'Female', 'Other']}
                  handleChange={handleChange}
                />
                <InputField
                  name="fatherName"
                  value={formData.fatherName}
                  label="Father Name"
                  handleChange={handleChange}
                />
                <InputField
                  name="motherName"
                  value={formData.motherName}
                  label="Mother Name"
                  handleChange={handleChange}
                />
                <InputField
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  label="Date of Birth (DD/MM/YYYY)"
                  type="date"
                  handleChange={handleChange}
                />
                <SelectField
                  name="category"
                  value={formData.category}
                  label="Category"
                  options={['General', 'OBC', 'SC', 'ST']}
                  handleChange={handleChange}
                />
                <InputField
                  name="email"
                  value={formData.email}
                  label="Email"
                  type="email"
                  handleChange={handleChange}
                />
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-4 border-blue-400 pb-2">
                Step 3: Additional Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  name="city"
                  value={formData.city}
                  label="City"
                  handleChange={handleChange}
                />
                <InputField
                  name="district"
                  value={formData.district}
                  label="District"
                  handleChange={handleChange}
                />
                <InputField
                  name="state"
                  value={formData.state}
                  label="State"
                  handleChange={handleChange}
                />
                <InputField
                  name="pinCode"
                  value={formData.pinCode}
                  label="Pin Code"
                  type="number"
                  handleChange={handleChange}
                />
                <InputField
                  name="parentPhoneNumber"
                  value={formData.parentPhoneNumber}
                  label="Parent Phone Number"
                  type="tel"
                  handleChange={handleChange}
                />
                <InputField
                  name="address"
                  value={formData.address}
                  label="Address"
                  handleChange={handleChange}
                />
              </div>
              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

const InputField = ({
  name,
  value,
  label,
  type = 'text',
  disabled,
  handleChange,
}) => (
  <div>
    <label className="block text-gray-600 font-medium mb-2">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    />
  </div>
)

// Select Field Component
const SelectField = ({ name, value, label, options, handleChange }) => (
  <div>
    <label className="block text-gray-600 font-medium mb-2">
      {label} <span className="text-red-500">*</span>
    </label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      required
    >
      <option value="" disabled>
        Select a {label}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

export default PayInstallment