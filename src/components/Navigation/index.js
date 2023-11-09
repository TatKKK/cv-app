import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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


const Navigation= () => {
  return (
      <ul className="navigation">
        <li>
          <Link smooth spy to="About" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faUser} data-testid="FontAwesomeIcon" /> 
          <span>About Me</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Education" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faGraduationCap} data-testid="FontAwesomeIcon" /> 
          <span>Education</span>
          </Link>            
        </li>
        <li>
          <Link smooth spy to="Experience" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faPencil} data-testid="FontAwesomeIcon" /> 
          <span>Experience</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Skills" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faMagicWandSparkles} data-testid="FontAwesomeIcon"/> 
          <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Portfolio" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faSuitcase} data-testid="FontAwesomeIcon"/> 
          <span>Portfolio</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Contacts" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faAddressBook} data-testid="FontAwesomeIcon" /> 
          <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link smooth spy to="Feedbacks" activeClass="active" offset={-70} duration={500}>
          <FontAwesomeIcon icon={faComment} data-testid="FontAwesomeIcon" /> 
          <span>Feedback</span>
          </Link>
        </li>       
      </ul>      
  );
};

export default Navigation;
