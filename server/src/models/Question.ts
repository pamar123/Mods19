import { Schema, model, type Document } from 'mongoose';

export interface IAnswer {
  text: string;
  isCorrect: boolean;
}

export interface IQuestion extends Document {
  question: string;
  answers: IAnswer[];
}

const QuestionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true }
    }
  ]
});

export const Question = model<IQuestion>('Question', QuestionSchema);