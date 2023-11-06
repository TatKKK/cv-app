import './expertise.scss';

function Expertise(props) {
    return(
        <div className="expertise-list" data-testid="expertise-link" >
            <ul>
                {props.data.map((d, index) => (
                    <li key={index}>
                        <div className="expertise-list-date">
                            <h3>{d.info.company}</h3>
                            <span className="date">{d.date}</span>
                        </div>
                        <div className="expertise-list-info">
                            <h3>{d.info.job}</h3>
                            <span>{d.info.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Expertise;
