import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-bannerImg bg-no-repeat bg-cover bg-bottom">
        <div className="w-full min-h-[404px] flex items-center bg-blackOverlay">
          <div className="container mx-auto px-[16px] py-32 flex flex-col gap-[50px]">
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-[33px]/[43px] text-center lg:text-[50px]/[68px]">50 Years With Our Eyes on The Road</p>
              <p className="font-light text-[14px]/[22px] text-center max-w-[812px]">MPI has been at the forefront of the Colombian asphalt industry since 1974, placing all efforts into providing eco-friendly, technically advanced, and cost-effective solutions, that adapt to the diversity of the LATAM market.</p>
            </div>
            <div className="bg-white w-full flex rounded p-2">
              <input type="text" name="message" id="message" placeholder="Type your message" className=" w-full border-none bg-transparent text-black-600 font-normal text-[14px]/[14px]"/>
              <button className="bg-primary text-black-800 font-normal text-[14px]/[22px] text-center rounded px-4 py-2 min-w-24">Learn</button>
            </div>
            <div className="w-[300px] bg-transparent flex items-center gap-8 mx-auto lg:w-[400px]">
              <Image src={"/ISSA_logo.png"} alt="issa_logo" layout="responsive" width={100} height={60}/>
              <Image src={"/ISSA_award.png"} alt="issa_award" layout="responsive" width={100} height={68}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
