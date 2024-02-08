import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export default async function Home() {

    return (
        <>
            <h1>Welcome to Quizzity!</h1>
        </>
    )
}
