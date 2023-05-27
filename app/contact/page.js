import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="px-3 flex-auto overflow-y-auto flex ">
      <div className="my-auto flex-auto">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">Contact</h1>
        <ContactForm />
      </div>
    </main>
  )
}