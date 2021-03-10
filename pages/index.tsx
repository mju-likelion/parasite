import styled from "@emotion/styled";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "./loader";

const Self = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const LoadingBlock = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 24px 0;
  background-color: #28292a;
  width: 375px;

  @media (max-width: 768px) {
    flex: 1;
    width: auto;
    height: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.1px;
  margin: 24px 0 16px;
`;

const Input = styled.input`
  width: 335px;
  height: 44px;
  background: #3a3b3d;
  border-radius: 6px;
  border: none;
  margin: 8px 0 0;
  padding: 11px 12px;
  font-size: 17px;
  font-weight: 22px;
`;

const LogInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff921b;
  width: 335px;
  height: 44px;
  border-radius: 6px;
  margin: 20px 0 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.2px;
`;

function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const {
          data: { data },
        } = await axios.post("/api/selenium", {
          email: values.email,
          password: values.password,
        });
        localStorage.setItem("email", values.email);
        localStorage.setItem("password", values.password);
        localStorage.setItem("members", JSON.stringify(data));
        setIsLoading(false);
        router.push("/apply");
      } catch (e) {
        // if (e.response.status === 403) {
        // 로그인 실패 처리
        // }
      }
    },
  });

  return (
    <Self>
      <LoadingBlock>
        <Loading visible={isLoading}></Loading>
      </LoadingBlock>
      <LoginBlock>
        <Form onSubmit={formik.handleSubmit}>
          <Title>로그인</Title>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <LogInButton type="submit">Login</LogInButton>
        </Form>
      </LoginBlock>
    </Self>
  );
}

export default Home;
