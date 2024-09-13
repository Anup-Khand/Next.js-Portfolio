type ServiceProps = {
  service: {
    icon: JSX.Element;
    title: string;
    description: string;
  };
  index: number;
};
const ServiceCard = ({ service, index }: ServiceProps) => {
  // Dynamically assign background color for odd and even cards
  const bgColor = index % 2 === 0 ? "bg-pink-100" : "bg-blue-100";
  console.log(service);
  return (
    <div
      className={`${bgColor} p-6 rounded-lg shadow-md flex flex-col items-start gap-4`}
    >
      <div>{service.icon}</div>
      <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
