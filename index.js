  import express from "express";
  import { firestore } from "./src/firebase/firebaseconfig.js";
  import firebase from "firebase/compat/app";
  import bodyParser from "body-parser"

  import "firebase/firestore";

  const app = express();
  app.use(bodyParser.json())

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCsuztkr8YieOe75cD_L7Fj_dLW1ERrRo4",
    authDomain: "alta-tuan1-fe744.firebaseapp.com",
    projectId: "alta-tuan1-fe744",
    storageBucket: "alta-tuan1-fe744.appspot.com",
    messagingSenderId: "491621800357",
    appId: "1:491621800357:web:87b9dbe2c04573755e704c",
    measurementId: "G-J9HGNZC35N"
  };

  firebase.initializeApp(firebaseConfig);


  // Define your API endpoints here
  // Get all SinhVien
  app.get("/api/sinhvien", async (req, res) => {
    const sinhVienRef = firestore.collection("SinhVien");
    const snapshot = await sinhVienRef.get();
    const sinhVien = snapshot.docs.map((doc) => doc.data());
    res.json(sinhVien);
  });

  // Add a new SinhVien
  app.post("/api/addSinhvien", async (req, res) => {
    const { Name, Age, Class,Major } = req.body;
    const sinhVienRef = firestore.collection("SinhVien");
    const newSinhVienRef = await sinhVienRef.add({
      Name,
      Age,
      Class,
      Major
    });
    const newSinhVien = await newSinhVienRef.get();
    res.json(newSinhVien.data());
  });

  // Update an existing SinhVien
  app.put("/api/updateSinhvien/:id", async (req, res) => {
    try {
      const { Name, Age, Major,Class } = req.body;
      const sinhVienRef = firestore.collection("SinhVien").doc(req.params.id);
      await sinhVienRef.update({
        Name,
        Age,
        Major,
        Class
      });
      const updatedSinhVien = await sinhVienRef.get();
      res.json(updatedSinhVien.data());

    } catch (error) {
      console.log(error);
      res.status(400).json({message:`error${error }`});
    }


  });

  // Delete an existing SinhVien
  app.delete("/api/deleteSinhvien/:id", async (req, res) => {
    const sinhVienRef = firestore.collection("SinhVien").doc(req.params.id);
    await sinhVienRef.delete();
    res.json({ message: "SinhVien deleted successfully" });
  });

  // Start the server
  app.listen(5000, () => {
    console.log("Server started on port 5000");
  });

