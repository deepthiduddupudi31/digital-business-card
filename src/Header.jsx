
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import face from "./face.png";


export default function Header()
{
     return (
        <div className="header">
        <img src={face} className="girlpic"/>
        <h2 className="name">Luara Smith</h2>
        <p className="designation">front-end developer</p>
        <div className="buttons">
        <div className="icons1">
        <FontAwesomeIcon icon={faEnvelope} className="envelope"/>
         <p className="email">Email</p>
        </div>
        <div className="icons2">
        <FontAwesomeIcon icon={faLinkedin} className="envelope1"/>
         <p className="email">Linkedin</p>
        </div>
        </div>
        </div>
     )
}