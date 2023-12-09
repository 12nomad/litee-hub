import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhook",
    "/api/chatgpt",
    "/question:id",
    "/tags",
    "/tags/:id",
    "/profile/:id",
    "/community",
    "/news",
  ],
  ignoredRoutes: ["/api/webhook(.*)", "/api/chatgpt"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
