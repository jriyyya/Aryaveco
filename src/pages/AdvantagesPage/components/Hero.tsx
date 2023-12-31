export default function Hero() {
  return (
    <div className="flex flex-row gap-x-16 p-page mobile:mr-24 py-20 mobile:justify-center">
      <div className="self-center text-primary font-semibold text-right mobile:hidden">
        <div>Who are we?</div>
        <div>What do we do?</div>
        <div>Why do we do this?</div>
      </div>
      <div className="basis-2/3 mobile:basis-full flex mobile:ml-12 flex-col gap-y-6">
        <div className="text-primary text-5xl font-bold">Advantages</div>
        <div className="font-semibold mobile:font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nulla
          laboriosam minus ab odit exercitationem dolorum tempora consequuntur
          iusto ipsa eum, sequi error velit porro nesciunt libero possimus
          placeat voluptatibus quas cum! Ullam animi, reiciendis temporibus
          maiores voluptatibus provident harum dolorum sunt voluptatem voluptate
        </div>
      </div>
    </div>
  );
}
