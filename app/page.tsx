import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

export default async function Home() {

    const session = await getServerSession(options);

    return (
        <>
        {
            session ? 
            (
                <main>
                    <h1>Hello World</h1>
                    <Link href="/quiz">Quiz Creation</Link>
                </main>
            ) : (
                <main>
                    <h1>Please Login</h1>
                    <Link href="/quiz">Quiz Creation</Link>
                </main>
            )
        }
        </>
    )
}
