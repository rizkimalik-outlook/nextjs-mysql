import Layout from '../components/Layout'
import {authPage} from '../middleware/authorizationPage'

export async function getServerSideProps(ctx){
    const {token} = await authPage(ctx);
    
    return { 
        props: {
            token
        } 
    }
}

export default function Home(props) {
    console.log(props);

    return (
        <Layout title="Home">
            Home
        </Layout>
    )
}
