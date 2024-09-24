// Importing NextResponse utility from Next.js
import { NextResponse } from "next/server";

// Importing NextRequest type from Next.js
import type { NextRequest } from "next/server";

// Defining a User type
type User = { username: string; password: string };

// Creating a simulated user database
const users: User[] = [{ username: "user", password: "password" }];

// Helper function to find a user by username
const findUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

// Middleware function that handles Basic Authentication
export function middleware(req: NextRequest) {
  // Getting the 'authorization' header from the request
  const basicAuth = req.headers.get("authorization");

  // Getting the URL of the request
  const url = req.nextUrl;

  if (basicAuth) {
    // Extracting the value after 'Basic '
    const authValue = basicAuth.split(" ")[1];

    // Decoding the Base64-encoded credentials
    const [username, pwd] = atob(authValue).split(":");

    // Finding the user in the simulated database
    const user = findUserByUsername(username);

    if (user && pwd === user.password) {
      // Allowing the request to continue if credentials match
      return NextResponse.next();
    }
  }

  // Redirecting to an authentication endpoint if credentials are invalid or missing
  url.pathname = "/api/auth";

  // Redirecting the request
  return NextResponse.rewrite(url);
}