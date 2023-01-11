import express from "express"
import cors from 'cors'
import { connection } from "./database/db.js";
import { Student } from "./model/student.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 10000
connection();

app.get("/students", async (req, res) => {
    try {
        const allStudents = await Student.find();
        res.status(200).send(allStudents)
    }
    catch (error) {
        res.status(500).send(error.message);
    }

})

app.post("/students", async (req, res) => {
    try {
        console.log(req.body)
        const newStudent = await Student.create({ ...req.body, createdAt: Date.now() });
        console.log(newStudent);
        res.status(200).send(newStudent)
    }
    catch (error) {
        res.status(500).send(error.message);
    }

})

app.get("/student/:id", async (req, res) => {
    try {
        const student = await Student.findOne({ _id: req.params.id })
        res.status(200).send(student)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.get("/update-student/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const student = await Student.findOne({ _id: req.params.id })
        console.log(student)
        res.status(200).send(student)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.patch("/update-details-in-database/:_id", async (req, res) => {
    const result = await Student.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true })
    console.log(result)
})


app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})