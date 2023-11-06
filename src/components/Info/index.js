import "./info.scss";

function Info(props) {
    return (
        <div className="info">
            {props.children}
            <p>{props.text}</p>
        </div>
    )
}

export default Info;
