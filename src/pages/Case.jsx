import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Case = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const uploadedFile = files[0];
      if (uploadedFile.size > 50000) {
        setFileError("File size must be less than 50KB.");
        setFile(null);
      } else {
        setFileError("");
        setFile(uploadedFile);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (file && file.size > 50000) {
      setFileError("Attachment is too large. Please reduce the size.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.sendForm(
        "service_yjmpeug", // Replace with your Service ID
        "template_6owemii", // Replace with your Template ID
        formRef.current, // Form reference
        "4Pg_bpFCvPidWKccd" // Replace with your Public Key
      );

      console.log("SUCCESS!", response.status, response.text);
      alert("Case submitted successfully!");

      // Reset the form and file input
      setFormData({
        name: "",
        email: "",
        subject: "",
        description: "",
      });
      setFile(null);
      formRef.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to submit case. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4">File a Case</h1>
        <p className="text-center text-gray-600 mb-6">
          Have an issue with your crypto trades? Lodge a complaint and we’ll assist you.
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Case subject"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your issue in detail"
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="attachment" className="block text-gray-700 font-medium mb-1">
              Attachment (Optional)
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fileError && <p className="text-red-600 text-sm mt-1">{fileError}</p>}
          </div>
          <button
            type="submit"
            className={`w-full ${
              isSubmitting ? "bg-gray-400" : "bg-red-600"
            } text-white font-medium py-3 rounded-lg hover:bg-red-400 transition`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Case"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Case;
