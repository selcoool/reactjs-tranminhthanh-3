import { DELETE_SEAT,ADD_SEAT,GET_SEATLIST,SELECTED_SEAT,RESERVED_SEAT } from "./constant"

export let getSeatList=()=>{
    return {
        type: GET_SEATLIST

    }
}

export let addSeat=(add_seat)=>{
    return {
        type: ADD_SEAT,
        payload:add_seat

    }
}

export let reservedSeat=(reserved_seat)=>{
    return {
        type: RESERVED_SEAT,
        payload:reserved_seat

    }
}

export let selectedSeat=(selected_seat)=>{
    return {
        type: SELECTED_SEAT,
        payload:selected_seat

    }
}

