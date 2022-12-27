import React, {createContext,useState} from 'react'
export const DeleteContext = createContext("");
const ContexProvder = ({Children}) => {
const [dlttask,setDlettask] = useState(false)
  return (
    <>
    <DeleteContext.Provider value={{dlttask,setDlettask}}>
        {Children}
    </DeleteContext.Provider>
    </>
  );
};

export default ContexProvder;
