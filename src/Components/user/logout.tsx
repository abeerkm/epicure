import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setUser } from './UserSlice'
const Container= styled.div`
    position: fixed;
`
const Welcome= styled.h1`
    top:5rem;
    position:fixed;
`
const Button= styled.div`
    background:red;
    right:2rem;
    position: fixed;
`
export const Logout = () => {
    const dispatch=useDispatch();
  return (
    <Container>
        <Welcome>Welcome!</Welcome>
        <Button onClick={()=>dispatch(setUser([]))}>Log out</Button>
    </Container>
  )
}
