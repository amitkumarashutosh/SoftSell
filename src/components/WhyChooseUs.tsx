const WhyChooseUs: React.FC = () => {
  const features: string[] = [
    "Fast Payments",
    "Secure Process",
    "High Valuation",
    "Trusted by 100+ Companies",
  ];

  return (
    <section className="bg-blue-50 py-16 text-center px-4 md:px-8 dark:bg-gray-600">
      <h2 className="text-3xl font-bold mb-10 dark:text-white">
        Why Choose Us?
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded shadow w-full max-w-[200px]"
          >
            <div className="text-blue-600 text-4xl mb-4">✔️</div>
            <p className="font-semibold">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
