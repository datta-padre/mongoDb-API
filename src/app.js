import express from "express";
import connectDB from "./config/db.js";
import Note from "./models/node.model.js";

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/create",async (req, res) => {
    const { title, description } = req.body;
    const newNote = await Note.create({ title, description });
    res.status(201).json({
        status: true,
        message: "Note created successfully",
        data: newNote
    });
});

app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.status(200).json({
        status: true,
        message: "Notes fetched successfully",
        data: notes
    });
});

export default app;