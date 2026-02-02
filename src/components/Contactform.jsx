import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    address: "",
    email: "",
    phone: "",
    reason: "",
    comments: "",
    machineInfo: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [hoverField, setHoverField] = useState(null); // Track which textarea is hovered/focused

  const API_URL = "https://4h9g5itj39.execute-api.us-east-1.amazonaws.com/contact";
  const API_KEY = "ASkyaH4bTFY3KQvHkBOvl1SmY23cpMGq";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          company: "",
          address: "",
          email: "",
          phone: "",
          reason: "",
          comments: "",
          machineInfo: "",
        });
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black shadow rounded p-4 px-4 md:px-8 lg:px-16 relative">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-6xl grid gap-4 md:grid-cols-2"
      >
        {/* Row 1 */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Company/School:</label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium">Address:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Street, City, State, ZIP"
            required
          />
        </div>

        {/* Row 3 */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-1 font-medium">Reason for Contacting Us:</label>
          <select
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="">Select a reason</option>
            <option value="Contact Request">Contact Request</option>
            <option value="Report Malfunctioning Machine">
              Report a malfunctioning machine
            </option>
            <option value="Request Refund">Request a refund</option>
            <option value="Request Product Change">
              Request a different product in your machine
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        {/* Row 5 - Comments with hover tooltip */}
        <div className="flex flex-col md:col-span-2 relative">
          <label className="mb-1 font-medium">Comments / Questions / Requests:</label>
          <div className="flex gap-4 items-start">
            <textarea
              name="comments"
              value={form.comments}
              onChange={handleChange}
              onFocus={() => setHoverField("comments")}
              onBlur={() => setHoverField(null)}
              onMouseEnter={() => setHoverField("comments")}
              onMouseLeave={() => setHoverField(null)}
              className="w-full border border-gray-300 p-2 rounded"
              rows={4}
            />
          </div>
          {hoverField === "comments" && (
            <div
              className="
                absolute 
                bottom-full mb-2 left-0 w-full   /* small screens: above */
                lg:bottom-auto lg:top-8 lg:left-full lg:ml-4 lg:w-80 /* large screens: right */
                bg-gray-100 border border-gray-300 
                text-sm text-gray-700 p-2 rounded shadow-lg z-50
              "
            >
              Enter your question, comment, or product request here. If you are requesting
              a refund, please enter the item(s) you tried to purchase.
            </div>
          )}
        </div>

        {/* Row 6 - Machine Info with hover tooltip */}
        <div className="flex flex-col md:col-span-2 relative">
          <label className="mb-1 font-medium">Machine Information:</label>
          <div className="flex gap-4 items-start">
            <textarea
              name="machineInfo"
              value={form.machineInfo}
              onChange={handleChange}
              onFocus={() => setHoverField("machineInfo")}
              onBlur={() => setHoverField(null)}
              onMouseEnter={() => setHoverField("machineInfo")}
              onMouseLeave={() => setHoverField(null)}
              className="w-full border border-gray-300 p-2 rounded"
              rows={4}
            />
          </div>
          {hoverField === "machineInfo" && (
            <div
              className="
                absolute 
                bottom-full mb-2 left-0 w-full   /* small screens: above */
                lg:bottom-auto lg:top-8 lg:left-full lg:ml-4 lg:w-80 /* large screens: right */
                bg-gray-100 border border-gray-300 
                text-sm text-gray-700 p-2 rounded shadow-lg z-50
              "
            >
              If you are reporting a malfunctioning machine or requesting a refund, please
              enter details of the machine's location, including: Location Name; Address
              (City, State, ZIP); Machine Type (Coke, Pepsi, Snack, etc.); and Machine
              Number if available.
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      {success === true && (
        <p className="mt-4 text-green-600">
          Message sent successfully! You'll hear back within 24 hours.
        </p>
      )}
      {success === false && (
        <p className="mt-4 text-red-600">
          Failed to send message. Please try again.
        </p>
      )}
    </div>
  );
}
