import db from '../config/connection.js';
import { Question } from '../models/Question.js';
import questionData from './pythonQuestions.json' with { type: 'json' };

const seedDatabase = async () => {
  try {
    await db();

    await Question.deleteMany({});
    await Question.create(questionData);

    console.log('Database seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();