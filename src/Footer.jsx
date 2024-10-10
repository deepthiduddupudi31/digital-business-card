
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

export default function Footer()
{

      return (
        <div className="footer">
             
             <FontAwesomeIcon icon={faEnvelope} className="icon" />
             <FontAwesomeIcon icon={faInstagram} className="icon"/>
             <FontAwesomeIcon icon={faFacebook} className="icon"/>
             <FontAwesomeIcon icon={faTwitter}   className="icon"/>
             

        </div>
      )
}