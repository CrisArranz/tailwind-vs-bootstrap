import { PageLayout } from "../components/layouts";

export default function Home() {
  return <PageLayout className="min-h-screen bg-gradient-to-tl to-emerald-300 from-slate-200">
    <h1 className="flex justify-center items-center gap-x-5 font-bold py-10">
      <span className="text-6xl inline-flex animate-background-shine bg-[linear-gradient(100deg,#06b6d4,45%,#0891b2,65%,#0e7490)] bg-[length:250%_100%] bg-clip-text text-transparent">TAILWIND</span>
      <span className="text-7xl underline">VS</span>
      <span className="text-6xl inline-flex animate-background-shine bg-[linear-gradient(100deg,#a855f7,45%,#9333ea,65%,#7e22ce)] bg-[length:250%_100%] bg-clip-text text-transparent">BOOTSTRAP</span></h1>
    <h2 className="text-5xl animate-bounce text-center font-bold italic mb-10">¿Cual es mejor?</h2>
    <section className="flex justify-center gap-96">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl">Bootstrap</h3>
        <a className="underline text-black font-bold" href="https://getbootstrap.com/" target="_blank">Ir a instalación</a>
        <a className="underline text-black font-bold" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">Ir a ejemplos</a>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl">TailwindCSS</h3>
        <a className="underline text-black font-bold" href="https://tailwindcss.com/" target="_blank">Ir a instalación</a>
        <a className="underline text-black font-bold" href="https://flowbite.com/" target="_blank">Ir a ejemplos</a>
      </div>
    </section>
  </PageLayout>
}