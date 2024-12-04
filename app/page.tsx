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
      <section className="bg-light-800 px-2 py-10 lg:p-10"> 
        <div className="mx-auto flex flex-col gap-10">
          <p className="text-black-800 font-bold text-[24px]/[24px] text-center lg:font-semibold lg:text-[36px]/[24px] xl:text-[48px]/[55px]">Our Vision</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white max-w-[306px] flex flex-col items-center justify-end gap-8 px-4 py-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:drop-shadow-xl lg:items-start">
              <Image src={"/road_card.svg"} alt="Road Icon" layout="fixed" width={58} height={36} className="w-[58px] h-[36px]"/>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-black-800 font-semibold text-[18px]/[25px] text-center lg:font-medium lg:text-[24px]/[20px] lg:text-start">Road Preservation</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-center lg:text-start">To ensure every road stands the test of time and traffic, we deliver cost-effective solutions that prioritize maintenance.</p>
              </div>
              <button className="bg-white text-black-800 w-full flex justify-start gap-2 pt-3">
                  Read More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
            <div className="bg-white max-w-[306px] flex flex-col items-center justify-center gap-8 px-4 py-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:drop-shadow-xl lg:items-start">
              <Image src={"/lab_bottle_icon.svg"} alt="Road Icon" layout="fixed" width={58} height={58}  className="w-[58px] h-[58px]"/>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-black-800 font-semibold text-[18px]/[25px] text-center lg:font-medium lg:text-[24px]/[20px] lg:text-start">Laboratory</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-center lg:text-start">Our Lab is the epicenter of MPI's technological advancements in the asphalt industry.</p>
              </div>
              <button className="bg-white text-black-800 w-full flex justify-start gap-2 pt-3">
                  Read More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
            <div className="bg-white max-w-[306px] flex flex-col items-center justify-end gap-8 px-4 py-6 rounded-lg transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:drop-shadow-xl lg:items-start">
              <Image src={"/consulting_icon.svg"} alt="Road Icon" layout="fixed" width={58} height={16}  className="w-[58px] h-[36px]"/>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-black-800 font-semibold text-[18px]/[25px] text-center lg:font-medium lg:text-[24px]/[20px] lg:text-start">Consulting</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-center lg:text-start">Our seasoned consultants offer tailored guidance through the complexities of the ever-evolving asphalt/bitumen industry.</p>
              </div>
              <button className="bg-white text-black-800 w-full flex justify-start gap-2 pt-3">
                  Read More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-800 px-2 py-10 min-[984px]:bg-white">
        <div className="mx-auto flex flex-wrap justify-center gap-12 items-center lg:gap-24">
          <p className="text-black-800 font-bold text-[24px]/[24px] text-center">Our allies</p>
          <div className="bg-white flex flex-wrap gap-10 p-4 rounded-xl justify-center">
            <Image src={"/logo_pq_png_verde.png"} alt="logo-proquimsa" width={70} height={50}/>
            <Image src={"/logo_mpi_logistica.png"} alt="logo-mpi" width={44} height={50}/>
            <Image src={"/logo4r.png"} alt="logo-4r" width={141} height={50} className="w-[128px] sm:w-[141px]"/>
            <Image src={"/logo_impes.png"} alt="logo-impes" width={103} height={50}/>
            <Image src={"/logo_issa_2.png"} alt="logo-issa" width={128} height={50}/>
            <Image src={"/logo_mp.png"} alt="logo-mp" width={92} height={50}/>
          </div>
        </div>
      </section>
      <section className="bg-light-800 p-8 lg:px-4 lg:py-28">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-xl bg-white shadow-lg md:max-h-[518px]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <Image src={"/gogreen-bg.png"} alt="GoGreen Background" width={518} height={616} className="max-h-[518px] w-full h-full"/>
              </div>
              <div className="flex flex-col justify-center gap-6 my-auto text-center p-6 md:w-1/2 md:p-16 md:text-right md:items-end">
                <p className="text-go-green font-bold text-[24px]/[24px] md:font-semibold lg:text-[40px]/[55px]">Go Green</p>
                <p className="text-black-800 font-medium text-[15px]/[20px] md:font-normal lg:text-[20px]/[24px]">Reducing the environmental impact without compromising quality exemplifies our commitment to eco-innovation.<br/><br/> By utilizing reclaimed materials through solutions such as Asphalt Rubber and Asphalt Modified with Post-Consumer Plastic, we not only enhance the performance of our asphalts but support the development of eco-friendly roadways.</p>
                <button className="bg-go-green w-full flex justify-center gap-2 py-3 rounded-full md:max-w-[162px]">
                  Learn More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="my-10 flex flex-wrap justify-center gap-11 w-full">
          <div className="bg-white max-w-[396px] rounded-lg flex flex-col items-center justify-end gap-4 px-4 py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:drop-shadow-xl lg:items-start">
              <div className="flex justify-between w-full">
                <p className="text-black-600 font-bold text-[24px]">1,600,000+</p>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.13098 24.8756H11.6847C10.3084 23.6037 9.34732 21.9458 8.92705 20.1185C8.50677 18.2913 8.64683 16.3796 9.32894 14.6332C10.011 12.8869 11.2035 11.3871 12.7504 10.3298C14.2974 9.27255 16.1269 8.70697 18 8.70697C19.8731 8.70697 21.7026 9.27255 23.2496 10.3298C24.7965 11.3871 25.989 12.8869 26.6711 14.6332C27.3532 16.3796 27.4932 18.2913 27.073 20.1185C26.6527 21.9458 25.6916 23.6037 24.3153 24.8756H30.5255C31.6752 22.7815 32.2773 20.4303 32.2758 18.0407C32.2758 17.8759 32.3412 17.7179 32.4576 17.6014C32.574 17.4848 32.7319 17.4194 32.8965 17.4194C33.0611 17.4194 33.219 17.4848 33.3354 17.6014C33.4518 17.7179 33.5172 17.8759 33.5172 18.0407C33.5199 20.4109 32.9766 22.7498 31.9297 24.8756H32.869C33.4313 24.8758 33.9883 24.9853 34.509 25.1981C35.6991 22.4562 36.189 19.461 35.9346 16.4824C35.6802 13.5038 34.6895 10.6353 33.0518 8.13545C31.4141 5.6356 29.1809 3.58293 26.5533 2.16238C23.9257 0.74183 20.9863 -0.00195312 18 -0.00195312C15.0137 -0.00195312 12.0743 0.74183 9.44674 2.16238C6.81914 3.58293 4.58588 5.6356 2.94818 8.13545C1.31048 10.6353 0.31981 13.5038 0.0654288 16.4824C-0.188953 19.461 0.30095 22.4562 1.49099 25.1981C2.01166 24.9853 2.56862 24.8758 3.13098 24.8756ZM18 2.50687C18.1646 2.50687 18.3225 2.57234 18.4389 2.68886C18.5553 2.80539 18.6207 2.96343 18.6207 3.12823C18.6207 3.29302 18.5553 3.45106 18.4389 3.56759C18.3225 3.68412 18.1646 3.74958 18 3.74958C14.2151 3.75389 10.5865 5.26094 7.91017 7.94012C5.23386 10.6193 3.72841 14.2518 3.72411 18.0407C3.72411 18.2055 3.65872 18.3636 3.54231 18.4801C3.42591 18.5966 3.26804 18.6621 3.10342 18.6621C2.9388 18.6621 2.78093 18.5966 2.66453 18.4801C2.54813 18.3636 2.48273 18.2055 2.48273 18.0407C2.48735 13.9223 4.12368 9.9739 7.03272 7.06174C9.94177 4.14958 13.886 2.51149 18 2.50687Z" fill="#26B11A"/>
                  <path d="M32.869 26.0981H3.13101C2.30084 26.099 1.50494 26.4282 0.917957 27.0134C0.33097 27.5986 0.000837876 28.392 0 29.2196V32.8764C0.000805019 33.704 0.330923 34.4975 0.917914 35.0827C1.5049 35.6679 2.30082 35.9971 3.13101 35.9981H32.869C33.6992 35.9971 34.4951 35.668 35.082 35.0827C35.669 34.4975 35.9992 33.7041 36 32.8765V29.2197C35.9992 28.3921 35.6691 27.5986 35.0821 27.0134C34.4951 26.4282 33.6992 26.099 32.869 26.0981ZM32.8966 32.2856C32.5844 32.2801 32.2776 32.2036 31.9997 32.0619C31.7217 31.9202 31.4799 31.7171 31.2927 31.468C31.0159 31.1695 30.8917 31.0481 30.6008 31.0481C30.3099 31.0481 30.1856 31.1695 29.9086 31.468C29.7254 31.7211 29.4846 31.9272 29.2059 32.0693C28.9272 32.2114 28.6187 32.2856 28.3056 32.2856C27.9926 32.2856 27.684 32.2114 27.4053 32.0693C27.1267 31.9272 26.8858 31.7211 26.7027 31.468C26.4263 31.1689 26.3027 31.0481 26.0131 31.0481C25.7236 31.0481 25.5997 31.1689 25.3233 31.468C25.1404 31.7211 24.8997 31.9273 24.6212 32.0695C24.3426 32.2117 24.0342 32.2858 23.7212 32.2857C23.4083 32.2857 23.0999 32.2114 22.8214 32.0691C22.5429 31.9269 22.3023 31.7206 22.1195 31.4674C21.8429 31.1689 21.7193 31.0481 21.4299 31.0481C21.1404 31.0481 21.0165 31.1689 20.7401 31.468C20.5571 31.721 20.3165 31.9271 20.0379 32.0693C19.7594 32.2114 19.4509 32.2855 19.138 32.2855C18.8251 32.2855 18.5167 32.2114 18.2381 32.0693C17.9596 31.9271 17.7189 31.721 17.536 31.468C17.2596 31.1689 17.1359 31.0481 16.8462 31.0481C16.5565 31.0481 16.4328 31.1689 16.1564 31.468C15.9735 31.7211 15.7329 31.9273 15.4544 32.0695C15.1758 32.2117 14.8673 32.2858 14.5544 32.2857C14.2415 32.2857 13.933 32.2114 13.6545 32.0691C13.376 31.9269 13.1355 31.7206 12.9527 31.4674C12.6763 31.1689 12.5526 31.0481 12.2637 31.0481C11.9748 31.0481 11.8513 31.1689 11.5754 31.4674C11.3927 31.7206 11.1521 31.9268 10.8737 32.0691C10.5952 32.2114 10.2868 32.2856 9.97386 32.2856C9.66095 32.2856 9.35253 32.2114 9.07405 32.0691C8.79558 31.9268 8.55504 31.7206 8.3723 31.4674C8.09566 31.1689 7.97201 31.0481 7.68252 31.0481C7.39303 31.0481 7.27039 31.1689 6.99455 31.4674C6.80801 31.7164 6.56678 31.9197 6.28932 32.0615C6.01187 32.2033 5.70554 32.2799 5.39379 32.2856C5.08192 32.2801 4.77544 32.2036 4.49785 32.0617C4.22027 31.9199 3.97895 31.7166 3.79241 31.4674C3.51621 31.1689 3.39257 31.0481 3.10345 31.0481C2.93883 31.0481 2.78096 30.9829 2.66455 30.8668C2.54815 30.7508 2.48276 30.5934 2.48276 30.4293C2.48276 30.2652 2.54815 30.1078 2.66455 29.9918C2.78096 29.8757 2.93883 29.8106 3.10345 29.8106C3.41532 29.816 3.72181 29.8925 3.99939 30.0344C4.27698 30.1762 4.51829 30.3795 4.70483 30.6287C4.98122 30.9272 5.10486 31.0481 5.39379 31.0481C5.68272 31.0481 5.80599 30.9272 6.08177 30.6287C6.26444 30.3755 6.50494 30.1692 6.78339 30.0269C7.06183 29.8846 7.37024 29.8104 7.68314 29.8104C7.99605 29.8104 8.30446 29.8846 8.5829 30.0269C8.86135 30.1692 9.10185 30.3755 9.28452 30.6287C9.56092 30.9272 9.68456 31.0481 9.97399 31.0481C10.2634 31.0481 10.3868 30.9272 10.663 30.6287C10.8456 30.3756 11.086 30.1693 11.3644 30.0271C11.6428 29.8848 11.9511 29.8106 12.2639 29.8105C12.5767 29.8105 12.8851 29.8846 13.1635 30.0267C13.4419 30.1689 13.6825 30.375 13.8652 30.6281C14.1416 30.9272 14.2652 31.0481 14.5547 31.0481C14.8441 31.0481 14.9681 30.9272 15.2445 30.6281C15.4275 30.3751 15.6681 30.169 15.9467 30.0268C16.2252 29.8847 16.5336 29.8106 16.8465 29.8106C17.1595 29.8106 17.4679 29.8847 17.7464 30.0268C18.0249 30.169 18.2656 30.3751 18.4486 30.6281C18.725 30.9272 18.8486 31.0481 19.1383 31.0481C19.4281 31.0481 19.5517 30.9272 19.8281 30.6281C20.011 30.375 20.2516 30.1688 20.5302 30.0266C20.8087 29.8844 21.1172 29.8103 21.4302 29.8104C21.7431 29.8104 22.0515 29.8847 22.33 30.027C22.6085 30.1692 22.8491 30.3755 23.0319 30.6287C23.3083 30.9272 23.432 31.0481 23.7214 31.0481C24.0108 31.0481 24.1348 30.9272 24.4112 30.6281C24.5941 30.3751 24.8348 30.169 25.1133 30.0268C25.3919 29.8847 25.7003 29.8106 26.0132 29.8106C26.3261 29.8106 26.6345 29.8847 26.9131 30.0268C27.1916 30.169 27.4323 30.3751 27.6152 30.6281C27.8916 30.9266 28.0156 31.0481 28.3053 31.0481C28.5963 31.0481 28.7202 30.9266 28.9973 30.6281C29.1806 30.375 29.4215 30.1689 29.7003 30.0268C29.9791 29.8847 30.2878 29.8106 30.601 29.8106C30.9141 29.8106 31.2228 29.8847 31.5016 30.0268C31.7804 30.1689 32.0214 30.375 32.2047 30.6281C32.4814 30.9266 32.6056 31.0481 32.8966 31.0481C33.0612 31.0481 33.219 31.1132 33.3354 31.2293C33.4519 31.3453 33.5172 31.5027 33.5172 31.6668C33.5172 31.8309 33.4519 31.9883 33.3354 32.1043C33.219 32.2204 33.0612 32.2856 32.8966 32.2856Z" fill="#26B11A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3799 23.417C24.0616 23.417 26.9922 19.0212 22.0688 14.9184C23.5927 20.0762 19.5485 19.8417 17.3799 19.9003V17.9076L13.1013 21.6587L17.3799 25.4098V23.417Z" fill="#26B11A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3177 11.1673C11.636 11.1673 8.70547 15.5631 13.6288 19.6073C12.1049 14.5081 16.1491 14.7426 18.3177 14.684V16.6181L22.5963 12.9256L18.3177 9.17453V11.1673Z" fill="#26B11A"/>
                </svg>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-go-green font-normal text-[22px]/[34px] text-left lg:font-medium lg:text-[24px]/[20px] lg:text-start">Recycled Tires</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-left lg:text-start">Fully repurposed to work with Asphalt Modified with Recycled Rubber Grain, since 2009. As of 2023, we offer this product for Warm Mix applications.</p>
              </div>
              <button className="bg-white text-black-800 w-full flex justify-start gap-2 pt-3">
                  Read More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
            <div className="bg-white max-w-[396px] rounded-lg flex flex-col items-center justify-end gap-4 px-4 py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:drop-shadow-xl lg:items-start">
              <div className="flex justify-between w-full">
                <p className="text-black-600 font-bold text-[24px]">4,550,000+</p>
                <svg width="33" height="40" viewBox="0 0 33 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33 34.2068L32.8788 28.0936L32.9838 25.021L32.5313 21.9884L32.3051 18.8278C32.297 18.772 32.297 18.7155 32.3051 18.6597L32.7576 15.6191L32.4909 9.33787C32.4869 9.30063 32.4869 9.26308 32.4909 9.22585L32.798 6.0252L32.394 2.82456C32.3862 2.76078 32.3862 2.69631 32.394 2.63253L32.6849 0.232046L30.4062 0.616123C30.3048 0.635557 30.2006 0.635557 30.0992 0.616123L27.0771 0L24.5722 0.112022L24.4187 6.05721V9.25785L24.847 12.5625C24.8637 12.6823 24.8527 12.8044 24.8149 12.9194C24.7771 13.0344 24.7135 13.1395 24.6288 13.2266C24.5448 13.3126 24.4423 13.3787 24.3291 13.4203C24.2158 13.4618 24.0946 13.4777 23.9743 13.4667L20.9523 13.1786L18.108 13.5067C18.0463 13.5148 17.9838 13.5148 17.9221 13.5067L15.0132 13.1786L12.1043 13.5627C12.024 13.5748 11.9422 13.5748 11.8619 13.5627L9.13883 13.0906C8.94911 13.0582 8.77731 12.9598 8.65435 12.8131C8.53139 12.6664 8.46537 12.4811 8.46817 12.2905L8.41161 9.32186V6.04121L8.57321 2.79256L8.41161 0.160032L5.90671 0.264053L2.82003 0.712142C2.75835 0.720194 2.69586 0.720194 2.63418 0.712142L0.51714 0.544109L0.476739 2.75255L0.76763 5.95319C0.771602 5.98508 0.771602 6.01732 0.76763 6.04921L0.646425 9.31386L0.412096 12.5945L0 15.6191L0.606024 18.5797C0.609997 18.6276 0.609997 18.6758 0.606024 18.7237L0.662585 21.8284V24.949C0.666568 24.9755 0.666568 25.0025 0.662585 25.029L0.331293 28.0616L0.654505 31.0702C0.658502 31.1101 0.658502 31.1503 0.654505 31.1902L0.51714 34.2949L0.250489 37.3515L0.533301 39.5839L2.69882 40L5.6643 39.792H5.76126L8.83986 39.952H11.8053L14.8112 39.4479H14.989L18.0595 39.6159L21.1139 39.976L24.1197 39.8L27.2307 39.7519L30.285 39.5919L32.5556 39.6639L32.4263 37.4315C32.4185 37.3677 32.4185 37.3032 32.4263 37.2394L33 34.2068ZM9.05803 20.8042L14.5122 15.4031C14.5877 15.3289 14.6773 15.2702 14.7757 15.2304C14.8742 15.1906 14.9796 15.1704 15.0859 15.171H17.3727C17.5847 15.1719 17.7878 15.2553 17.9383 15.4031L20.7341 18.1716L20.8391 17.9156C20.9036 17.7589 21.0165 17.6265 21.1617 17.5374C21.3068 17.4483 21.4768 17.407 21.6472 17.4195C21.816 17.4284 21.9778 17.4896 22.1097 17.5944C22.2417 17.6991 22.337 17.8423 22.3825 18.0036L24.0713 23.8608C24.1131 24.0004 24.1157 24.1488 24.0787 24.2898C24.0416 24.4308 23.9664 24.5591 23.8612 24.6609C23.7863 24.7365 23.6971 24.7967 23.5986 24.8379C23.5001 24.8791 23.3944 24.9005 23.2875 24.901C23.2152 24.9126 23.1415 24.9126 23.0693 24.901L17.1303 23.2046C16.9701 23.1587 16.8282 23.0648 16.7241 22.9359C16.6199 22.807 16.5586 22.6493 16.5485 22.4845C16.5359 22.3158 16.5775 22.1475 16.6676 22.0037C16.7576 21.86 16.8913 21.7481 17.0495 21.6843L17.3 21.6043L16.2172 20.5321L12.4518 24.2368C12.3004 24.3859 12.0956 24.4695 11.8821 24.4695C11.6686 24.4695 11.4638 24.3859 11.3124 24.2368L9.05803 21.9724C8.9773 21.8975 8.91294 21.8071 8.86895 21.7066C8.82495 21.6061 8.80225 21.4978 8.80225 21.3883C8.80225 21.2788 8.82495 21.1704 8.86895 21.0699C8.91294 20.9695 8.9773 20.879 9.05803 20.8042ZM15.5223 34.2388L14.7142 37.3355C14.6605 37.5405 14.5268 37.716 14.3426 37.8236C14.2194 37.8927 14.0801 37.9286 13.9385 37.9276C13.8688 37.9359 13.7982 37.9359 13.7285 37.9276L6.27032 35.9512C6.06492 35.8941 5.89064 35.7589 5.7855 35.5751L4.62194 33.6067C4.56874 33.5156 4.53422 33.415 4.52036 33.3106C4.50649 33.2063 4.51355 33.1002 4.54114 32.9986L5.56734 29.2138H5.2926C5.12509 29.2384 4.95401 29.2103 4.80352 29.1334C4.65304 29.0565 4.53076 28.9347 4.45395 28.7852C4.37715 28.6358 4.34971 28.4662 4.3755 28.3005C4.40129 28.1347 4.47902 27.9812 4.5977 27.8616L8.88026 23.4847C8.98306 23.3805 9.11265 23.306 9.25504 23.2693C9.39744 23.2327 9.54725 23.2352 9.6883 23.2767C9.827 23.3135 9.95326 23.3864 10.0541 23.4876C10.1549 23.5889 10.2267 23.7149 10.262 23.8528L11.7649 29.766C11.806 29.9271 11.7954 30.0968 11.7345 30.2517C11.6737 30.4065 11.5657 30.5388 11.4256 30.6301C11.2932 30.7148 11.1387 30.7593 10.9811 30.7581C10.8026 30.7576 10.6293 30.6985 10.4882 30.5901L10.2701 30.4221L9.87414 31.8784L14.9809 33.2386C15.1875 33.2931 15.3638 33.4264 15.4714 33.6094C15.5789 33.7924 15.6088 34.0101 15.5546 34.2148L15.5223 34.2388ZM28.4508 33.2066L27.3599 35.207C27.307 35.2989 27.2361 35.3794 27.1515 35.4439C27.0669 35.5085 26.9702 35.5558 26.867 35.5831L23.0531 36.5913L23.2228 36.8074C23.3172 36.9256 23.3759 37.0678 23.3922 37.2176C23.4085 37.3674 23.3818 37.5188 23.3151 37.6542C23.2484 37.7896 23.1445 37.9037 23.0152 37.9832C22.8859 38.0627 22.7366 38.1044 22.5845 38.1036C22.5201 38.1113 22.455 38.1113 22.3905 38.1036L16.4192 36.6153C16.28 36.5804 16.1527 36.5093 16.0504 36.4095C15.9482 36.3096 15.8747 36.1846 15.8374 36.0472C15.7965 35.9068 15.7953 35.758 15.8337 35.617C15.8722 35.4759 15.9489 35.348 16.0556 35.247L20.4674 31.0062C20.5878 30.8896 20.742 30.8132 20.9083 30.7876C21.0747 30.762 21.245 30.7885 21.3954 30.8634C21.5459 30.9384 21.6689 31.0579 21.7473 31.2055C21.8258 31.353 21.8557 31.5211 21.833 31.6863V31.9584L23.3117 31.5663L21.9057 26.4933C21.8775 26.3919 21.8698 26.286 21.883 26.1816C21.8961 26.0773 21.93 25.9765 21.9825 25.8851C22.035 25.7937 22.1052 25.7134 22.1891 25.6489C22.273 25.5844 22.3689 25.5369 22.4714 25.5091L25.5984 24.7089C25.8002 24.6651 26.0113 24.6995 26.1883 24.805C26.3725 24.9125 26.5062 25.0881 26.56 25.2931L28.6124 32.6305C28.6565 32.8391 28.619 33.0565 28.5073 33.2386L28.4508 33.2066Z" fill="#26B11A"/>
                  <path d="M7.27231 27.7735C7.30121 27.8038 7.3282 27.8359 7.35312 27.8695C7.44404 28.027 7.47823 28.2104 7.45008 28.3896C7.45008 28.3896 7.45008 28.4536 7.45008 28.4856L6.73901 31.1102L8.29851 31.5263L9.00958 28.8937C9.0288 28.8661 9.04505 28.8366 9.05806 28.8057C9.12279 28.6385 9.24229 28.4976 9.39744 28.4056H9.50248C9.5645 28.3772 9.62955 28.3557 9.69641 28.3416L9.03382 25.7251L7.13495 27.6615C7.18545 27.6928 7.23163 27.7304 7.27231 27.7735Z" fill="#26B11A"/>
                  <path d="M8.65395 33.2786L6.31066 32.6545L6.18945 33.1106L6.99748 34.4949L13.3486 36.1832L13.7688 34.6309L8.66203 33.2786H8.65395Z" fill="#26B11A"/>
                  <path d="M20.9119 35.8713C20.9232 35.8244 20.9394 35.7788 20.9604 35.7353C21.0845 35.5635 21.2555 35.4303 21.4533 35.3512L24.1117 34.647L23.6915 33.0947L21.0412 33.7989C20.969 33.8111 20.8952 33.8111 20.823 33.7989C20.6822 33.8023 20.5429 33.7692 20.419 33.7029C20.3851 33.6782 20.3527 33.6515 20.322 33.6228C20.2724 33.5844 20.2265 33.5415 20.1847 33.4948L18.2292 35.3752L20.8715 36.0313C20.8797 35.9768 20.8932 35.9232 20.9119 35.8713Z" fill="#26B11A"/>
                  <path d="M21.34 20.3561C21.2911 20.3768 21.2394 20.3903 21.1865 20.3961C21.1354 20.3999 21.0841 20.3999 21.033 20.3961C20.912 20.401 20.7919 20.3733 20.6855 20.3161C20.5991 20.2793 20.5198 20.2278 20.4512 20.164L18.5119 18.2437L17.3645 19.3799L19.3119 21.3003C19.3694 21.363 19.4183 21.4329 19.4573 21.5083C19.5143 21.6229 19.5447 21.7487 19.5462 21.8764C19.5501 21.9216 19.5501 21.9672 19.5462 22.0124C19.5536 22.0682 19.5536 22.1247 19.5462 22.1804L22.1642 22.9166L21.34 20.3561Z" fill="#26B11A"/>
                  <path d="M15.6515 18.8359L17.3726 17.1315L17.0332 16.8035H15.4172L10.771 21.4044L11.9184 22.5406L15.6515 18.8359Z" fill="#26B11A"/>
                  <path d="M23.6753 26.8534L25.0409 31.9104L25.6711 34.2308L26.1317 34.1108L26.9397 32.7265L25.2348 26.4373L23.6753 26.8534Z" fill="#26B11A"/>
              </svg>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-go-green font-normal text-[22px]/[34px] text-left lg:font-medium lg:text-[24px]/[20px] lg:text-start">Recycled Plastic Bags</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-left lg:text-start">Reused when modifying asphalt with 6,500 kg of recycled plastic, starting in 2022. Reach out for further information about its application.</p>
              </div>
              <button className="bg-white text-black-800 w-full flex justify-start gap-2 pt-3">
                  Read More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
            <div className="bg-white max-w-[396px] rounded-lg flex flex-col items-center justify-end gap-4 px-4 py-3 transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:drop-shadow-xl lg:items-start">
              <div className="flex justify-between w-full">
                <p className="text-black-600 font-bold text-[24px]">25%</p>
                <svg width="47" height="36" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.89472 3.18896L8.92587 6.96679H17.6769L17.9923 3.2151L9.89472 3.18896Z" fill="#26B11A"/>
                  <path d="M5.61484 19.8686C5.60264 19.9122 5.61832 19.9453 5.634 19.9662L16.5876 19.9801L17.0895 13.9893H7.12388L5.61484 19.8686Z" fill="#26B11A"/>
                  <path d="M18.2255 13.9874L17.7254 19.98L28.7208 19.9922L28.2172 13.9874H18.2255Z" fill="#26B11A"/>
                  <path d="M27.3172 3.2446L19.1256 3.21846L18.8119 6.96666H27.6292L27.3172 3.2446Z" fill="#26B11A"/>
                  <path d="M27.7235 8.10097H18.718L18.3207 12.8529H28.1225L27.7235 8.10097Z" fill="#26B11A"/>
                  <path d="M7.41517 12.8529H17.1856L17.5829 8.10097H8.63494L7.41517 12.8529Z" fill="#26B11A"/>
                  <path d="M46.3917 22.552L39.568 0.782399C39.4216 0.313656 38.9929 0 38.5033 0H7.93911C7.44946 0 7.02079 0.3154 6.87442 0.780658L0.0523745 22.552C-0.055663 22.8935 0.00532595 23.2542 0.217916 23.5435C0.430506 23.8345 0.758103 24 1.11707 24H45.3288C45.6878 24 46.0154 23.8345 46.2279 23.5435C46.4388 23.2542 46.4998 22.8935 46.3917 22.552ZM41.7026 20.6613C41.4656 20.9662 41.1066 21.1405 40.7198 21.1405H5.72434C5.3375 21.1405 4.97854 20.9645 4.74155 20.6613C4.50456 20.3581 4.42266 19.9678 4.51676 19.5931L8.6884 3.00065C8.82781 2.44653 9.32443 2.05794 9.89598 2.05794H36.5499C37.1232 2.05794 37.6198 2.44653 37.7575 3.00065L41.9291 19.5931C42.0215 19.966 41.9396 20.3564 41.7026 20.6613Z" fill="#26B11A"/>
                  <path d="M29.3527 13.9874L29.8563 19.9939L40.7193 20.0079L40.829 19.8685L39.3496 13.9874H29.3527Z" fill="#26B11A"/>
                  <path d="M36.6581 3.2744L28.4559 3.24826L28.7661 6.96684H37.5868L36.6581 3.2744Z" fill="#26B11A"/>
                  <path d="M37.8704 8.10097H28.8615L29.2588 12.8529H39.0658L37.8704 8.10097Z" fill="#26B11A"/>
              </svg>
              </div>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-go-green font-normal text-[22px]/[34px] text-left lg:font-medium lg:text-[24px]/[20px] lg:text-start">Solar Energy</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-left lg:text-start">Barrancabermeja is Colombia's Sun City and the location for our main production plant, equipped with solar panels that are dedicated to our ongoing operation.</p>
              </div>
              <button className="bg-white text-black-800 w-full flex justify-start gap-2 pt-3">
                  Read More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary px-4 py-24 lg:px-12">
        <div className="mx-auto flex flex-col gap-4">
          <div className="flex flex-wrap justify-between gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-black-800 font-bold text-[24px] min-w-[181px] lg:font-semibold lg:text-[36px]/[43px]">About MPI</p>
              <button className="bg-transparent text-black-800 font-medium text-sm border-2 border-black-800 rounded-full w-[165px] hidden justify-center gap-2 py-3 my-4 sm:flex">
                  Learn More
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
              </button>
            </div>
            <p className="text-black-800 font-medium text-[16px]/[26px] max-w-[831px] lg:font-medium lg:text-[32px]/[42px]">MPI turned 50 this year, and our vision for the next 50 goes beyond infrastructure; we're committed to the economic development and environmental preservation that roads bring to our society.</p>
          </div>
          <hr className="lg:my-16"/>
          <p className="text-black-800 font-bold text-[24px] md:font-semibold lg:text-[36px]/[43px]">In Number</p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white max-w-[306px] flex flex-col items-start justify-end gap-8 px-4 py-6 rounded-lg lg:items-start">
              <p className="text-black-800 border-2 border-black-800 rounded-full py-2 px-4 font-bold text-[24px]">09</p>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-dark-yellow-400 font-normal text-[22px]/[34px] text-start lg:font-medium lg:text-[24px]/[20px] lg:text-start">Countries</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-start lg:text-start">We currently participate in 9 different countries located in North, South, and Central America.</p>
              </div>
            </div>
            <div className="bg-white max-w-[306px] flex flex-col items-start justify-end gap-8 px-4 py-6 rounded-lg lg:items-start">
              <p className="text-black-800 border-2 border-black-800 rounded-full py-2 px-4 font-bold text-[24px]">04</p>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-dark-yellow-400 font-normal text-[22px]/[34px] text-start lg:font-medium lg:text-[24px]/[20px] lg:text-start">Asphalt Plants</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-start lg:text-start">All strategically placed within Colombia to cover national and international markets..</p>
              </div>
            </div>
            <div className="bg-white max-w-[306px] flex flex-col items-start justify-end gap-8 px-4 py-6 rounded-lg lg:items-start">
              <p className="text-black-800 border-2 border-black-800 rounded-full py-2 px-4 font-bold text-[24px]">06</p>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-dark-yellow-400 font-normal text-[22px]/[34px] text-start lg:font-medium lg:text-[24px]/[20px] lg:text-start">Emulsion Plants</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-start lg:text-start">3 fixed and 3 portable emulsion plants distributed to optimize project logistics in LATAM</p>
              </div>
            </div>
            <div className="bg-white max-w-[306px] flex flex-col items-start justify-end gap-8 px-4 py-6 rounded-lg lg:items-start">
              <p className="text-black-800 border-2 border-black-800 rounded-full py-2 px-4 font-bold text-[24px]">126</p>
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="text-dark-yellow-400 font-normal text-[22px]/[34px] text-start lg:font-medium lg:text-[24px]/[20px] lg:text-start">People</p>
                <p className="text-black-600 font-normal text-[14px]/[22px] text-start lg:text-start">Our MPI team is made up of 100+ experts determined to play a heavy part in road solutions.</p>
              </div>
            </div>
          </div>
          <button className="bg-transparent text-black-800 font-medium text-sm border-2 border-black-800 rounded-full w-full flex justify-center gap-2 py-3 my-10 sm:hidden">
              Read More
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H19.5M19.5 12L15.5 16M19.5 12L15.5 8" stroke="#373632" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </button>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto py-12 p-2 lg:px-24">
          <p className="text-black-800 font-bold text-[24px] text-center lg:py-[110px] lg:text-[48px]/[55px] sm:text-left lg:border-2 lg:border-white lg:border-b-black-500">Our Projects</p>
          <div className="w-full mt-4 flex flex-col gap-8">
            <div className="flex flex-wrap gap-6 py-8 border-2 border-white border-b-black-500">
              <Image src={"/airport_application.png"} alt="Airport Application" width={396} height={247}/>
              <div className="flex flex-col gap-2 text-black-800 max-w-[653px]">
                <p className="font-normal text-[22px]/[34px] lg:font-semibold lg:text-[24px]/[32px] lg:text-dark-yellow-500">Airport Applications</p>
                <p className="font-normal text-[14px]/[22px] lg:text-[15px]/[22px] lg:text-dark-yellow-500">Rubberized Asphalt application at Ernesto Cortissoz Airport (BAQ) provides greater durability and slip resistance, optimizing safety.</p>
                <div className="max-w-[313px] flex justify-between font-normal text-[14px]/[16px] mt-auto">
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3033 3.86334C16.6803 5.24012 17.4678 7.09844 17.4993 9.04535C17.5309 10.9923 16.8041 12.8751 15.4725 14.2958L15.3033 14.4708L11.7675 18.0058C11.3188 18.4542 10.7165 18.7153 10.0826 18.7362C9.44868 18.757 8.83051 18.5362 8.35332 18.1183L8.23332 18.0058L4.69665 14.47C3.29012 13.0635 2.49994 11.1558 2.49994 9.16667C2.49994 7.17754 3.29012 5.26987 4.69665 3.86334C6.10318 2.45681 8.01085 1.66663 9.99999 1.66663C11.9891 1.66663 13.8968 2.45681 15.3033 3.86334ZM9.99999 6.66667C9.67168 6.66667 9.34659 6.73134 9.04328 6.85697C8.73996 6.98261 8.46437 7.16676 8.23222 7.3989C8.00007 7.63105 7.81592 7.90665 7.69029 8.20996C7.56465 8.51328 7.49999 8.83837 7.49999 9.16667C7.49999 9.49498 7.56465 9.82007 7.69029 10.1234C7.81592 10.4267 8.00007 10.7023 8.23222 10.9344C8.46437 11.1666 8.73996 11.3507 9.04328 11.4764C9.34659 11.602 9.67168 11.6667 9.99999 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86775 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 9.99999 6.66667Z" fill="#666561"/>
                    </svg>
                    <p>Barranquilla, Colombia</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.1667 2.78336C15.4236 3.50907 16.4691 4.55046 17.1999 5.80444C17.9306 7.05842 18.3212 8.4815 18.3329 9.9328C18.3446 11.3841 17.9771 12.8133 17.2667 14.0789C16.5563 15.3446 15.5277 16.4027 14.2827 17.1486C13.0377 17.8945 11.6195 18.3024 10.1684 18.3317C8.71738 18.3611 7.28381 18.011 6.00965 17.3161C4.73549 16.6211 3.66491 15.6055 2.90391 14.3696C2.14291 13.1338 1.71786 11.7206 1.67085 10.27L1.66669 10L1.67085 9.73002C1.71752 8.29085 2.13631 6.88832 2.88639 5.65918C3.63646 4.43004 4.69223 3.41623 5.95076 2.71659C7.2093 2.01695 8.62764 1.65535 10.0675 1.66705C11.5074 1.67875 12.9197 2.06335 14.1667 2.78336ZM10 5.00002C9.79591 5.00005 9.59891 5.07499 9.44638 5.21062C9.29385 5.34625 9.1964 5.53315 9.17252 5.73586L9.16669 5.83336V10L9.17419 10.1092C9.19319 10.2538 9.2498 10.3908 9.33835 10.5067L9.41085 10.59L11.9109 13.09L11.9892 13.1584C12.1353 13.2717 12.315 13.3333 12.5 13.3333C12.685 13.3333 12.8647 13.2717 13.0109 13.1584L13.0892 13.0892L13.1584 13.0109C13.2717 12.8647 13.3333 12.685 13.3333 12.5C13.3333 12.315 13.2717 12.1353 13.1584 11.9892L13.0892 11.9109L10.8334 9.65419V5.83336L10.8275 5.73586C10.8036 5.53315 10.7062 5.34625 10.5537 5.21062C10.4011 5.07499 10.2041 5.00005 10 5.00002Z" fill="#666561"/>
                    </svg>
                    <p>2015-2017</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 py-8 border-2 border-white border-b-black-500">
              <Image src={"/airport_application.png"} alt="Airport Application" width={396} height={247}/>
              <div className="flex flex-col gap-2 text-black-800 max-w-[653px]">
                <p className="font-normal text-[22px]/[34px] lg:font-semibold lg:text-[24px]/[32px] lg:text-dark-yellow-500">Warm Mix in Vía Murillo</p>
                <p className="font-normal text-[14px]/[22px] lg:text-[15px]/[22px] lg:text-dark-yellow-500">Rubberized Asphalt (Warm Mix) provides greater elasticity that lets it withstand extreme temperature changes faced by the Murillo-Esperanza highway.Rubberized Asphalt application at Ernesto Cortissoz Airport (BAQ) provides greater durability and slip resistance, optimizing safety.</p>
                <div className="max-w-[313px] flex justify-between font-normal text-[14px]/[16px] mt-auto">
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3033 3.86334C16.6803 5.24012 17.4678 7.09844 17.4993 9.04535C17.5309 10.9923 16.8041 12.8751 15.4725 14.2958L15.3033 14.4708L11.7675 18.0058C11.3188 18.4542 10.7165 18.7153 10.0826 18.7362C9.44868 18.757 8.83051 18.5362 8.35332 18.1183L8.23332 18.0058L4.69665 14.47C3.29012 13.0635 2.49994 11.1558 2.49994 9.16667C2.49994 7.17754 3.29012 5.26987 4.69665 3.86334C6.10318 2.45681 8.01085 1.66663 9.99999 1.66663C11.9891 1.66663 13.8968 2.45681 15.3033 3.86334ZM9.99999 6.66667C9.67168 6.66667 9.34659 6.73134 9.04328 6.85697C8.73996 6.98261 8.46437 7.16676 8.23222 7.3989C8.00007 7.63105 7.81592 7.90665 7.69029 8.20996C7.56465 8.51328 7.49999 8.83837 7.49999 9.16667C7.49999 9.49498 7.56465 9.82007 7.69029 10.1234C7.81592 10.4267 8.00007 10.7023 8.23222 10.9344C8.46437 11.1666 8.73996 11.3507 9.04328 11.4764C9.34659 11.602 9.67168 11.6667 9.99999 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86775 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 9.99999 6.66667Z" fill="#666561"/>
                    </svg>
                    <p>Colombia</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.1667 2.78336C15.4236 3.50907 16.4691 4.55046 17.1999 5.80444C17.9306 7.05842 18.3212 8.4815 18.3329 9.9328C18.3446 11.3841 17.9771 12.8133 17.2667 14.0789C16.5563 15.3446 15.5277 16.4027 14.2827 17.1486C13.0377 17.8945 11.6195 18.3024 10.1684 18.3317C8.71738 18.3611 7.28381 18.011 6.00965 17.3161C4.73549 16.6211 3.66491 15.6055 2.90391 14.3696C2.14291 13.1338 1.71786 11.7206 1.67085 10.27L1.66669 10L1.67085 9.73002C1.71752 8.29085 2.13631 6.88832 2.88639 5.65918C3.63646 4.43004 4.69223 3.41623 5.95076 2.71659C7.2093 2.01695 8.62764 1.65535 10.0675 1.66705C11.5074 1.67875 12.9197 2.06335 14.1667 2.78336ZM10 5.00002C9.79591 5.00005 9.59891 5.07499 9.44638 5.21062C9.29385 5.34625 9.1964 5.53315 9.17252 5.73586L9.16669 5.83336V10L9.17419 10.1092C9.19319 10.2538 9.2498 10.3908 9.33835 10.5067L9.41085 10.59L11.9109 13.09L11.9892 13.1584C12.1353 13.2717 12.315 13.3333 12.5 13.3333C12.685 13.3333 12.8647 13.2717 13.0109 13.1584L13.0892 13.0892L13.1584 13.0109C13.2717 12.8647 13.3333 12.685 13.3333 12.5C13.3333 12.315 13.2717 12.1353 13.1584 11.9892L13.0892 11.9109L10.8334 9.65419V5.83336L10.8275 5.73586C10.8036 5.53315 10.7062 5.34625 10.5537 5.21062C10.4011 5.07499 10.2041 5.00005 10 5.00002Z" fill="#666561"/>
                    </svg>
                    <p>2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 py-8 border-2 border-white border-b-black-500">
              <Image src={"/airport_application.png"} alt="Airport Application" width={396} height={247}/>
              <div className="flex flex-col gap-2 text-black-800 max-w-[653px]">
                <p className="font-normal text-[22px]/[34px] lg:font-semibold lg:text-[24px]/[32px] lg:text-dark-yellow-500">La Virgen Wetlands</p>
                <p className="font-normal text-[14px]/[22px] lg:text-[15px]/[22px] lg:text-dark-yellow-500">Rubberized Asphalt, applied on the longest viaduct in the country (5.4 km), absorbs traffic noise to protect the La Virgen Wetlands.</p>
                <div className="max-w-[313px] flex justify-between font-normal text-[14px]/[16px] mt-auto">
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.3033 3.86334C16.6803 5.24012 17.4678 7.09844 17.4993 9.04535C17.5309 10.9923 16.8041 12.8751 15.4725 14.2958L15.3033 14.4708L11.7675 18.0058C11.3188 18.4542 10.7165 18.7153 10.0826 18.7362C9.44868 18.757 8.83051 18.5362 8.35332 18.1183L8.23332 18.0058L4.69665 14.47C3.29012 13.0635 2.49994 11.1558 2.49994 9.16667C2.49994 7.17754 3.29012 5.26987 4.69665 3.86334C6.10318 2.45681 8.01085 1.66663 9.99999 1.66663C11.9891 1.66663 13.8968 2.45681 15.3033 3.86334ZM9.99999 6.66667C9.67168 6.66667 9.34659 6.73134 9.04328 6.85697C8.73996 6.98261 8.46437 7.16676 8.23222 7.3989C8.00007 7.63105 7.81592 7.90665 7.69029 8.20996C7.56465 8.51328 7.49999 8.83837 7.49999 9.16667C7.49999 9.49498 7.56465 9.82007 7.69029 10.1234C7.81592 10.4267 8.00007 10.7023 8.23222 10.9344C8.46437 11.1666 8.73996 11.3507 9.04328 11.4764C9.34659 11.602 9.67168 11.6667 9.99999 11.6667C10.663 11.6667 11.2989 11.4033 11.7678 10.9344C12.2366 10.4656 12.5 9.82971 12.5 9.16667C12.5 8.50363 12.2366 7.86775 11.7678 7.3989C11.2989 6.93006 10.663 6.66667 9.99999 6.66667Z" fill="#666561"/>
                    </svg>
                    <p>Cartagena, Colombia</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.1667 2.78336C15.4236 3.50907 16.4691 4.55046 17.1999 5.80444C17.9306 7.05842 18.3212 8.4815 18.3329 9.9328C18.3446 11.3841 17.9771 12.8133 17.2667 14.0789C16.5563 15.3446 15.5277 16.4027 14.2827 17.1486C13.0377 17.8945 11.6195 18.3024 10.1684 18.3317C8.71738 18.3611 7.28381 18.011 6.00965 17.3161C4.73549 16.6211 3.66491 15.6055 2.90391 14.3696C2.14291 13.1338 1.71786 11.7206 1.67085 10.27L1.66669 10L1.67085 9.73002C1.71752 8.29085 2.13631 6.88832 2.88639 5.65918C3.63646 4.43004 4.69223 3.41623 5.95076 2.71659C7.2093 2.01695 8.62764 1.65535 10.0675 1.66705C11.5074 1.67875 12.9197 2.06335 14.1667 2.78336ZM10 5.00002C9.79591 5.00005 9.59891 5.07499 9.44638 5.21062C9.29385 5.34625 9.1964 5.53315 9.17252 5.73586L9.16669 5.83336V10L9.17419 10.1092C9.19319 10.2538 9.2498 10.3908 9.33835 10.5067L9.41085 10.59L11.9109 13.09L11.9892 13.1584C12.1353 13.2717 12.315 13.3333 12.5 13.3333C12.685 13.3333 12.8647 13.2717 13.0109 13.1584L13.0892 13.0892L13.1584 13.0109C13.2717 12.8647 13.3333 12.685 13.3333 12.5C13.3333 12.315 13.2717 12.1353 13.1584 11.9892L13.0892 11.9109L10.8334 9.65419V5.83336L10.8275 5.73586C10.8036 5.53315 10.7062 5.34625 10.5537 5.21062C10.4011 5.07499 10.2041 5.00005 10 5.00002Z" fill="#666561"/>
                    </svg>
                    <p>2016-2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
