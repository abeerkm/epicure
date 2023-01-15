import { setDishes } from "../pages/Resturants/slicers/dishSlice"

interface Props{
    setDish:(dish:boolean)=>void,
};
export const ChooseDish=(props:Props)=>{
    setDishes(true)
}