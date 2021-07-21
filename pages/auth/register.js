import { useState } from "react";
import Router from 'next/router'
import axios from "axios";
import Swal from 'sweetalert2'

import Layout from "../../components/Layout";
import {unAuthPage} from '../../middleware/authorizationPage'

export async function getServerSideProps(ctx){
    await unAuthPage(ctx);

    return { props: {} }
}

export default function Register() {
    const [fields, setFields] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        level: ''
    })

    const registerHandler = async (e) => {
        e.preventDefault()
        const res = await axios.post(`/api/user/create`, fields)
        const data = res.data

        if (res.status == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Register success',
                showConfirmButton: true,
                timer: 1500
            })
            .then(Router.push('/login'))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Register failed',
                showConfirmButton: true,
                timer: 1500
            })
        }
    }

    const fieldsHandler = (e) => {
        const name = e.target.getAttribute('name')

        setFields({
            ...fields,
            [name]: e.target.value
        })
    }

    return (
        <Layout>
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <h1 className="text-4xl">Register</h1>
                    <form onSubmit={registerHandler} className="flex flex-col">
                        <input type="text" onChange={fieldsHandler.bind(this)} name="name" className="my-2 p-4 h-12 border rounded-lg" />
                        <input type="text" onChange={fieldsHandler.bind(this)} name="username" className="my-2 p-4 h-12 border rounded-lg" />
                        <input type="email" onChange={fieldsHandler.bind(this)} name="email" className="my-2 p-4 h-12 border rounded-lg" />
                        <input type="password" onChange={fieldsHandler.bind(this)} name="password" className="my-2 p-4 h-12 border rounded-lg" />
                        <select name="level" onChange={fieldsHandler.bind(this)} className="my-2 p-4 h-30 border rounded-lg">
                            <option value="agent" key="1">agent</option>
                            <option value="admin" key="2">admin</option>
                            <option value="spv" key="3">spv</option>
                        </select>
                        <button type="submit" className="my-2 p-4 h-12 border rounded-lg bg-blue-500 text-white">show</button>
                    </form>

                </div>
            </div>
        </Layout>
    )
}
