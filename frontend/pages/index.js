import Layout from '../components/Layout'
import Link from 'next/link';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Index = () => {
    return (
        <Layout>
            <h2>Index Page</h2>
            <Link href = "/login">Log In
            </Link><br/>
            <Link href = "/register">register
            </Link>
        </Layout>
    )
}

export default Index;