import { Title } from "./Title";
import "aos/dist/aos.css";

export function About({ id }: { id: string }) {
  return (
    <section id={id} className="text-center scroll-mt-20"
      data-aos="fade-left"
      data-aos-easing="ease-out"
      data-aos-duration="1500">
      <Title>Sobre</Title>
      <p className="max-w-[500px] mx-auto">Este projeto é um template adaptável de site para pessoas ou empresas que ainda não tem um site para mostrar quem é, o que faz, o que acham de seu trabalho e reunir suas redes de contato em um lugar.</p>
      <p className="max-w-[500px] mx-auto"></p>
      <p className="max-w-[500px] mx-auto"></p>
    </section>
  )
}
