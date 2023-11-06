import { Link } from 'react-router-dom';
import PhotoBox from '../../components/PhotoBox';
import Button from '../../components/Button';
import avatar from '../../assets/user/avatar.jpg';
import "./welcomepage.scss";


const Welcome = () => {
    return(
        <main id="main-home">           
                <PhotoBox
                    name="Tata Kaldani"
                    avatar={avatar}
                    title="Programmer. Creative. Innovator"            
                    description={<>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean commodo </p>
                     <p>ligula eget dolor. Aenean massa. Cum sociis natoque </p></>} 
                />
            <Button text="Know more" to="/cvpage" />
        </main>
    )
}

export default Welcome;
