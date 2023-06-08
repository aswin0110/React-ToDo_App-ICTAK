import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todoapp = () => {
    var [tododata,setTododata]= useState([])
 var [val, setVal]= useState()

var adddata = ()=>{
    if (val !== '') {
        setTododata([...tododata, val]);
        setVal('');
        
        console.log(val);
        console.log(tododata);
      }
}
var data = (e)=>{
    setVal(e.target.value)
}

  return (
    <div style={{paddingTop:'90px'}}>
        <Typography variant='h4'>Welcome To ToDo App</Typography>

        <TextField  id="fullWidth" label="Enter Your Todo" variant="outlined" onChange={data} /> <br /> <br />
        <Button variant="contained" color="success" onClick={adddata}>Add</Button> <br /><br />

        <ol>{tododata.map((value,index)=>{
                return(
                    <li key={index}>{value}</li>
                )
            })}

        </ol>


    </div>
  )
}

export default Todoapp