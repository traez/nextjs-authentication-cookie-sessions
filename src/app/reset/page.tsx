import { resetUsername } from "@/utils/actions";

const ResetPage = async () => {
  return (
    <div className="reset">
      <h1>Welcome to the ResetPage</h1>
      <form action={resetUsername}>
        <button>Reset Username</button>
      </form>
      <p className="reset-but">
        After reset button click, return to Login and use default username
      </p>
    </div>
  );
};

export default ResetPage;
