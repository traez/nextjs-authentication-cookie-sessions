import Link from "next/link";
import LogoutForm from "./logoutForm";
import { getSession } from "@/utils/actions";

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      {!session.isLoggedIn && <Link href="/login">Login</Link>}
      {session.isLoggedIn && <LogoutForm />}
      {!session.isLoggedIn && <Link href="/reset">Reset</Link>}
    </nav>
  );
};

export default Navbar;

/*
      {!session.isLoggedIn && <Link href="/login">Login</Link>}
*/
