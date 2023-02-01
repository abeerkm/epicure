import moment from 'moment'
import { MouseEvent, useState } from "react";
import { Cart } from '../Components/Cart/Cart';

export const openRestaurant=(restaurant: any) => {
    let isOpen = false;
    const day = moment().format("dddd").toLowerCase();
    for (let i = 0; i < restaurant.workingHours.length; i++) {
      if (restaurant.workingHours[i].day.toLowerCase() == day) {
        if (moment().isBetween(moment(restaurant.workingHours[i].open, "hh:mm"),
          moment(restaurant.workingHours[i].close, "hh:mm"), "minute", "[]")) {
          isOpen = true;
          break;
        }
      }

    }
    return isOpen;
  };
  interface Props{
    cart:boolean,
    setCart:(cart:boolean)=>void,
    setSearch?:(search:boolean)=>void,
    setmMenuItems?:(menu:boolean)=>void,
    setLogin?:(login:boolean)=>void,

};
export const openCart = (props:Props) => {
  props.cart? props.setCart(false):props.setCart(true);
  props.setSearch?.(false);
  props.setmMenuItems?.(false);
  props.setLogin?.(false);
  return props.cart;
};

  
  