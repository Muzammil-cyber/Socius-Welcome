import Cards from "@/components/Cards";

export default function Features() {
  return (
    <main className="px-3 flex-auto overflow-y-auto md:flex md:align-middle">
      <div className="my-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Features</h1>
        <Cards />
      </div>
    </main >
  )
}