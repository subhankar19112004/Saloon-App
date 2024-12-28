import PricingCard from "./PricingCard.jsx";

const Pricing = () => {
  const services = [
    {
      title: "Facial Treatment",
      description: "Rejuvenate your skin with our premium facial treatments.",
      price: "$50",
      features: ["30-min session", "Natural products", "Skin consultation"],
    },
    {
      title: "Body Massage",
      description: "Relax and unwind with our therapeutic body massages.",
      price: "$80",
      features: ["60-min session", "Aromatherapy oils", "Expert therapists"],
    },
    {
      title: "Manicure & Pedicure",
      description: "Pamper your hands and feet with a luxurious experience.",
      price: "$40",
      features: ["Nail care", "Cuticle treatment", "Polish of your choice"],
    },
    {
      title: "Hair Spa",
      description: "Nourish your hair with our enriching hair spa services.",
      price: "$70",
      features: ["Deep conditioning", "Scalp massage", "Heat therapy"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          SPA Services Pricing
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Experience relaxation and rejuvenation at its best.
        </p>
      </header>
      <div className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4">
        {services.map((service, index) => (
          <PricingCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
