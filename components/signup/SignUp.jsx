import './SignUp.css'
import Input from '@mui/joy/Input';
import { Button } from '@mui/joy';
import { useState } from 'react';        

export default function SignUp() {
    const [value, setValue] = useState('')

    return(
        <div id='sign-up-box'>
            <h1>Enter your email below to receive monthly newsletters packed with valuable information</h1>
            <div className='sign-up-form'>
                <Input placeholder='Enter Your E-Mail..' className='sign-up-input' value={value} onChange={(e) => setValue(e.target.value)} />
                <button className='form-button-signup' type='submit'>Sign Me Up!</button>
            </div>
        </div>
    )
    
}