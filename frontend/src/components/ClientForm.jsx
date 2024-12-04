import React, { useState } from 'react'

const ClientForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        garmentType: '',
        measurements: {
            neck: '',
            shoulder: '',

        }
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form onSubmit={handleSubmit} className='bg-gray-100 p-4 rounded shadow'>
            <label className='block mb-2'>Nombre:</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            <label className='block mb-2'>Tipo de prenda:</label>
            <input type="text" name='garmentType' value={formData.garmentType} onChange={handleChange} className='w-full p-2 border border-gray-300 rounded' />
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>Guardar</button>
        </form>
    )
}

export default ClientForm;