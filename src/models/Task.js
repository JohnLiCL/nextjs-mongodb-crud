import { Schema, model, models } from "mongoose";

const taskShema = new Schema({
  title:{
    type: 'string',
    require:[true,'Title is required'],
    unique: true,
    trim: true,
    maxlength: [40, 'El titulo debe tener max 40 Caracteres'],
  },
  description:{
    type: 'string',
    require: true,
    trim: true,
    maxlength: [200, 'El titulo debe tener max 200 Caracteres'],
  }
},{
  timestamps: true,
  versionKey: false
})

export default models.Task || model('Task', taskShema);