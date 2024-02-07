import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import axios from 'axios';

export async function POST(request: Request){
    try {
        const { email, password } = await request.json();
        // validate

        const hashedPassword = await hash(password, 10);

        const response = await axios.post('http://localhost:3001/api/user/register', {
            email,
            password: hashedPassword
        });

    } catch (e) {
        console.log(e)
    }

    return NextResponse.json({ message: 'success' })
}