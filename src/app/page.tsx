import { Button } from "./components/button"
import { Tooltip } from "./components/tooltip"

export default function Home() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <div className="relative w-full flex flex-col items-center justify-center gap-4">
        <Tooltip />
        <Button />
      </div>
    </div>
  )
}
