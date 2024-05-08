import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import BookingForm from './Components/Sections/ReservationPage/BookingForm'; // Assuming the correct path to BookingForm
import { initializeTimes, updateTimes } from './reducer';
import { validateFirstName, validateLastName, validateDate, validateTime, validateGuests, validateOccasion} from './validationFunctions';
import { validate } from './path/to/validate';


describe('initializeTimes', () => {
  test('returns the correct expected value', () => {
    const initialState = { times: [] };
    const expectedTimes = ['9:00 AM', '10:00 AM', '11:00 AM']; 
    const newState = initializeTimes(initialState);
    expect(newState.times).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('returns the same value provided in the state', () => {
    const initialState = { times: ['9:00 AM', '10:00 AM', '11:00 AM'] };
    const newState = updateTimes(initialState);
    expect(newState.times).toEqual(initialState.times);
  });
});

describe('BookingForm', () => {
  test('renders all input fields with correct attributes', () => {
    const { getByPlaceholderText, getByTestId } = render(<BookingForm />);
    
    // First Name input field
    const firstNameInput = getByPlaceholderText('First Name');
    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute('type', 'text');
    expect(firstNameInput).toHaveAttribute('name', 'firstName');
    
    // Last Name input field
    const lastNameInput = getByPlaceholderText('Last Name');
    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('type', 'text');
    expect(lastNameInput).toHaveAttribute('name', 'lastName');
    
    // Date input field
    const dateInput = getByTestId('res-date');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('name', 'date');
    
    // Time input field
    const timeInput = getByTestId('res-time');
    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute('name', 'time');
    
    // Guests input field
    const guestsInput = getByPlaceholderText('Number of guests');
    expect(guestsInput).toBeInTheDocument();
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('name', 'guests');
    
    // Occasion input field
    const occasionInput = getByTestId('occasion');
    expect(occasionInput).toBeInTheDocument();
    expect(occasionInput).toHaveAttribute('name', 'occasion');
  });

  test('updates state on input change', () => {
    const { getByPlaceholderText } = render(<BookingForm />);
    const firstNameInput = getByPlaceholderText('First Name');

    fireEvent.change(firstNameInput, { target: { value: 'John' } });

    expect(firstNameInput).toHaveValue('John');
  });
});


describe('Validation Functions', () => {
  describe('validateFirstName', () => {
    test('returns true for valid first name', () => {
      const validFirstName = 'John';
      expect(validateFirstName(validFirstName)).toBe(true);
    });

    test('returns false for invalid first name', () => {
      const invalidFirstName = '';
      expect(validateFirstName(invalidFirstName)).toBe(false);
    });
  });

  describe('validateLastName', () => {
    test('returns true for valid last name', () => {
      const validLastName = 'Doe';
      expect(validateLastName(validLastName)).toBe(true);
    });

    test('returns false for invalid last name', () => {
      const invalidLastName = '';
      expect(validateLastName(invalidLastName)).toBe(false);
    });
  });

  describe('validateDate', () => {
    test('returns true for valid date', () => {
      const validDate = '2024-04-30';
      expect(validateDate(validDate)).toBe(true);
    });

    test('returns false for invalid date', () => {
      const invalidDate = '';
      expect(validateDate(invalidDate)).toBe(false);
    });
  });

  describe('validateTime', () => {
    test('returns true for valid time', () => {
      const validTime = '17:00';
      expect(validateTime(validTime)).toBe(true);
    });

    test('returns false for invalid time', () => {
      const invalidTime = '';
      expect(validateTime(invalidTime)).toBe(false);
    });
  });

  describe('validateGuests', () => {
    test('returns true for valid number of guests', () => {
      const validGuests = 5;
      expect(validateGuests(validGuests)).toBe(true);
    });

    test('returns false for invalid number of guests', () => {
      const invalidGuests = 0;
      expect(validateGuests(invalidGuests)).toBe(false);
    });
  });

  describe('validateOccasion', () => {
    test('returns true for valid occasion', () => {
      const validOccasion = 'Birthday';
      expect(validateOccasion(validOccasion)).toBe(true);
    });

    test('returns false for invalid occasion', () => {
      const invalidOccasion = '';
      expect(validateOccasion(invalidOccasion)).toBe(false);
    });
  });
});



describe('BookingForm HTML5 Validations', () => {
  it('should have the necessary HTML5 validation attributes', () => {
    render(<BookingForm />);
    
    // Check firstName input for required, minLength, and maxLength attributes
    const firstNameInput = screen.getByPlaceholderText('First Name');
    expect(firstNameInput).toHaveAttribute('required');
    expect(firstNameInput).toHaveAttribute('minLength', '3');
    expect(firstNameInput).toHaveAttribute('maxLength', '12');

    // Check guests input for min and max attributes
    const guestsInput = screen.getByPlaceholderText('0');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });
});

describe('validate function', () => {
  it('should validate input correctly', () => {
    const validValues = {
      firstName: "John",
      lastName: "Doe",
      date: "2022-05-20",
      time: "18:00",
      guests: "5",
      occasion: "Birthday"
    };
    const invalidValues = {
      firstName: "Jo",
      lastName: "",
      date: "",
      time: "",
      guests: "",
      occasion: ""
    };

    expect(validate(validValues)).toEqual({});
    expect(validate(invalidValues)).toMatchObject({
      firstName: "Too short",
      lastName: "Last name is required",
      date: "Date is required",
      time: "Time is required",
      guests: "Guest number is required",
      occasion: "Occasion name is required",
    });
  });
});
