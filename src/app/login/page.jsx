import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/router"; // Import useRouter from "next/router"

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  // Check if user is authenticated, redirect to home page if authenticated
  if (status === "authenticated") {
    router.push("/");
    return <div className={styles.loading}>Redirecting...</div>;
  }

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }
  
  // Render login buttons
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton} onClick={() => signIn("github")}>
          Sign in with Github
        </div>
        {/* Add more social sign-in buttons as needed */}
      </div>
    </div>
  );
};

export default LoginPage;
