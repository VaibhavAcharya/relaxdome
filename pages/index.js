import About from "../components/sections/About";
import Auth from "../components/sections/Auth";

export default function Home() {
  return (
    <div className="w-full space-y-4 md:space-y-0 md:space-x-4 md:flex">
      <About />
      <Auth />
    </div>
  )
}
