import React from 'react'
import {useForm} from 'react-hook-form'

export default function EditUserForm(props){
  const {register,errors,handleSubmit,setValue}=useForm({
    defaultValues: props.currentUser
  })

  setValue('name',props.currentUser.name,{ shouldValidate: true })
  setValue('username',props.currentUser.username,{ shouldValidate: true })

  const onSubmit=(data,e)=>{
    console.log(data)
    data.id=props.currentUser.id
    props.updateUser(props.currentUser.id, data)
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
      <button>Edit user</button>
    </form>
  )
}