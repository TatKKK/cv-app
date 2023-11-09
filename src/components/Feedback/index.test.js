import Feedback from "../Feedback";
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import feedbackUser from '../../assets/user/hjhj.jpg';

describe("Feedback.js", () => {
    it('should render the component correctly', () => {
        render(
            <Feedback data={[ {
                feedback: ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor',
                reporter: { 
                    photoUrl: feedbackUser, 
                    name: 'John Doe', 
                    citeUrl: 'https://www.citeexample.com' 
                } 
            } ]} />
        );
        expect(screen.getByText("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor", {exact: false})).toBeInTheDocument();
        expect(screen.getByText('https://www.citeexample.com')).toBeInTheDocument();

    })
})
