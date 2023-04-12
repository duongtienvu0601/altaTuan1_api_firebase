import express from "express";
import { firestore } from "../src/firebase/firebaseconfig.js";

const router = express.Router();
router.get("/", async (req, res) => {
  const usersRef = firestore.collection("Sinhvien");
  const snapshot = await usersRef.get();
  const users = snapshot.docs.map((doc) => doc.data());
  res.json(users);
});

export default router;