import src from "./assets/blackMyth.png"
import icon from "./assets/workcation-icon.png"
import Testimony from "./components/Testimony/Testimony"
import "./styles.css"

export default function App(){
  const name = "Wukong"
  const position = "Monkey King"
  const quote = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."

  return (
      <Testimony
        // src={src}
        icon={icon}
        name={name}
        position={position}
        quote={quote}
      >
      </Testimony>
  )
}