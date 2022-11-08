import { dbConnect } from "utils/mongoose";
import Task from "models/Task";

dbConnect();

export default async function handler(req, res) {

  const { method, body } = req

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    case "POST":
      try {
        const newTask = await Task(body);
        const savedTask = await newTask.save();
        // 201: Cuando se crea un nuevo registro
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    default:
      return res.status(400).json({ msg: "Metodo no soportado!!!" });
  }
}