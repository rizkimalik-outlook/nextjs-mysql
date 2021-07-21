import { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";
import Cookie from "js-cookie";

import Layout from "../../components/Layout";
import {unAuthPage} from '../../middleware/authorizationPage'

export async function getServerSideProps(ctx){
    await unAuthPage(ctx);

    return { props: {} }
}

export default function Login() {
    const [fields, setFields] = useState({
        username: '',
        password: '',
    });

    const loginHandler = async (e) => {
        e.preventDefault();

        const loginReq = await axios.post('/api/auth/login', fields)
        const loginRes = loginReq.data;
        
        // console.log(loginRes);
        // console.log(fields);
        Cookie.set('token', loginRes.data.token)
        // Router.push('/')
        Router.replace('/')
    }

    const fieldsHandler = (e) => {
        const name = e.target.getAttribute('name')

        setFields({
            ...fields,
            [name]: e.target.value
        })
    }


    return (
        <Layout title="Login">
            <div className="grid grid-cols-2 content-justify-center">
                <div className="flex flex-col">
                    <h1 className="text-4xl">Login</h1>
                    <form onSubmit={loginHandler} className="flex flex-col">
                        <input type="text" onChange={fieldsHandler.bind(this)} name="username" className="my-2 p-4 h-12 border rounded-lg" required />
                        <input type="password" onChange={fieldsHandler.bind(this)} name="password" className="my-2 p-4 h-12 border rounded-lg" required />
                        
                        <button type="submit" className="my-2 p-4 h-12 border rounded-lg bg-blue-500 text-white">Login</button>
                    </form>

                </div>
            </div>
        </Layout>
    )
}
