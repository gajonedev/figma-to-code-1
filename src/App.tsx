import { Collections } from "./sections/Collections"
import { Header } from "./sections/Header"
import { Hero } from "./sections/Hero"

function App() {

  return (
    <div className="bg-neutral-100 min-w-screen min-h-screen p-[20px] font-raleway text-neutral-950 overflow-hidden">
      <Header />
      <Hero />
      <Collections />
    </div>
  )
}

export default App