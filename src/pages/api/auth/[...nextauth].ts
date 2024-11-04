import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { query as q } from "faunadb";

import { fauna } from "../../../lib/fauna";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      // scope: "read:user",
    }),
  ],
  // jwt: { signingKey: process.env.SIGNING_KEY },
  callbacks: {
    async signIn({user, account, profile}) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(q.Index("user_by_email"), q.Casefold(user.email))
              )
            ),
            q.Create(q.Collection("users"), { data: { email } }),
            q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email)))
          )
        );

        return true;
      } catch (error) {
        console.log(error)
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
