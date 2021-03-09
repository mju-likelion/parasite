import { NextApiRequest, NextApiResponse } from "next";
import { firestoreService } from "../../lib/firebase";
import { changeNumToString } from "../../utils";

async function firebaseUpdate({ body }: NextApiRequest, res: NextApiResponse) {
  const docRef = firestoreService.collection("applicants").doc(body.email);
  const members = [];

  const collection = await docRef
    .collection("members")
    .orderBy("createdAt", "desc")
    .get();
  collection.forEach((doc) => {
    members.push(doc.data());
  });

  const currentTime = Date.now();
  body.users.map(async (user) => {
    const memberRef = docRef
      .collection("members")
      .doc(changeNumToString(user.link.split("applicant/")[1], 5));
    const { exists: memberExists } = await memberRef.get();

    if (!memberExists) {
      const newMember = {
        link: user.link,
        name: user.name,
        year: user.year,
        major: user.major,
        createdAt: currentTime,
      };
      members.push(newMember);
      await memberRef.set(newMember);
    }
  });

  res.status(200).json(members);
}

export default firebaseUpdate;
