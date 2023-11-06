import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPencil,
  faMagicWandSparkles,
  faSuitcase,
  faAddressBook,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.scss";
import { Link as ScrollLink } from "react-scroll";

const Navigation= () => {
  return (
      <ul className="navigation">
        <li>
          <Link smooth spy to="About">
          <FontAwesomeIcon icon={faUser} data-testid="FontAwesomeIcon" /> 
          <span>About Me</span>
          </Link>
        </li>
        <li>
          <ScrollLink
              to="About"
              spy={true}
              smooth={true}
              duration={800}>
                <FontAwesomeIcon icon={faGraduationCap} data-testid="FontAwesomeIcon" /> 
          <span>Education</span>
              </ScrollLink>
        </li>
        <li>
          <Link smooth spy to="Experience">
          <FontAwesomeIcon icon={faPencil} data-testid="FontAwesomeIcon" /> 
          <span>Experience</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Skills">
          <FontAwesomeIcon icon={faMagicWandSparkles} data-testid="FontAwesomeIcon"/> 
          <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Portfolio">
          <FontAwesomeIcon icon={faSuitcase} data-testid="FontAwesomeIcon"/> 
          <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Contacts">
          <FontAwesomeIcon icon={faAddressBook} data-testid="FontAwesomeIcon" /> 
          <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Feedbacks">
          <FontAwesomeIcon icon={faComment} data-testid="FontAwesomeIcon" /> 
          <span>Feedback</span>
          </Link>
        </li>       
      </ul>      
  );
};

export default Navigation;
