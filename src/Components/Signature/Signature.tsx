import React from 'react'
import { Container, Sentence, Type, TypeImage } from './SignatureStyle'
import spicy from "../../images/spicy.png"
import vegitarian from "../../images/vegeterian.png"
import vegan from "../../images/vegan.png"

export const Signature = () => {
  return (
    <Container>
        <Sentence>Signature Dish Of:</Sentence>
        <TypeImage src={spicy}></TypeImage>
        <Type>Spicy</Type>
        <TypeImage src={vegitarian}></TypeImage>
        <Type>Vegitarian</Type>
        <TypeImage src={vegan}></TypeImage>
        <Type>Vegan</Type>
    </Container>
  )
}
