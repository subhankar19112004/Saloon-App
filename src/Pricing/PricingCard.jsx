import Sunil from "../NamingForms/Sunil";

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-3xl font-bold text-gray-800 mb-6">{price}</div>
      <ul className="text-gray-700 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-blue-500">✔</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Book Now
      </button>
    </div>
  );
};

export default PricingCard;
