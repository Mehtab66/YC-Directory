import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
export const { handlers, signin, signout, auth } = NextAuth({
    providers: [Github],
});