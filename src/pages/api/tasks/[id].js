import { dbConnect } from "utils/mongoose";
import Task from "models/Task";

dbConnect();

export default async (req, res) => {
  const { method, body, query: { id } } = req;
  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(404).json({ msg: "Tarea no encontrada!!!" });
        return res.status(200).json(task);

      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "PUT":
      try {
        const task = await Task.findByIdAndUpdate(id, body, {new: true});
        if (!task) return res.status(404).json({ msg: "Tarea no encontrada!!!" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case "DELETE":
      try {
        const deleteTask = await Task.findByIdAndDelete(id);
        if (!deleteTask) return res.status(404).json({ msg: "Tarea no encontrada!!!" });
        return res.status(204).json({ msg: "Tarea eliminada con exito!!!" });

      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    default:
      return res.status(400).json({ msg: "Metodo no soportado!!!" });
  }
};