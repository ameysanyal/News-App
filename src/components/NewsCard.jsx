const NewsCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-500 h-32 overflow-hidden">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-blue-500 underline"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
