import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import Timeline from '../Timeline';
import thunk from 'redux-thunk';



const middlewares = [thunk];
const mockStore = configureStore(middlewares);


jest.mock('../../redux/reducers/educationSlice', () => ({
    fetchEducation: () => ({ type: 'mocked_fetch_education' }),
  }));
  

describe('Timeline', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      education: {
        data: { education: [] },
        status: 'idle',
      },
    });

    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Timeline />
      </Provider>
    );
  });

  // Loading state

  it('shows a loading icon when status is loading', () => {
   
    store = mockStore({
      education: {
        data: { education: [] },
        status: 'loading',
      },
    });  
    render(
      <Provider store={store}>
        <Timeline />
      </Provider>
    );
  
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  //Error

  it('shows an error message when there is an error', () => {
    store = mockStore({
      education: {
        data: { education: [] },
        status: 'error',
      },
    });
  
    render(
      <Provider store={store}>
        <Timeline />
      </Provider>
    );
    
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
//Success

it('displays education items when data is successfully fetched', () => {
    const mockData = {
      education: [
        { date: '2020', title: 'Test University', description: 'Test Degree' }
      ]
    };
  
    store = mockStore({
      education: {
        data: mockData,
        status: 'success',
      },
    });
  
    render(
      <Provider store={store}>
        <Timeline />
      </Provider>
    );
    
    expect(screen.getByText('Test University')).toBeInTheDocument();
    expect(screen.getByText('Test Degree')).toBeInTheDocument();
  });
  
  });

