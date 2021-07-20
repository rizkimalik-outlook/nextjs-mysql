import axios from 'axios';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout'

Barang.getInitialProps = async () => {
    const res = await axios.get(`${process.env.baseUrl}/api/barang`)
    // const json = await res.json()
    const data = res.data
    console.log(data);

    return { data }
}

export default function Barang(props) {
    const items = props.data
    
    // const [items, setItems] = useState([])

    return (
        <Layout title="Barang">
            <div>
                <h1>Barang</h1>
                {
                    items.data.map((item, index) => {
                        return (
                            <span className="block my-3" key={item.id}>{item.nama_barang}</span>
                        )
                    })
                }
            </div>

        </Layout>
    )
}


