import { Card, PageLayout } from "../components";

export default function Tailwind() {

  const information = {
    image: {
      src: 'https://yt3.googleusercontent.com/ytc/AIdro_nxcnNw3an65yOh1_523uzB3omEI9-zDtTIwRIYY-RRU_Q=s900-c-k-c0x00ffffff-no-rj',
      alt: 'irrelevantAlt'
    },
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores distinctio porro quia minima, hic deleniti! Iste aperiam pariatur consequuntur nostrum officiis eos corrupti asperiores dignissimos. Adipisci maxime repellat optio illum!',
    button: {
      label: 'irrelevantLabel'
    }
  };

  const className = {
    card: "w-80 px-8 py-4 bg-gradient-to-b to-white from-cyan-700 rounded-md",
    image: "max-h-20 mb-[1.25rem]",
    body: "flex flex-col gap-y-3",
    title: "underline text-xl",
    button: "bg-slate-400 rounded-md text-center py-2 hover:text-white hover:bg-slate-800"
  }

  return (
    <PageLayout className="min-h-screen bg-gradient-to-tl to-cyan-100 from-slate-200 flex justify-center items-center">
      <Card className={className} information={information} />
    </PageLayout>
  );
}