import '@/css/Cards.css'

export default function Cards() {

    const cards = [
        {
            index:1,
            title: "Connect with friends",
            content: "Find your loved ones and talk to them"
        },
        {
            index:2,
            title: "Encrypted Messages",
            content: "Messages + your identity are secured using blockchain"
        },
        {
            index:3,
            title: "Mint your Memes",
            content: "Turn your Memes into NFTs"
        }
    ]

    return (
        <div className="card-group">
            {
                cards.map((card) => <div key={card.index} className="card text-bg-light">
                    <div className="card-body py-auto">
                        <h5 className='card-title'>{card.title}</h5>
                        <p className="card-text">{card.content}</p>
                    </div>

                </div>
                )
            }

        </div>
    )
}