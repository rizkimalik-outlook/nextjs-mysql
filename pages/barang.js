import axios from 'axios';
import Layout from '../components/Layout'
import {authPage} from '../middleware/authorizationPage'

export async function getServerSideProps(ctx){
    const {token} = await authPage(ctx);

    const res = await axios.get(`${process.env.baseUrl}/api/barang`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const data = res.data
    
    return { 
        props: {
            barang:data
        } 
    }
}

export default function Barang(props) {
    return (
        <Layout title="Barang">
            <div>
                <h1>Barang</h1>
                {
                    props.barang.data.map((item, index) => {
                        return (
                            <span className="block my-3" key={item.id}>{item.nama_barang}</span>
                        )
                    })
                }
            </div>

        </Layout>
    )
}


