import React from "react";

type Step = {
  title: string;
  icon: string;
};

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    { title: "Upload License", icon: "💻" },
    { title: "Get Valuation", icon: "📊" },
    { title: "Get Paid", icon: "💰" },
  ];

  return (
    <section className="py-16 text-center px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-10 dark:text-white">How It Works</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded shadow w-full max-w-[250px]"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
