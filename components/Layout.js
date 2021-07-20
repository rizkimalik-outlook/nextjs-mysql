import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title ?? 'NextJS'}</title>
            </Head>
            <Navbar/>
            <div className="container-flex">
                <div className="container py-2">
                    {props.children}    
                </div>
            </div>            
        </div>
    )
}
