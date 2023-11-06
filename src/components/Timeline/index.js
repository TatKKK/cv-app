import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import Info from "../Info";
import { useEffect } from "react";
import { fetchEducation } from "../../redux/reducers/educationSlice";
import './timeline.scss';

export default function Timeline(){
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchEducation());
  }, [dispatch]);

  const data=useSelector((state)=>state.education.data);
  const status=useSelector((state)=>state.education.status);

  return status === "loading" ? (
    <div className="loader-container">
      <FontAwesomeIcon icon={faSyncAlt} className="icon centered-icon fa-spin" data-testid="icon" />
    </div>
  ) : status === "error" ? (
    <div className="loader-container">
      <div className="error-message centered-text">
      Something went wrong, please review your server connection!
      </div>
    </div>
  ) : (
    <div className="timeline">      
      <ul className="timeline-list">       
      {data.education.map((edu, index) => (
        <li className="timeline-item" key={index}>
            <div className="timeline-date"> {edu["date"]}</div>
            <div className="timeline-event">
              <Info text={edu["description"]}>
                <h3 style={{ marginBottom: '5px' }}>{edu["title"]}</h3>
              </Info>
            </div>
          </li>          
        ))}
      </ul>
    </div>
  );
}

