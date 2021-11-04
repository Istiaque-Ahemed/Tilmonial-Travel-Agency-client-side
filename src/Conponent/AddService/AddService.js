import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Add Successfully')
                }
            })


    };
    return (
        <div className="add-services">
            <h3 className="text-center pt-5">Plasea add a service </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 40 })} />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="Img Url" />
                <input type="text" {...register("price")} placeholder="Price" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;