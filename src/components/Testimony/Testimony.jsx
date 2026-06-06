import { FaQuoteLeft } from "react-icons/fa6";

export default function Testimony({ src = "", name, position, quote, icon }) {
    return (
        src !== "" ?
            <div className="plate">
                <img src={src} alt={name} />
                <div className="content">
                    <FaQuoteLeft className="icon" />
                    <p>{quote}</p>
                    <span>{name}</span>
                    <br />
                    <span>{position}</span>
                </div>
            </div> :
            <div className="content no-img">
                <img src={icon} alt={`Quote from ${name}`}/>
                <p>"{quote}"</p>
                <p>{name}<span> / </span>{position}</p>
            </div>
    );
}