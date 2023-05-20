import "@/css/Cards.css";

export default function Cards() {
  const cards = [
    {
      index: 1,
      title: "Connect with friends",
      content: "Find your loved ones and talk to them",
    },
    {
      index: 2,
      title: "Encrypted Messages",
      content: "Messages + your identity are secured using blockchain",
    },
    {
      index: 3,
      title: "Mint your Memes",
      content: "Turn your Memes into NFTs",
    },
  ];

  return (
    <div className="grid border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
      {cards.map((card) => (
        <figure
          key={card.index}
          className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:border-r-2"
        >
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900">
              {card.title}
            </h3>
            <p className="my-4">{card.content}</p>
          </blockquote>
        </figure>
      ))}
    </div>
  );
}
