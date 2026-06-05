import { FaQuoteLeft } from "react-icons/fa6";

export default function Testimony({ src, name, position, children }){
    return (
        <div className="plate">
            <img src={src} alt={name}/>
            <div className="content">
                <FaQuoteLeft className="icon" />
                {children}
                <span>{name}</span>
                <br />
                <span>{position}</span>
            </div>
        </div>
    )
}