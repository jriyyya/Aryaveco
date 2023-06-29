export default function Hero() {
  return (
    <div className="flex mobile:flex-col mobile:mr-0 mobile:py-14 gap-x-16 mr-24 py-20">
      <div className="widescreen:self-center text-primary mobile:text-xl mobile:hidden font-semibold text-right mobile:text-left">
        <div>Who are we?</div>
        <div>What do we do?</div>
        <div>Why do we do this?</div>
      </div>
      <div className="basis-2/3 flex flex-col gap-y-6">
        <div className="text-primary text-5xl mobile:mt-2 font-bold">
          About Us
        </div>
        <div className="font-semibold mobile:mt-2 mobile:font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nulla
          laboriosam minus ab odit exercitationem dolorum tempora consequuntur
          iusto ipsa eum, sequi error velit porro nesciunt libero possimus
          placeat voluptatibus quas cum! Ullam animi, reiciendis temporibus
          maiores voluptatibus provident harum dolorum sunt voluptatem voluptate
          <br />
          <br />
          sint rerum, tempore officiis iste nemo eum nam illo facere at eaque
          debitis. Facere, quia illum maiores veritatis minus eum consequatur
          alias labore veniam sed illo quam aperiam obcaecati porro dolor
          dolorem molestiae voluptas officia, inventore sapiente temporibus,
          pariatur vitae. Eveniet pariatur quia repellendus iusto hic laudantium
          commodi distinctio voluptates veritatis, adipisci, expedita obcaecati
          labore nesciunt.
        </div>
      </div>
    </div>
  );
}
