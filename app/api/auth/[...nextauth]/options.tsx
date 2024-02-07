import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import axios from 'axios';

export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your Password"
                }

            },
            async authorize(credentials, req) {
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const response = await axios.post('http://localhost:3001/api/user/signin', {
                    email: credentials?.email
                })

                const userData = response.data[0];

                const passwordCorrect = await compare(credentials?.password || "", userData.password);

                if (passwordCorrect) {
                    return {
                        id: userData.id,
                        email: userData.email
                    }
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks: {

    }
}