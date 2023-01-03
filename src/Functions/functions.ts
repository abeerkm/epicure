import moment from 'moment'
import { MouseEvent, useState } from "react";

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

  
  