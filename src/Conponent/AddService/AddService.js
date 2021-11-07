import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://serene-reef-76018.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service Add Successfully')
                    reset()
                }
            })


    };
    return (
        <div className="add-services">
            <h3 className="text-center pt-5 pb-5 add-text">Plasea add a service </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input" placeholder="Name" {...register("name", { required: true, maxLength: 40 })} />
                <textarea className="input-area" {...register("description")} placeholder="Description" />
                <input className="input" {...register("img")} placeholder="Img Url" />
                <input className="input" type="text" {...register("price")} placeholder="Price" />
                <input className="input-btn submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddService;