import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Typically, here you would send the form data to a server or email service
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-lg max-w-lg mx-auto my-12">
      <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
