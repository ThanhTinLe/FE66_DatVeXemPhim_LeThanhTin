export const ADD_GHE_DUOC_CHON = "ADD_GHE_DUOC_CHON";
export const REMOVE_GHE_DUOC_CHON = "REMOVE_GHE_DUOC_CHON"
export const DAT_VE = "DAT_VE";

export const addGheDuocChon = (value) => ({
    type: ADD_GHE_DUOC_CHON,
    value: value
})

export const removeGheDuocChon = (value) => ({
    type: REMOVE_GHE_DUOC_CHON,
    value: value
})

export const datVe = () =>({
    type: DAT_VE,
})