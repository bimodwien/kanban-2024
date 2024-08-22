import Finished from '@/components/Finished';
import InProgress from '@/components/InProgress';
import Review from '@/components/Review';
import Todo from '@/components/Todo';

export default function Home() {
  return (
    <>
      <section className="pt-10 px-10 bg-[#FAF9F6] h-lvh">
        <div className="md:flex md:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-4 lg:gap-5 lg:items-start">
          <Todo />
          <InProgress />
          <Review />
          <Finished />
        </div>
      </section>
    </>
  );
}
