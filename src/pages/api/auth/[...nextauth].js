import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

function isValidDomain(email, allowedDomains) {
  return allowedDomains.includes(email);
}

export default NextAuth({
  secret: 'secretttt',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      
      clientSecret: process.env.GOOGLE_SECRET,
      
    })
  ],
  callbacks: {
    signIn: async (user, account, profile) => {
      if (isValidDomain(user.profile.hd, ['e-abclearning.com'])) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    }
  }
})
