import { PageLayout, Card } from "../components";

export default function Bootstrap() {
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

  return (
    <PageLayout className="min-h-screen bg-gradient-to-tl to-purple-300 from-slate-200 flex justify-center items-center">
      <Card isBoostrapComponent information={information} />
    </PageLayout>
  );
}