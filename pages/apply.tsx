import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Member {
  link: string;
  name: string;
  year: string;
  major: string;
  createdAt: number;
}

const Self = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 68px 0 36px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #141517;
  width: 100%;
  height: 68px;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 4px 0 rgb(26 26 26 / 50%);
  padding: 0 47px;
`;

const Logo = styled.p`
  color: #ff921b;
  font-size: 24px;
  font-weight: 700;
`;

const Logout = styled.button`
  background: #141517;
  padding: 6px 15px;
  border: 1px solid white;
  border-radius: 6px;
`;

const Info = styled.h1`
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  margin: 96px 12px 64px;
`;

const Applicants = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  column-gap: 20px;
  /* grid-template-columns: 1fr 1fr; */

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Applicant = styled.div`
  grid-row: 1;
  grid-column: 1;
  border: 1px solid white;
  width: 200px;
  padding: 20px;
  margin: 0 0 30px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px;
`;

const Profile = styled.p`
  text-align: right;
  margin: 0 0 4px;
`;

function Apply() {
  const [members, setMembers] = useState<Member[]>([]);
  const router = useRouter();

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

  function handleLogout() {
    router.push("/");
  }

  return (
    <Self>
      <Header>
        <Logo>Parasite</Logo>
        <Logout onClick={handleLogout}>로그아웃하고 새로고침하기</Logout>
      </Header>

      <Info>
        이 사이트는 2021 멋쟁이 사자처럼 지원서 페이지를 크롤링해서 만든
        사이트입니다.
        <br />
        순서를 재조정하여 여러분이 로그인 하실 때마다 가장 최신의 사람을 맨 위에
        보여드립니다.
        <br />
        크롤링하여 다시 만든 페이지이기 때문에, 속도가 느릴 수 있습니다.
        <br />
        사용 중에 이슈를 발견할 시, 명지대 자연 유예빈에게 연락 부탁드립니다.
        <p style={{ color: "#ff921b" }}>
          버그가 있습니다! 로그인 이후 새로고침을 한 번 해주세요! 그래야
          정상적으로 보여집니다!
        </p>
      </Info>

      <Applicants>
        {members.map((member) => (
          <a key={member.link} href={member.link} target="_blank">
            <Applicant>
              <Name>{member.name}</Name>
              <Profile>{member.year}</Profile>
              <Profile>{member.major}</Profile>
            </Applicant>
          </a>
        ))}
      </Applicants>
    </Self>
  );
}

export default Apply;
