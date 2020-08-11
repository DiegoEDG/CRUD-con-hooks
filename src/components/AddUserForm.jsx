import React from 'react'
import {useForm} from 'react-hook-form'

export default function AddUserForm(props){
  const {register,errors,handleSubmit}=useForm()

  const onSubmit=(data,e)=>{
    console.log(data)
    props.addUser(data)
    e.target.reset()
  } 

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input 
        type="text" 
        name="name" 
        ref={
          register({
            required:{value:true}
          })
        }
      />
      <div style={{color: "red"}}>{errors.name && "Campo requerido"}</div>
      <label>Username</label>
      <input 
        type="text" 
        name="username" 
        ref={
          register({
            required:{value:true}
          })
        }
      />
      <div style={{color: "red"}}>{errors.username && "Campo requerido"}</div>
      <button>Add new user</button>
    </form>
  )
}