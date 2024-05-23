import { Title } from "./Title";
import "aos/dist/aos.css";

export function About({ id }: { id: string }) {
  return (
    <section id={id} className="text-center scroll-mt-20"
      data-aos="fade-left"
      data-aos-easing="ease-out"
      data-aos-duration="1500">
      <Title>Sobre</Title>
      <p className="max-w-[500px] mx-auto">Meu nome Paisagem
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ex repudiandae eius reprehenderit saepe! </p>
      <p className="max-w-[500px] mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit nulla est porro maiores
        voluptate hic officiis expedita necessitatibus atque recusandae rerum magni,
        aut repellendus aperiam, quibusdam architecto blanditiis, mollitia odio?
      </p>
      <p className="max-w-[500px] mx-auto">Venho trabalhando, aperfeiçoando minha técnica </p>
    </section>
  )
}
