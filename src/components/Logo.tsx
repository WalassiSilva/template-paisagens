import images from "../assets/imgs/paisagens"
export function Logo() {
  return (
    <div className="font-title">
      <img className="size-12 rounded hover:scale-105 duration-150 object-cover" src={images.logoLight} alt="logo" />
    </div>
  )
}