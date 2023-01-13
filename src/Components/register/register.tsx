import React, { useEffect, useState } from 'react'
import { Form, Popup } from '../login/loginStyle'
import { Topic } from '../Slider/SliderStyle'
import { RegisterSentence, RegisterInput, RegisterButton, RegisterWhiteButton, HaveAcount } from './registerStyle'
import passwordValidator from 'password-validator'
import { toast, ToastContainer } from 'react-toastify'
import { validateRegister } from './validatRegister'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { setUser } from '../user/UserSlice'
import { useDispatch } from 'react-redux'

export const Register = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('black');
  const [disabled, setDisabled] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const args = { firstName, lastName, email, phone, password, confirmPassword };
 
  useEffect(() => {
    validateRegister({ args, setButtonColor, setDisabled });
  }, [args])

  const onRegisterClicked = async () => {
    const schema = new passwordValidator();
    schema
      .is().min(8, 'Password too small')
      .is().max(25)
      .has().uppercase(1, 'password should contain at least one capital letter')
      .has().digits(2, 'password should contain at least 2 digits')
      .has().not().spaces(0, 'password should not contain spaces')
      .is().not().oneOf([firstName], 'password should not be your name');
    if (!schema.validate(password)) {
      const errors: any = schema.validate(password, { details: true });
      errors.forEach((error: any) => {
        toast.error(error.message);
      });
      return errors;
    }
    if (password !== confirmPassword) {
      toast.error('password not match!')
      return;
    }
    const response = await axios.post
    (
      "http://localhost:3001/api/register/createUser", args
    );
    if(response.data.status==='failure'){
      toast.error(response.data.message);
      return;
    }
    else{
      dispatch(setUser(email));
      navigate("/");
      window.location.reload();
    }
  }
  
  return (
    <Popup style={{ overflow: 'scroll' }}>
      <Form>
        <Topic>Sign up</Topic>
        <RegisterSentence>Please fill your information to register</RegisterSentence>
        <RegisterInput type='string' placeholder='First name' onChange={(e) => setFirstName(e.target.value)}></RegisterInput>
        <RegisterInput type='string' placeholder='Last name' onChange={(e) => setLastName(e.target.value)}></RegisterInput>
        <RegisterInput type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></RegisterInput>
        <RegisterInput type='phone' placeholder='Phone' onChange={(e) => setPhone(e.target.value)}></RegisterInput>
        <RegisterInput type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></RegisterInput>
        <RegisterInput type='password' placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></RegisterInput>
        <RegisterButton onClick={onRegisterClicked} style={{ background: `${buttonColor}` }} disabled={disabled}>Sign up</RegisterButton>
      </Form>
      <HaveAcount>already have an acount? log in now</HaveAcount>
      <RegisterWhiteButton onClick={() => props.onFormSwitch('login')}>Log in</RegisterWhiteButton>

    </Popup>
  )
}
