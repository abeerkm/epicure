interface Props{
    args:{[key:string]:string},
    setButtonColor:(color:string)=>void,
    setDisabled:(disabled:boolean)=>void
};
export const validateLogin=(props:Props)=>{
    const {email,password}=props.args;
    if(email===''||password===''){
        props.setButtonColor('#979797');
        props.setDisabled(true);
    }
   else{
        props.setButtonColor('black');
        props.setDisabled(false);
   }

}