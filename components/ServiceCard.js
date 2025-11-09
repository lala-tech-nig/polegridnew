"use client";

export default function ServiceCard({ image, title, desc, onKnowMore }) {
  return (
    <div className="group bg-white shadow-lg rounded-2xl overflow-hidden transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-green-600">{title}</h3>
        <p className="text-gray-700 mb-3">{desc}</p>
        <button
          onClick={onKnowMore}
          className="px-4 py-2 border-2 border-green-500 text-green-600 rounded-full hover:bg-green-500 hover:text-white transition"
        >
          Know More
        </button>
      </div>
    </div>
  );
}
