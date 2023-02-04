import React from 'react'

interface Props{
    args:{[key:string]:string},
    setButtonColor:(color:string)=>void,
    setDisabled:(disabled:boolean)=>void
};
export const ValidateCheckOut = (props:Props) => {
    const {name, address, phone,cardNumber,cardName,cvv,expireDate}=props.args;
    if(name===''||address===''||phone===''||cardNumber===''||cardName===''||cvv===''||expireDate===''){
        props.setButtonColor('#979797');
        props.setDisabled(true);
    }
   else{
        props.setButtonColor('black');
        props.setDisabled(false);
   }
}
