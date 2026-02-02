import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is there a cost to my company for the vending equipment/service?",
    answer:
      "Bee's Vending will provide the machines and service free of charge.",
  },
  {
    question: "How often are machines restocked?",
    answer:
      "As often as needed based on sales frequency.",
  },
  {
    question: "What condition are the vending machines in?",
    answer:
      "The machines coming in will be new or near new. The machines will be in excellent condition and uniform in design.",
  },
  {
    question: "What is the procedure if someone loses money in the machines?",
    answer:
      "Vending machines from time to time do take people's money. We can supply a refund bank for on-the-spot refunds. Our route drivers will also issue refunds.",
  },
  {
    question: "If a machine has a problem how quickly do you respond to fix it?",
    answer:
      "Once a problem has been brought to our attention we generally respond quickly to resolve any problems. Keeping our customers happy and our vending machines stocked and functioning properly is our #1 priority.",
  },
  {
    question: "Can we request specific products?",
    answer:
      "Of course! you can either request a specific product through our website or talk to your account representative. We want to offer the products your employees want.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No contract required, however if you need a contract we will provide a mutually agreed upon format.",
  },
  {
    question: "How long does it take for delivery/installation and what is the process?",
    answer:
      "Once you give us the go ahead to move machines in we will be ready to go. In the event that you already have a vendor we can facilitate the change over to meet your convenience to move out. If you need the machines sooner than that we will make it happen. After we agree on an installation date, it shouldn't take more than 4 hours to move the machines in and get them all set up and working.",
  },
  {
    question: "What are your service days and hours?",
    answer:
      "We provide service 24 hours a day 7 days a week. Our trucks start very early in the morning every day and we have route technicians on call around the clock. The people who re-stock your vending machines are also trained in repairing them. This helps facilitate most machine repairs and ensures that your vending machines are always up and running.",
  },
];

export default function Faq() {
  
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <section id="faqs" className="px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">FAQs</h2>
        <noscript>
            <div className="mt-8 space-y-4 max-w-2xl mx-auto">
                {faqs.map((faq, idx) => (
                <div
                    key={idx}
                    className="border border-gray-200 rounded-xl shadow-sm px-6 py-5"
                >
                    <h3 className="font-medium text-gray-900 text-md sm:text-xl mb-2">
                    {faq.question}
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                    {faq.answer}
                    </p>
                </div>
                ))}
            </div>
        </noscript>

        <div className="js-only mt-8 space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-gray-800 hover:bg-gray-50 text-md sm:text-xl transition-colors"
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
              >
                {faq.question}
                {faqOpen === idx ? (
                  <Minus className="w-6 h-6 sm:w-6 sm:h-6 text-gray-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 sm:w-6 sm:h-6 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {/* Smooth accordion */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out text-gray-600 text-base sm:text-lg`}
                style={{
                  maxHeight: faqOpen === idx ? "500px" : "0",
                  opacity: faqOpen === idx ? 1 : 0,
                }}
              >
                <div className="pb-5">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
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
    