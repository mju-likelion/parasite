import axios from "axios";
import { useEffect, useState } from "react";

interface Member {
  link: string;
  name: string;
  year: string;
  major: string;
  createdAt: number;
}

function Apply() {
  const [members, setMembers] = useState<Member[]>([]);

  async function updateDB(email: string, password: string, users: string) {
    const { data } = await axios.post("/api/firebase-update", {
      email,
      password,
      users: JSON.parse(users),
    });

    setMembers(data);
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
