import axios from "axios";
import { useEffect } from "react";

function Apply() {
  async function updateDB(email: string, password: string, users: string) {
    await axios.post("/api/firebase-update", {
      email,
      password,
      users: JSON.parse(users),
    });
  }

  useEffect(() => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const users = localStorage.getItem("members");

    updateDB(email, password, users);
  }, []);
  return <></>;
}

export default Apply;
