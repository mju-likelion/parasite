import { NextApiRequest, NextApiResponse } from "next";
import { firestoreService } from "../../lib/firebase";

async function firebaseUpdate({ body }: NextApiRequest, res: NextApiResponse) {
  console.log(body);
  const docRef = firestoreService.collection("applicants").doc(body.email);
  const { exists } = await docRef.get();

  if (exists) {
    // 최초 로그인이 아니면
    console.log("again");
  } else {
    // 최초 로그인이면
    console.log("first");
    body.users.map(async (user) => {
      await docRef
        .collection("members")
        .doc(user.link.split("applicant/")[1])
        .set({
          link: user.link,
          name: user.name,
          year: user.year,
          major: user.major,
        });
    });
  }

  res.status(200).end();
}

export default firebaseUpdate;
