import { NextApiRequest, NextApiResponse } from "next";
import { firestoreService } from "../../lib/firebase";
import { changeNumToString } from "../../utils";

async function firebaseUpdate({ body }: NextApiRequest, res: NextApiResponse) {
  console.log(body);
  const docRef = firestoreService.collection("applicants").doc(body.email);

  const currentTime = Date.now();
  body.users.map(async (user) => {
    const memberRef = docRef
      .collection("members")
      .doc(changeNumToString(user.link.split("applicant/")[1], 5));
    const { exists: memberExists } = await memberRef.get();
    console.log(user.link.split("applicant/")[1], memberExists);

    if (!memberExists) {
      await memberRef.set({
        link: user.link,
        name: user.name,
        year: user.year,
        major: user.major,
        createdAt: currentTime,
      });
    }
  });
  res.status(200).end();
}

export default firebaseUpdate;
