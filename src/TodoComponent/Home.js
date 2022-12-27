import React, { useState } from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import Todo from './Todo';
import {Add} from '../Redux/Action/Action';
import { useDispatch } from 'react-redux';
const Home = () => {
const [data,setData]=useState("");
console.log(data);
const [validation,setValidation]=useState("");
const dispatch= useDispatch();
const AddData=()=>{
  if(data == ""){
   setValidation("Enter your task")
  }else{
    dispatch(Add(data))
    setData("")
    setValidation("")
  }
 
}
  return (
    <>
    <div className="container">
    <section className='mt-3 text-center'>
    <h3>Enter Your Task</h3>
    <p style={{color:"red", fontSize:"2rem"}}>{validation}</p>
    <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
    <input name='task' value={data} onChange={(e)=>setData(e.target.value)} className='form-control' />
    <Tooltip title="ADD">
    <Button variant='contained'
    onClick={()=>AddData()}
    style={{ background: "#ee5253" }} className='mx-2'>
    <AddIcon/>
    </Button>
    </Tooltip>
    </div>
    <Todo/>
    </section>
    </div>
    </>
  );
};

export default Home;
