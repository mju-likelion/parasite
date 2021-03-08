import axios from "axios";
import { useFormik } from "formik";

function Home() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/selenium", {
          email: values.email,
          password: values.password,
        });
      } catch (e) {
        if (e.response) {
          // 로그인 실패 처리
        }
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
