// // import React from 'react'
// // import { NavLink } from 'react-router-dom';

// // export const BookingForm = () => {
// //   return (
// //     <div className='reservation'>
// //         <form  className='reservation-form'>
// //           <div className='reservation-form-input'>
// //           <label>First Name</label>
// //            <input type='text' placeholder='First Name'/>
// //            <label>Last Name</label>
// //            <input type='text' placeholder='Last Name'/>
           
// //             <label for="res-date">Choose date</label>
// //             <input type="date" id="res-date" />
// //             <label for="res-time">Choose time</label>

// //             <select id="res-time ">
// //                 <option>17:00</option>
// //                 <option>18:00</option>
// //                 <option>19:00</option>
// //                 <option>20:00</option>
// //                 <option>21:00</option>
// //                 <option>22:00</option>
// //             </select>

// //             <label for="guests">Number of guests</label>
// //             <input type="number" placeholder="1" min="1" max="10" id="guests" />
// //             <label for="occasion">Occasion</label>
// //             <select id="occasion">
// //                 <option>Birthday</option>
// //                 <option>Anniversary</option>
// //             </select>
// //           </div>

// //            <NavLink to='/confirmation'>
// //            <button type="submit" className='submit'> Book </button>
// //             </NavLink> 
// //    </form>
// //     </div>
// //   )
// // }


// import React from 'react'
// import axios from "axios"; 
// import { NavLink } from 'react-router-dom';

// export const BookingForm = () => {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [date, setDate] = React.useState('');
//   const [time, setTime] = React.useState('');
//   const [guests, setGuests] = React.useState('');
//   const [occasion, setOccasion] = React.useState('');

//   const handleSubmit  =(e) => {
//     e.preventDefault();
//     const user = {
//       "firstName": firstName,
//       "lastName": lastName,
//       "date": date,
//       "time": time,
//       "guests": guests,
//       "occasion": occasion
//     }
//     console.log("22--",user);
//     axios.post('https://jsonplaceholder.typicode.com/users', { user })
//       .then(res=>{
//         console.log(res);
//         console.log(res.data);
//         window.location = "/confirmation" 
//       })
//   }
//   const handleChange = (event) =>{
//     console.log(event.target.name);
//      if(event.target.name === 'firstName'){
//        setFirstName(event.target.value)
//        }
//      if(event.target.name === 'lastName'){
//        setLastName(event.target.value)
//      }
//      if(event.target.name === 'date'){
//        setDate(event.target.value)
//      }
//      if(event.target.name === 'time'){
//        setTime(event.target.value)
//      }
//      if(event.target.name === 'guests'){
//        setGuests(event.target.value)
//      }
//      if(event.target.name === 'occasion'){
//        setOccasion(event.target.value)
//      }
//      if(event.target.name === 'guests'){
//        setGuests(event.target.value)
//      }
//   }

  
//   return (
//     <div className='reservation'>
//         <form  className='reservation-form'>
//           <div className='reservation-form-input'>
//           <label>First Name</label>
//            <input
//              type='text'
//              placeholder='First Name'
//              value={firstName}
//              name='firstName'
//              required
//              minLength={3}
//              onChange={(e) => { handleChange(e) }}
//              />
//            <label>Last Name</label>
//            <input
//             type='text'
//              placeholder='Last Name'
//              value={lastName}
//              name='lastName'
//              onChange={(e) => { handleChange(e) }}
//              />
           
//             <label for="res-date">Choose date</label>
//             <input type="date" id="res-date" value={date} name="date" onChange={(e) => { handleChange(e) }} />
//             <label for="res-time">Choose time</label>

//             <select id="res-time " value={time}  name='time'  onChange={(e) => { handleChange(e) }}>
//                 <option>17:00</option>
//                 <option>18:00</option>
//                 <option>19:00</option>
//                 <option>20:00</option>
//                 <option>21:00</option>
//                 <option>22:00</option>
//             </select>

//             <label for="guests">Number of guests</label>
//             <input type="number" placeholder="1" min="1" max="10" id="guests" name ='guests' value={guests} onChange={(e) => { handleChange(e) }} />
//             <label for="occasion">Occasion</label>
//             <select id="occasion" value={occasion}  name={"occasion"} onChange={handleChange}>
//                 <option>Select Occasion</option>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//             </select>
//           </div>

//             {/* <button type="submit" className='submit' onClick={handleSubmit}> Book </button> */}
//             <NavLink to='/confirmation'>
//             <button type="submit" className='submit' onClick={handleSubmit}> Book </button>
//              </NavLink> 
//    </form>
//     </div>
//   )
// }



// // import React from 'react'
// // import { NavLink } from 'react-router-dom';

// // export const BookingForm = () => {
// //   return (
// //     <div className='reservation'>
// //         <form  className='reservation-form'>
// //           <div className='reservation-form-input'>
// //           <label>First Name</label>
// //            <input type='text' placeholder='First Name'/>
// //            <label>Last Name</label>
// //            <input type='text' placeholder='Last Name'/>
           
// //             <label for="res-date">Choose date</label>
// //             <input type="date" id="res-date" />
// //             <label for="res-time">Choose time</label>

// //             <select id="res-time ">
// //                 <option>17:00</option>
// //                 <option>18:00</option>
// //                 <option>19:00</option>
// //                 <option>20:00</option>
// //                 <option>21:00</option>
// //                 <option>22:00</option>
// //             </select>

// //             <label for="guests">Number of guests</label>
// //             <input type="number" placeholder="1" min="1" max="10" id="guests" />
// //             <label for="occasion">Occasion</label>
// //             <select id="occasion">
// //                 <option>Birthday</option>
// //                 <option>Anniversary</option>
// //             </select>
// //           </div>

// //            <NavLink to='/confirmation'>
// //            <button type="submit" className='submit'> Book </button>
// //             </NavLink> 
// //    </form>
// //     </div>
// //   )
// // }


// import React from 'react'
// import axios from "axios"; 
// import { NavLink } from 'react-router-dom';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// // import { ErrorMessage, useField } from 'formik';

// export const BookingForm = () => {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [date, setDate] = React.useState('');
//   const [time, setTime] = React.useState('');
//   const [guests, setGuests] = React.useState('');
//   const [occasion, setOccasion] = React.useState('');

//   const handleSubmit  =(e) => {
//     e.preventDefault();
//     const user = {
//       "firstName": firstName,
//       "lastName": lastName,
//       "date": date,
//       "time": time,
//       "guests": guests,
//       "occasion": occasion
//     }
//     console.log("22--",user);
//     axios.post('https://jsonplaceholder.typicode.com/users', { user })
//       .then(res=>{
//         console.log(res);
//         console.log(res.data);
//         window.location = "/confirmation" 
//       })
//   }


//   const handleChange = (event) =>{
//     console.log(event.target.name);
//      if(event.target.name === 'firstName'){
//        setFirstName(event.target.value)
//        }
//      if(event.target.name === 'lastName'){
//        setLastName(event.target.value)
//      }
//      if(event.target.name === 'date'){
//        setDate(event.target.value)
//        setTime("")
//      }
//      if(event.target.name === 'time'){
//        setTime(event.target.value)
//      }
//      if(event.target.name === 'guests'){
//        setGuests(event.target.value)
//      }
//      if(event.target.name === 'occasion'){
//        setOccasion(event.target.value)
//      }
//      if(event.target.name === 'guests'){
//        setGuests(event.target.value)
//      }
//   }

 
//   const BookingValidation = Yup.object({
//     firstName: Yup.string()
//         .min(3, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('First Name is required'),
//     lastName: Yup.string()
//         .min(3, 'Too Short!')
//         .max(50, 'Too Long!')
//         .required('Last Name is required'),
//     date: Yup.string().required('Date is Required'),
//     time: Yup.string().required('Time is required'),
//     guests: Yup.number().min(1).max(10).required('Guest count is required'),
//     occasion: Yup.string().required('Occasion is required')
// })



//   return (
//     <div className='reservation'>
//       <Formik>
//         initialValues = {{
//           firstName :"",
//           lastName: "",
//           date: "",
//           occasion: "",
//           guests: "",
//         }}
//         validationSchema = {BookingValidation}
//         onSubmit={(values, { setSubmitting }) => {
//            console.log(values);
//            axios.post('https:jsonplaceholder.typicode.com/users', { values })
//              .then(res => {
//                console.log(res);
//                console.log(res.data);
//                setSubmitting(false);
//                window.location = "/confirmation";
//              })
//              .catch(errors => {
//                 console.errors("Failed to submit:", errors);
//                 setSubmitting(false);
//               });
//          }}  
//           {({ isSubmitting}) => (
//               <form  className='reservation-form'>
//               <div className='reservation-form-input'>
//               <label>First Name</label>
//                <input
//                  type='text'
//                  id='firstName'
//                  placeholder='First Name'
//                  value={firstName}
//                  name='firstName'
//                  onChange={(e) => { handleChange(e) }}
//                  className=''
//                  />
//                <label>Last Name</label>
//                <input
//                 type='text'
//                  placeholder='Last Name'
//                  value={lastName}
//                  name='lastName'
//                  onChange={(e) => { handleChange(e) }}
//                  />
               
//                 <label for="res-date">Choose date</label>
//                 <input type="date" id="res-date" value={date} name="date" onChange={(e) => { handleChange(e) }} />
//                 <label for="res-time">Choose time</label>
    
//                 <select id="res-time " value={time}  name='time'  onChange={(e) => { handleChange(e) }}>
//                     <option>Select Time</option>
//                     <option>17:00</option>
//                     <option>18:00</option>
//                     <option>19:00</option>
//                     <option>20:00</option>
//                     <option>21:00</option>
//                     <option>22:00</option>
//                 </select>
    
//                 <label for="guests">Number of guests</label>
//                 <input type="number" placeholder="0" required min="1" max="10" id="guests" name ='guests' value={guests} onChange={(e) => { handleChange(e) }} />
//                 <label for="occasion">Occasion</label>
//                 <select id="occasion" value={occasion}  name={"occasion"} onChange={handleChange}>
//                     <option>Select Occasion</option>
//                     <option>Birthday</option>
//                     <option>Anniversary</option>
//                 </select>
//               </div>
    
//                 {/* <button type="submit" className='submit' onClick={handleSubmit}> Book </button> */}
//                 <NavLink to='/confirmation'>
//                 <button type="submit" className='submit' disabled={isSubmitting} onClick={handleSubmit}> Book </button>
//                  </NavLink> 
//        </form>
//           )}
      
//       </Formik>
        
//     </div>
//   );
// }


// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
// import axios from "axios";

// const BookingValidation = Yup.object().shape({
//   firstName: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('First Name is required'),
//   lastName: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Last Name is required'),
//   date: Yup.date().required('Date is required'),
//   time: Yup.string().required('Time is required'),
//   guests: Yup.number().min(1).max(10).required('Guest count is required'),
//   occasion: Yup.string().required('Occasion is required')
// });

// export const BookingForm = () => {
//   return (
//     <div className='reservation'>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           date: '',
//           time: '',
//           guests: '',
//           occasion: ''
//         }}
//         validationSchema={BookingValidation}
//         onSubmit={(values, { setSubmitting }) => {
//           console.log(values);
//           axios.post('https://jsonplaceholder.typicode.com/users', { values })
//             .then(res => {
//               console.log(res);
//               console.log(res.data);
//               setSubmitting(false);
//               window.location = "/confirmation";
//             });
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className='reservation-form'>
//             <div className='reservation-form-input'>
//               <label htmlFor="firstName">First Name</label>
//               <Field type="text" name="firstName" placeholder="First Name" />
//               <ErrorMessage name="firstName" component="div" className="field-errors" />

//               <label htmlFor="lastName">Last Name</label>
//               <Field type="text" name="lastName" placeholder="Last Name" />
//               <ErrorMessage name="lastName" component="div" className="field-errors" />

//               <label htmlFor="date">Choose date</label>
//               <Field type="date" name="date" />
//               <ErrorMessage name="date" component="div" className="field-errors" />

//               <label htmlFor="time">Choose time</label>
//               <Field as="select" name="time">
//                 <option value="">Select Time</option>
//                 <option value="17:00">17:00</option>
//                 <option value="18:00">18:00</option>
//                 <option value="19:00">19:00</option>
//                 <option value="20:00">20:00</option>
//                 <option value="21:00">21:00</option>
//                 <option value="22:00">22:00</option>
//               </Field>
//               <ErrorMessage name="time" component="div" className="field-errors" />

//               <label htmlFor="guests">Number of guests</label>
//               <Field type="number" name="guests" placeholder="1" />
//               <ErrorMessage name="guests" component="div" className="field-errors" />

//               <label htmlFor="occasion">Occasion</label>
//               <Field as="select" name="occasion">
//                 <option value="">Select Occasion</option>
//                 <option value="Birthday">Birthday</option>
//                 <option value="Anniversary">Anniversary</option>
//               </Field>
//               <ErrorMessage name="occasion" component="div" className="field-errors" />
//             </div>

//             <NavLink to='/confirmation'>
//               <button type="submit" disabled={isSubmitting} className='submit'>Book</button>
//             </NavLink>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };


// import React from 'react';
// import { Formik, Form, ErrorMessage, Field } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";

// const BookingSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('First Name is required'),
//   lastName: Yup.string()
//     .min(3, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Last Name is required'),
//   date: Yup.date().required('Date is required'),
//   time: Yup.string().required('Time is required'),
//   guests: Yup.number().min(1).max(10).required('Guest count is required'),
//   occasion: Yup.string().required('Occasion is required')
// });

// export const BookingForm = () => {
//   const navigate = useNavigate(); 
//   return (
//     <div className='reservation'>
//       <Formik
//         initialValues={{
//           firstName: '',
//           lastName: '',
//           date: '',
//           time: '',
//           guests: '',
//           occasion: ''
//         }}
//         validationSchema={BookingSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           console.log(values);
//           axios.post('https://jsonplaceholder.typicode.com/users', { values })
//             .then(res => {
//               console.log(res);
//               console.log(res.data);
//               setSubmitting(false);
//               navigate("/confirmation"); 
//             })
//             .catch(errors => {
//               console.errors("Failed to submit:", errors);
//               setSubmitting(false);
//             });
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form className='reservation-form'>
//             <div className='reservation-form-input'>
//             <label htmlFor="firstName">First Name</label>
//                <Field type="text" name="firstName" placeholder="First Name" />
//                <ErrorMessage name="firstName" component="div" className="field-errors" />

//                <label htmlFor="lastName">Last Name</label>
//                <Field type="text" name="lastName" placeholder="Last Name" />
//                <ErrorMessage name="lastName" component="div" className="field-errors" />

//                <label htmlFor="date">Choose date</label>
//                <Field type="date" name="date" />
//                <ErrorMessage name="date" component="div" className="field-errors" />

//                <label htmlFor="time">Choose time</label>
//                <Field as="select" name="time">
//                  <option value="">Select Time</option>
//                  <option value="17:00">17:00</option>
//                  <option value="18:00">18:00</option>
//                  <option value="19:00">19:00</option>
//                  <option value="20:00">20:00</option>
//                  <option value="21:00">21:00</option>
//                  <option value="22:00">22:00</option>
//                </Field>
//                <ErrorMessage name="time" component="div" className="field-errors" />

//                <label htmlFor="guests">Number of guests</label>
//                <Field type="number" name="guests" placeholder="0" />
//                <ErrorMessage name="guests" component="div" className="field-errors" />

//                <label htmlFor="occasion">Occasion</label>
//                <Field as="select" name="occasion">
//                  <option value="">Select Occasion</option>
//                  <option value="Birthday">Birthday</option>
//                  <option value="Anniversary">Anniversary</option>
//                </Field>
//                <ErrorMessage name="occasion" component="div" className="field-errors" />
//             </div>
//             <button type="submit" disabled={isSubmitting} className='submit'>Book</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };




// import React from 'react';
// import axios from "axios"; 
// import { NavLink } from 'react-router-dom';
// import { Formik, Field, ErrorMessage } from 'formik'; // Import Field and ErrorMessage from Formik
// import * as Yup from 'yup';

// export const BookingForm = () => {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [date, setDate] = React.useState('');
//   const [time, setTime] = React.useState('');
//   const [guests, setGuests] = React.useState('');
//   const [occasion, setOccasion] = React.useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = {
//       "firstName": firstName,
//       "lastName": lastName,
//       "date": date,
//       "time": time,
//       "guests": guests,
//       "occasion": occasion
//     }
//     console.log("22--", user);
//     axios.post('https://jsonplaceholder.typicode.com/users', { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//         window.location = "/confirmation";
//       })
//       .catch(errors => {
//         console.errors("Failed to submit:", errors);
//       });
//   }

//   const handleChange = (event) => {
//     console.log(event.target.name);
//     if(event.target.name === 'firstName'){
//       setFirstName(event.target.value);
//     }
//     if(event.target.name === 'lastName'){
//       setLastName(event.target.value);
//     }
//     if(event.target.name === 'date'){
//       setDate(event.target.value);
//       setTime("");
//     }
//     if(event.target.name === 'time'){
//       setTime(event.target.value);
//     }
//     if(event.target.name === 'guests'){
//       setGuests(event.target.value);
//     }
//     if(event.target.name === 'occasion'){
//       setOccasion(event.target.value);
//     }
//     if(event.target.name === 'guests'){
//       setGuests(event.target.value);
//     }
//   }

//   const BookingValidation = Yup.object({
//     firstName: Yup.string()
//       .min(3, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('First Name is required'),
//     lastName: Yup.string()
//       .min(3, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Last Name is required'),
//     date: Yup.string().required('Date is Required'),
//     time: Yup.string().required('Time is required'),
//     guests: Yup.number().min(1).max(10).required('Guest count is required'),
//     occasion: Yup.string().required('Occasion is required')
//   })

//   return (
//     <div className='reservation'>
//       <Formik
//         initialValues={{
//           firstName :"",
//           lastName: "",
//           date: "",
//           occasion: "",
//           guests: "",
//         }}
//         validationSchema={BookingValidation}
//         onSubmit={(values, { setSubmitting }) => {
//           console.log(values);
//           axios.post('https://jsonplaceholder.typicode.com/users', { values })
//             .then(res => {
//               console.log(res);
//               console.log(res.data);
//               setSubmitting(false);
//               window.location = "/confirmation";
//             })
//             .catch(errors => {
//               console.errors("Failed to submit:", errors);
//               setSubmitting(false);
//             });
//         }}
//       >
//         {({ isSubmitting }) => (
//           <form className='reservation-form' onSubmit={handleSubmit}>
//             <div className='reservation-form-input'>
//               <label>First Name</label>
//               <Field type='text' name='firstName' placeholder='First Name' />
//               <ErrorMessage name='firstName' component='div' className='errors' />

//               <label>Last Name</label>
//               <Field type='text' name='lastName' placeholder='Last Name' />
//               <ErrorMessage name='lastName' component='div' className='errors' />
              
//               <label htmlFor="res-date">Choose date</label>
//               <Field type="date" id="res-date" name="date" />
//               <ErrorMessage name='date' component='div' className='errors' />

//               <label htmlFor="res-time">Choose time</label>
//               <Field as="select" id="res-time" name='time'>
//                 <option>Select Time</option>
//                 <option>17:00</option>
//                 <option>18:00</option>
//                 <option>19:00</option>
//                 <option>20:00</option>
//                 <option>21:00</option>
//                 <option>22:00</option>
//               </Field>
//               <ErrorMessage name='time' component='div' className='errors' />

//               <label htmlFor="guests">Number of guests</label>
//               <Field type="number" placeholder="0" min="1" max="10" id="guests" name ='guests' />
//               <ErrorMessage name='guests' component='div' className='errors' />

//               <label htmlFor="occasion">Occasion</label>
//               <Field as="select" id="occasion" name={"occasion"}>
//                 <option>Select Occasion</option>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//               </Field>
//               <ErrorMessage name='occasion' component='div' className='errors' />
//             </div>

//             <NavLink to='/confirmation'>
//               <button type="submit" className='submit' disabled={isSubmitting}> Book </button>
//             </NavLink> 
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }




// import React, { useState } from 'react'
// import axios from "axios"; 
// import { NavLink } from 'react-router-dom';

// export const BookingForm = () => {
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [date, setDate] = React.useState('');
//   const [time, setTime] = React.useState('');
//   const [guests, setGuests] = React.useState('');
//   const [occasion, setOccasion] = React.useState('');

//   const initialState = {
//     firstName: "",
//     lastName: "",
//     date: "",
//     time: "",
//     guests: "",
//     occasion: "",
//   }

//   const [formValues, setFormValues] = useState("");


//   const handleSubmit  =(e) => {
//     e.preventDefault();
//     const user = {
//       "firstName": firstName,
//       "lastName": lastName,
//       "date": date,
//       "time": time,
//       "guests": guests,
//       "occasion": occasion
//     }
//     console.log("22--",user);
//     axios.post('https://jsonplaceholder.typicode.com/users', { user })
//       .then(res=>{
//         console.log(res);
//         console.log(res.data);
//         window.location = "/confirmation" 
//       })
//   }


//   const handleChange = (event) =>{
//     console.log(event.target.name);
//      if(event.target.name === 'firstName'){
//        setFirstName(event.target.value)
//        }
//      if(event.target.name === 'lastName'){
//        setLastName(event.target.value)
//      }
//      if(event.target.name === 'date'){
//        setDate(event.target.value)
//        setTime("17")
//      }
//      if(event.target.name === 'time'){
//        setTime(event.target.value)
//      }
//      if(event.target.name === 'guests'){
//        setGuests(event.target.value)
//      }
//      if(event.target.name === 'occasion'){
//        setOccasion(event.target.value)
//      }
//      if(event.target.name === 'guests'){
//        setGuests(event.target.value)
//      }
//   }

  
//   return (
//     <div className='reservation'>
//         <form  className='reservation-form'>
//           <div className='reservation-form-input'>
//           <label>First Name</label>
//            <input
//              type='text'
//              placeholder='First Name'
//              value={formValues.firstName}
//              name='firstName'
//              required
//              minLength={3}
//              onChange={(e) => { handleChange(e) }}
//              />

//            <label>Last Name</label>
//            <input
//             type='text'
//              placeholder='Last Name'
//              value={formValues.lastName}
//              name='lastName'
//              onChange={(e) => { handleChange(e) }}
//              />
           
//             <label for="res-date">Choose date</label>
//             <input type="date" id="res-date" value={formValues.date} name="date" onChange={(e) => { handleChange(e) }} />
           
//             <label for="res-time">Choose time</label>

//             <select id="res-time " value={formValues.time}  name='time'  onChange={(e) => { handleChange(e) }}>
//               <option>Select Time</option>
//                 <option>17:00</option>
//                 <option>18:00</option>
//                 <option>19:00</option>
//                 <option>20:00</option>
//                 <option>21:00</option>
//                 <option>22:00</option>
//             </select>

//             <label for="guests">Number of guests</label>
//             <input type="number" placeholder="1" min="1" max="10" id="guests" name ='guests' value={formValues.guests} onChange={(e) => { handleChange(e) }} />
//             <label for="occasion">Occasion</label>
//             <select id="occasion" value={formValues.occasion}  name={"occasion"} onChange={handleChange}>
//                 <option>Select Occasion</option>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//             </select>
//           </div>

//             {/* <button type="submit" className='submit' onClick={handleSubmit}> Book </button> */}
//             <NavLink to='/confirmation'>
//             <button type="submit" className='submit' onClick={handleSubmit}> Book </button>
//              </NavLink> 
//    </form>
//     </div>
//   )
// }



import React from 'react'
import axios from "axios"; 
import { NavLink } from 'react-router-dom';
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
        window.location = "/confirmation" 
      })
      setIsSubmitting(true);
  }

  useEffect (() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmitting){
      console.log(formValues)
    }
  },[formErrors, isSubmitting, formValues]);

  const validate = (values) => {
    const errors = {};
    
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }else if (!values.firstName < 2) {
      errors.firstName = "Too short"
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }else if (!values.firstName < 2) {
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
       setTime("")
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
        <form  className='reservation-form'>
          <div className='reservation-form-input'>
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
             <p className='error'>{formErrors.firstName}</p>

           <label>Last Name</label>
           <input
            type='text'
             placeholder='Last Name'
             value={formValues.lastName}
             name='lastName'
             onChange={(e) => { handleChange(e) }}
             />
           <p className='error'>{formErrors.lastName}</p>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={formValues.date} name="date" onChange={(e) => { handleChange(e) }} />
            <p className='error'>{formErrors.date}</p>
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
            <p className='error'>{formErrors.time}</p>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="0" required min="1" max="10" id="guests" name ='guests' value={formValues.guests} onChange={(e) => { handleChange(e) }} />
            <p className='error'>{formErrors.guests}</p>
            <label for="occasion">Occasion</label>
            <select id="occasion" value={formValues.occasion}  name={"occasion"} onChange={handleChange}>
                <option>Select Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <p className='error'>{formErrors.occasion}</p>
          </div>

            {/* <button type="submit" className='submit' onClick={handleSubmit}> Book </button> */}
            <NavLink to='/confirmation'>
            <button type="submit" className='submit' onClick={handleSubmit}> Book </button>
             </NavLink> 
   </form>
    </div>
  )
}
