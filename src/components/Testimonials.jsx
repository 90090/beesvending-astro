import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "We IP Cam",
    role: "",
    text:
      "Great service and reliable machines! The staff is friendly, deliveries are always on time, and the selection is excellent. Highly recommend for any business needing vending solutions.",
  },
  {
    name: "Robert",
    role: "",
    text:"Great quality products, diverse selection of products, modern and clean machines, and superb customer service. Would recommend to any business or organization."
  },
  {
    name: "Kimberly Santulli",
    role: "",
    text:
      "Very helpful! The owner was responsive and helpful with what I needed. Highly recommend.",
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-swipe testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Our Clients Say</h2>

        {/* ===== No-JS / crawler fallback ===== */}
        <noscript>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 border rounded shadow-md">
                <p className="italic mb-4">"{t.text}"</p>
                <p className="font-semibold">{t.name}</p>
                {t.role && <p className="text-gray-500">{t.role}</p>}
              </div>
            ))}
          </div>
        </noscript>

        {/* ===== JS-only rotating testimonial ===== */}
        <div className="js-only p-6 border rounded shadow-md">
          <p className="italic mb-4">
            "{testimonials[currentTestimonial].text}"
          </p>
          <p className="font-semibold">
            {testimonials[currentTestimonial].name}
          </p>
          {testimonials[currentTestimonial].role && (
            <p className="text-gray-500">
              {testimonials[currentTestimonial].role}
            </p>
          )}
        </div>
      </div>

      {/* Hide JS version when JS is disabled */}
      <noscript>
        <style>{`
          .js-only {
            display: none !important;
          }
        `}</style>
      </noscript>
    </section>
  );
}
