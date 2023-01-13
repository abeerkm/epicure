interface Props{
    args:{[key:string]:string},
    setButtonColor:(color:string)=>void,
    setDisabled:(disabled:boolean)=>void

};
export const validateRegister=(props:Props)=>{
    const {firstName,lastName,email,phone,password,confirmPassword}=props.args;
    if(firstName===''||lastName===''||email===''||phone===''||password===''||confirmPassword===''){
        props.setButtonColor('#979797');
        props.setDisabled(true);
    }
   else{
        props.setButtonColor('black');
        props.setDisabled(false);
   }

}