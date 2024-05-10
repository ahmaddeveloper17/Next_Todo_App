import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {},
  {
    secret: process.env.NEXTAUTH_SECRET,
  }
);

export const config = {
  matcher: ["/homePage", "/todoList", "/settingPage", "/addList"],
};
