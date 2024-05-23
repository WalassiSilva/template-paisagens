import { Title } from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules"
import { FaUser } from "react-icons/fa";

const feedbacks = [
  {
    feedback: "l Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit at fuga veritatis laborum totam ratione repellat id aliquam corporis modi facere ad, quia accusamus perspiciatis vitae quam consequuntur voluptates similique.orem",

    name: "User",

  },
  {
    feedback: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit at fuga veritatis laborum totam ratione repellat id aliquam corporis modi facere ad, quia accusamus perspiciatis vitae quam consequuntur voluptates similique.",
    name: "User",

  },

  {
    feedback: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit at fuga veritatis laborum totam ratione repellat id aliquam corporis modi facere ad, quia accusamus perspiciatis vitae quam consequuntur voluptates similique.",
    name: "User",

  },
  {
    feedback: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit at fuga veritatis laborum totam ratione repellat id aliquam corporis modi facere ad, quia accusamus perspiciatis vitae quam consequuntur voluptates similique.",

    name: "User",

  }
]
export function FeedbackCard() {

  return (
    <section className="w-[90%] md:w-[70%] mx-auto" data-aos="flip-right" data-aos-duration="1000">
      <Swiper className=""
        slidesPerView={1}
        spaceBetween={32}
        navigation={true}
        grabCursor={true}
        breakpoints={{
          450: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide className="max-w-[350px] h-[350px]" key={index}
          >

            <div className="h-full flex flex-col items-center justify-between text-center p-4 py-6 " key={index}
            >
              <p>{item.feedback}</p>
              <div className="mx-auto flex ">
                  <FaUser />
              </div>

              <p className="font-semibold text-center">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )

}
export function Feedbacks({ id }: { id: string }) {
  return (
    <section id={id} className="scroll-mt-20 w-full pb-16">
      <Title>Feedbacks</Title>
      <FeedbackCard />
    </section>
  )
}