import src from "./assets/blackMyth.png"
import Testimony from "./components/Testimony/Testimony"
import "./styles.css"

export default function App(){
  const name = "Wukong"
  const position = "Monkey King"
  return (
      <Testimony
        src={src}
        name={name}
        position={position}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </p>
      </Testimony>
  )
}