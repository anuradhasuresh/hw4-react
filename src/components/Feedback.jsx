import React, { useState, useReducer } from 'react';
import Dashboard from './Dashboard';
import './feedback.css'

const formReducer = (state, event) => {
    if(event.reset) {
        return {
          name: '',
          email: '',
          feedback: ''
        }
      }
    return {
      ...state,
      [event.name]: event.value
    }
   }

function Feedback() {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        console.log("submitted");
    }
    const handleChange = event => {
        setFormData({
        name: event.target.name,
        value: event.target.value,
        });
    }
  return (
    <div>
        <form id="form" onSubmit={handleSubmit}>
      <p>Please give me feedback! Enter in your details below:</p>

      <div>
        <label
          >Name: <input class="input" id="name" name='name' type="text" required onChange={handleChange}/></label>
        <label for="name"></label>
      </div>

      <div>
        <label
          >Email: <input class="input" id="email" name='email' type="email" required
        /></label>
        <label for="email"></label>
      </div>

      <div>
        <label
          >Enter your feedback here:
          <textarea class="input" id="feedback" name='feedback' type="text"></textarea>
        </label>
        <label for="feedback"></label>
        <input type="submit" value="Submit" />
      </div>
    </form>
    <br></br>
    {submitting &&
       <div>
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
    </div>
  )
}

export default Feedback