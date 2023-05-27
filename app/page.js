export default function Home() {
  return (
    <main className="px-3 overflow-y-auto flex-auto flex">
      <div className="my-auto flex-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl">
          The Social App
        </h1>
        <p className="lead">
          Join the Sucious revolution! Our app, powered by Motoko, is the social
          media platform of the future. Mint your own memes, send encrypted
          messages, and connect with friends worldwide. Sign up today and stay
          up-to-date in the ever-evolving world of social media.
        </p>
        <p className="lead">
          <a href="" className="btn disabled" disabled={true}>
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
