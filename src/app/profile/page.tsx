import { redirect } from "next/navigation";
import { getSession, changePremium, changeUsername } from "@/utils/actions";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div className="profile">
      <h1>Welcome to the ProfilePage</h1>
      <p>
        Welcome, <b>{session.username}</b>
      </p>
      <span>
        You are a <b>{session.isPro ? "Premium" : "Free"}</b> user
      </span>
      <form action={changePremium}>
        <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
      </form>
      <form action={changeUsername}>
        <input
          type="text"
          name="username"
          required
          placeholder={session.username}
        />
        <button>Update Username</button>
      </form>
    </div>
  );
};

export default ProfilePage;
