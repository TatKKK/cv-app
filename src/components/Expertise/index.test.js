import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Expertise from "../Expertise";

describe("Expertise.js", () => {
    it('should render the Expertise component', () => {
        render(
            <Expertise data={[ {
                date: '2010-2023', 
                info: 
                  {
                    company: 'Georgia Revenue Service', 
                    job: 'Tax and Customs Administration Specialist', 
                    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor' 
                  } 
            } ]} />
        )
        expect(screen.getByText('2010-2023')).toBeInTheDocument();
        expect(screen.getByText('Georgia Revenue Service')).toBeInTheDocument();
        expect(screen.getByText('Tax and Customs Administration Specialist')).toBeInTheDocument();
        expect(screen.getByText('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor')).toBeInTheDocument();
    })
});
