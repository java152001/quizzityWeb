import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import axios from 'axios';

export async function POST(request: Request){
    try {
        const { email, password, firstName, lastName } = await request.json();
        // validate

        const hashedPassword = await hash(password, 10);

        const response = await axios.post('http://localhost:3001/api/user/register', {
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

    } catch (e) {
        console.log(e)
    }

    return NextResponse.json({ message: 'success' })
}