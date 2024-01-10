import { atom } from "recoil";


export const MyInfoModalState = atom({
    key: 'MyInfoModalState', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});