import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules"

import imgs from "../assets/imgs/paisagens";

import { Title } from "./Title";

import "../Swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';

const productsData = [
  {
    id: 1,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img1,

  },
  {
    id: 2,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img2,
  },
  {
    id: 3,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img3,
  },
  {
    id: 4,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img4
  },
  {
    id: 5,
    title: "lorem ipsun",
    price: "2100",
    img: imgs.img5
  },
  {
    id: 6,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img6
  },
  {
    id: 7,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img7
  },
  {
    id: 8,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img8
  },
  {
    id: 9,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img9
  },
  {
    id: 10,
    title: "lorem ipsun",
    price: "0",
    img: imgs.img10
  },
]

export function Projects({ id }: { id: string }) {

  return (
    <section id={id} className="scroll-mt-20 w-[90%] md:w-[70%] select-none"
      data-aos="fade-right" data-aos-duration="1000">
      <Title>Trabalhos</Title>
      <Swiper className="arrows"
        slidesPerView={2}
        spaceBetween={20}
        navigation={true}
        grabCursor={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}

      >
        {productsData.map((product, index) => (
          <SwiperSlide className="max-w-[200px] max-h-[280px]" key={index}>
            <img className="w-48 h-48 object-cover rounded-xl" src={product.img} alt={product.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

