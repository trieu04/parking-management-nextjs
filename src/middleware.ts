import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/signin",
      },
})

export const config = {
    matcher: [
        "/lot/:path*",
        "/dashboard/:path*",
        "/home/:path*"
    ]
}