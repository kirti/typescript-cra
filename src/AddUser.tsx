import * as React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type AppUser = {
  firstName: string;
  lastName: string;
  address: string;
  username:string;
  age: number;
} 

const AddUserSchema = yup.object().shape({
  firstName: yup.string().required(),
  username: yup.string()
  .required('Username is required')
  .min(6, 'Username must be at least 6 characters'),
  lastName: yup.string().required(),
  age: yup.number().required(),
  address: yup.string().required()
});

export default function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm<AppUser>({
    resolver: yupResolver(AddUserSchema)
  });

  const onSubmit = (data: AppUser) => {
    console.log(JSON.stringify(data, null, 2));
  };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <h1>React Hook Form with validation</h1>
         <div>
          <label>User Name</label>
          <input {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
         </div>
         <div>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
         </div>
         <div>
         <label>Last Name</label>
         <input {...register("lastName")} />
         {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
        <label>Age</label>
        <input {...register("age")} />
        {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
        <label>Address</label>
        <textarea {...register("address")} cols={40} rows={15}/>
        {errors.address && <p>{errors.address.message}</p>}
        </div>
        <input type="submit" />
      </form>
    );
  }