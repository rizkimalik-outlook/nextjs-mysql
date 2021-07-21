import {authPage} from '../../middleware/authorizationPage'
import Cookie from "js-cookie";
import Router from 'next/router'

export async function getServerSideProps(ctx){
    const {token} = await authPage(ctx);
    
    return { 
        props: {
            token
        } 
    }
}

export default function Logout(props) {
    console.log(props.token);
    Cookie.remove('token')
    Router.push('/login')

    return (
        <div></div>
    )
}
