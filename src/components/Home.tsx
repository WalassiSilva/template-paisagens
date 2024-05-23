
import imgs from "../assets/imgs/paisagens";

import "aos/dist/aos.css";
export function Home({ id }: { id: string }) {
  return (
    <section id={id} className="max-w-[90%] mt-10 flex justify-center flex-col md:flex-row gap-10 scroll-mt-20">
      <div className="flex flex-col gap-4 max-w-[90%] md:max-w-[460px] mx-auto md:mx-0 my-auto items-center md:items-start text-center md:text-start justify-center ">
        <h1 className="font-title italic text-3xl">Bem vindo as Paisagens do Japão</h1>
        <p className="max-w-[450px">Essas imagens incríveis foram retiradas do Pinterest.</p>
        
        <div
          data-aos="zoom-in"
          data-aos-duration="1000">
          <img className="size-1/2 rounded-lg py-10 mx-auto md:mx-0 hover:scale-110 duration-300 " src={imgs.logo} alt="Avatar" />
          <a href="https://www.linkedin.com/in/walassi-silva/" target="_blank"
            className=" px-4 py-2 border border-red-400 bg-white text-red-400 hover:text-white hover:bg-red-400 rounded-md font-semibold"
          >LinkedIn</a>
        </div>

      </div>
      <div className="flex gap-6 md:w-1/2" >
        <div className="mt-10 flex flex-col gap-6"
          data-aos-duration="1500"
          data-aos="fade-down">
        <img className="hover:scale-110 duration-300 rounded-xl" src={imgs.img11} alt="" />
          <img className="hover:scale-110 duration-300 rounded-xl" src={imgs.img1} alt="" />
        </div>
        <div className="flex flex-col gap-6"
          data-aos-duration="1500"
          data-aos="fade-up">
          <img className="hover:scale-110 duration-300 rounded-xl" src={imgs.img12} alt="" />
          <img className="hover:scale-110 duration-300 rounded-xl" src={imgs.img9} alt="" />
        </div>
      </div>
    </section>
  )
}
