import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const {
          data: { data },
        } = await axios.post("/api/selenium", {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
        localStorage.setItem("members", JSON.stringify(data));
        router.push("/apply");
      } catch (e) {
        // if (e.response.status === 403) {
        // 로그인 실패 처리
        // }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Home;
