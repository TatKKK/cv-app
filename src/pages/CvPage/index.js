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
     <Box title="About me"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
        condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque"
        />     
     <Box title="Education" id="Education">
        <Timeline
          id="education"
          data={[
            {
              date:2023,
              title: "EPAM",
              text:"Front-end Development Upskill",
            },
            {
              date: 2019,
              title: "MSC in Management",
              text: "Caucasus University, Business School",
            },
            {
              date: 2018,
              title: "Erasmus Exchange Program",
              text: "University of Logistics and Transport, Wroclaw, Poland",
            },
            {
              date: 2010,
              title: "Applied Mathematics and Computer Sciences",
              text: "Ivane Javakhishvili Tbilisi State University",
            },
          ]}
        />
    </Box>
    <Box title="Experience" id="Experience">
      <Expertise data={[ { 
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
   
        <Skills/>
    
    <Box title="Portfolio" id="Portfolio">
        <Portfolio collapsed={isCollapsed} />
    </Box>    
    <Box title="Contacts" id="Contacts">
       <Address />
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

