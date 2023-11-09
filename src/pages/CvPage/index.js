import React, { useState }from 'react';
import Address from '../../components/Address'; 
import Feedback from '../../components/Feedback';
import Panel from '../../components/Panel';
import Portfolio from '../../components/Portfolio';
import Expertise from '../../components/Expertise';
import Box from '../../components/Box';
import Timeline from '../../components/Timeline';
import Skills from '../../components/Skills';
import ScrollUpButton from '../../components/ScrollUpButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import feedbackUser from '../../assets/user/hjhj.jpg';
import "./cvpage.scss";



function CvPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
     <>
        <Panel isCollapsed={isCollapsed} onCollapse={handleCollapse} />   
    
    <main id="main-inner">
     <Box title="About me" id="About"
        content="Passionate and analytically-minded professional with a strong foundation in computer science and mathematics, complemented by extensive experience in tax and customs administration, logistics, and international shipping. Adept at complex problem-solving and data analysis, I am now eager to leverage my technical skills and analytical expertise in a front-end development role. I am enthusiastic about contributing to innovative projects and growing in a dynamic, tech-forward environment."/>
     <Box title="Education" id="Education">
        <Timeline id="Education"
        />
    </Box>
   <div id="Experience">
   <Box title="Experience" id="Experience">
      <Expertise id="Experience" data={[ { 
          date: '2010-2023', 
            info: 
              {
                company: 'Georgia Revenue Service', 
                job: 'Tax and Customs Administration Specialist', 
                description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' 
              } 
            }, 
            { 
              date: '2018-2020', 
                info: 
                  { 
                    company: 'Business Academy Georgia', 
                    job: 'Visiting Lecturer', 
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' 
                  }
            } 
                ]} />
    </Box>
   </div>
   
        <Skills id="Skills"/>
    
    <Box title="Portfolio" id="Portfolio">
        <Portfolio id="Portfolio" collapsed={isCollapsed} />
    </Box>    
    <Box title="Contacts" id="Contacts">
       <Address id="Contacts" />
    </Box>
    <Box title="Feedback" id="Feedbacks">
      <Feedback
          data={[
            {
              feedback:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ",
              reporter: {
                photoUrl: feedbackUser,
                name: "John Doe Programer",
                citeUrl: "https://www.citeexample.com",
              },
            },
            {
              feedback:
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor, Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  ",
              reporter: {
                photoUrl: feedbackUser,
                name: "John Doe Programer",
                citeUrl: "https://www.citeexample.com",
              },
            },
          ]}/>     
    </Box>
  
      <ScrollUpButton
        icon ={ <FontAwesomeIcon icon={faAngleUp}/>}        
      />

    </main>
</>
 )
}

export default CvPage;

