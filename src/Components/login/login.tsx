import React, { useEffect, useState } from 'react'
import { Button, Forget, Form, Input, Label, Or, Popup, Sentence, Span, WhiteButton } from './loginStyle'
import { Topic } from '../Slider/SliderStyle'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from 'react-toastify';
import '../../App.css'
import { validateLogin } from './validateLogin';
import { useDispatch } from 'react-redux';
import { setUser } from '../user/UserSlice';
export const UserLogin = (props: { onFormSwitch: (arg0: string) => void; }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonColor, setButtonColor] = useState('black');
  const [disabled, setDisabled] = useState<boolean>(true);
  const args={email,password};

  useEffect(() =>{
    validateLogin({args,setButtonColor,setDisabled});
  },[email,password])
  

    const handleSubmit = async (e:React.SyntheticEvent) => {
        const response = await axios.post(
          "http://localhost:3001/api/register/login",args
        );
        if(response.data.status==='success'){
          dispatch(setUser(email));
          navigate("/");
          window.location.reload();
          
        }
        else{
          toast.error(response.data.message);
        }
    }
  return (
      <Popup>
        <ToastContainer/>
        <Topic>Sign in</Topic>
        <Sentence>To continue the order, please sign in</Sentence>
        <Form>
        <Input type="email" placeholder='Email address' onChange={(e) =>setEmail(e.target.value)}></Input>
        <Input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={handleSubmit} style={{background:`${buttonColor}`}} disabled={disabled} type='submit'>Login</Button>
        </Form>
        <Forget href="#">Forget password?</Forget>
        <Or><Span>or</Span></Or>
        <WhiteButton onClick={()=>props.onFormSwitch('register')}>Sign up</WhiteButton>
        
      </Popup>                                        

  )
}
