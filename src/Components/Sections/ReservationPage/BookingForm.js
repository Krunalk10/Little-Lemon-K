


import React from 'react'
import axios from "axios"; 
import { useState, useEffect } from 'react';

export const BookingForm = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [date, setDate] = React.useState('');
  const [time, setTime] = React.useState('');
  const [guests, setGuests] = React.useState('');
  const [occasion, setOccasion] = React.useState('');

 const initialState = {
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
  }

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit  =(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    
    const user = {
      "firstName": firstName,
      "lastName": lastName,
      "date": date,
      "time": time,
      "guests": guests,
      "occasion": occasion
    }
    console.log("22--",user);
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
      })
      
  }

  useEffect (() => {
    console.log(formErrors)
    if ((Object.keys(formErrors).length === 0 ) && isSubmitting){
      console.log(formValues)
    }
  },[formErrors, isSubmitting, formValues]);

  const validate = (values) => {
    const errors = {};
    
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    else if (values.firstName.length < 3) {
      errors.firstName = "Too short"
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    else if (values.lastName.length < 3) {
      errors.lastName = "Too short"
    }

    if (!values.date) {
      errors.date = "Date is required";
    }
    if (!values.time) {
      errors.time = "Time is required";
    }
    if (!values.guests) {
      errors.guests = "Guest number is required";
    }
    if (!values.occasion) {
      errors.occasion = "Occasion name is required";
    }
    return errors;
  }

  
  const handleChange = (event) =>{

    console.log(event.target.name);

     const {name, value} = event.target;
     setFormValues({...formValues, [name]:value});
     console.log(formValues)

     if(event.target.name === 'firstName'){
       setFirstName(event.target.value)
       }
     if(event.target.name === 'lastName'){
       setLastName(event.target.value)
     }
     if(event.target.name === 'date'){
       setDate(event.target.value)
       setTime("Select Time")
     }
     if(event.target.name === 'time'){
       setTime(event.target.value)
     }
     if(event.target.name === 'guests'){
       setGuests(event.target.value)
     }
     if(event.target.name === 'occasion'){
       setOccasion(event.target.value)
     }
     if(event.target.name === 'guests'){
       setGuests(event.target.value)
     }
  }

  return (
    <div className='reservation'>
      {Object.keys(formErrors).length === 0  && isSubmitting ? (window.location = "/confirmation" ) : ""}
        <form  className='reservation-form' onSubmit={handleSubmit}>
          <div className='reservation-form-input'>
          <h3>Reservation Booking</h3>
          <label>First Name</label>
           <input
             type='text'
             id='firstName'
             placeholder='First Name'
             value={formValues.firstName}
             name='firstName'
             required
             minLength="3"
             maxLength="12"
             onChange={(e) => { handleChange(e) }}
             className=''
             />
            <span> {formErrors.firstName}</span>
           <label>Last Name</label>
           <input
            type='text'
             placeholder='Last Name'
             value={formValues.lastName}
             name='lastName'
             onChange={(e) => { handleChange(e) }}
             />
           <span> {formErrors.lastName}</span>

            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={formValues.date} name="date" onChange={(e) => { handleChange(e) }} />
            {/* <p className='error'>{formErrors.date}</p> */}
            <span> {formErrors.date}</span>
            <label for="res-time">Choose time</label>

            <select id="res-time " value={formValues.time}  name='time'  onChange={(e) => { handleChange(e) }}>
                <option>Select Time</option>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <span> {formErrors.time}</span>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="0" required min="1" max="10" id="guests" name ='guests' value={formValues.guests} onChange={(e) => { handleChange(e) }} />
            <span> {formErrors.guests}</span>
            <label for="occasion">Occasion</label>
            <select id="occasion" value={formValues.occasion}  name={"occasion"} onChange={handleChange}>
                <option>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <span> {formErrors.occasion}</span>
          </div>

            <button type="submit" className='submit' onClick={handleSubmit}> Book </button>
   </form>
   
    </div>
  )
}
