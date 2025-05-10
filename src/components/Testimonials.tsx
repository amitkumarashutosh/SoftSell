type Review = {
  name: string;
  role: string;
  company: string;
  review: string;
};

const Testimonials: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "John Doe",
      role: "IT Manager",
      company: "ABC Corp",
      review: "SoftSell made selling unused licenses super easy!",
    },
    {
      name: "Jane Smith",
      role: "CFO",
      company: "XYZ Ltd",
      review: "Highly recommend their quick service and great valuation.",
    },
    {
      name: "Amit Singh",
      role: "Software Engineer",
      company: "Rocket Chat",
      review: "The process was seamless and the team was very helpful.",
    },
    {
      name: "Karan Pratap",
      role: "QA Engineer",
      company: "Nvidia",
      review: "The process was seamless and the team was very helpful.",
    },
  ];

  return (
    <section className="py-16 text-center px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-10 dark:text-white">
        Customer Testimonials
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded shadow w-full max-w-[300px]"
          >
            <p className="mb-4">"{review.review}"</p>
            <p className="font-bold">{review.name}</p>
            <p className="text-sm">
              {review.role}, {review.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
