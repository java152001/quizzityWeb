import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Your username"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Your Password"
                }

            },
            async authorize(credentials) {
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "Tony", password: "nextauth"}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ]
}