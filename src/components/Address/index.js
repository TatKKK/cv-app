import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faPhone, faEnvelope,
 } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faGitlab } from "@fortawesome/free-brands-svg-icons";
import './address.scss'

  const Address = forwardRef((props, ref) => {
      const email = "kaldani.tata@gmail.com";
      const phone = "(+995)599040491";
      const fbLink = "https://www.facebook.com/tata.kaldani/";
      const linkedinLink = "https://www.linkedin.com/in/tamar-kaldani-874082165/";
      const gitlabLink = "https://gitlab.com/kaldani.tata";

  return (
    <div className="address" data-testid="address-component">
      <dl>
        <div>
          <dt>
            <FontAwesomeIcon icon={faEnvelope} data-testid="fa-envelope" />
          </dt>
          <dd>        
            <a href={`mailto:${email}`} data-testid="email-link">
              <strong>{email}</strong>
            </a>
          </dd>
        </div>
        <div>
          <dt>
            <FontAwesomeIcon icon={faPhone} data-testid="fa-phone"/>
          </dt>
          <dd>
            <a href={`tel:${phone}`} data-testid = "phone-link" >
             <strong> {phone}</strong>
            </a>
          </dd>
        </div>
        <div>
          <dt>
            <FontAwesomeIcon icon={faLinkedin} data-testid="fa-linkedin" />
          </dt>
          <dd>
          <strong>linkedin</strong><br/>
            <a href={linkedinLink} data-testid="linkedin-link" >
              <span>{linkedinLink}</span>
            </a>
          </dd>
        </div>
        <div>
          <dt>
            <FontAwesomeIcon icon={faFacebook} data-testid="fa-facebook" />        
          </dt>
          <dd>
            <a href={fbLink} data-testid="facebook-link" >
            <strong>Facebook:</strong><br/>
             <span> {fbLink}</span>
            </a>
          </dd>
        </div>
        <div>
          <dt>
            <FontAwesomeIcon icon={faGitlab} data-testid="fa-gitlab"  />
          </dt>
          <dd>
            <strong data-testid="gitlab-label" > GitLab:</strong><br/>
            <a href={gitlabLink} data-testid="gitlab-link" >
             <span> {gitlabLink}</span>
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
});

export default Address;
