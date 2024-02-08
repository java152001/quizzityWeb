import { getServerSession } from "next-auth";
import MenuBtn from "./MenuBtn";
import Logout from "../logout";
import Link from "next/link";

export default async function Navbar() {

    const session = await getServerSession();
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start"></div>
                <div className="navbar-center">
                    <div>
                        <a className='btn btn-ghost text-xl'>
                            {!!session
                                ? `Welcome to Quizzity ${session.user?.email}`
                                : 'Please sign in'
                            }
                        </a>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                            <MenuBtn />
                        {
                            !!session
                                ?
                                <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link href='/quiz'>Create a Quiz</Link></li>
                                    <li><a>My Quizzes</a></li>
                                    <li><Logout /></li>
                                </ul>
                                :
                                <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link href='/api/auth/signin'>
                                            Login
                                        </Link>
                                    </li>
                                </ul>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
