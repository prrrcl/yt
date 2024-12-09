import { Heading } from "./components/heading"
import { Phone } from "./components/phone"
import { Screen1 } from "./components/screen1"
import { Screen2 } from "./components/screen2"

export default function Home() {
  return (
    <div className="">
      <div className="flex sticky top-0 flex-col justify-center h-screen">
        <Heading />
      </div>
      <div className="fixed top-0 h-screen left-0 w-full flex justify-center py-24">
        <div className="relative aspect-[562/1226] max-h-[639px]">
          <Screen1 />
          <Screen2 />
          <Phone />
        </div>
      </div>
      <div className="h-[500vh]" />
    </div>
  )
}
