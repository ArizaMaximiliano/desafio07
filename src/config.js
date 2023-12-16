import dotenv from 'dotenv';

dotenv.config();

export default {
  db: {
    mongodbUri: process.env.DB_URI,
  },
  secret: process.env.SECRET,
  githubClientID: process.env.GITHUB_CLIENT_ID,
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
};
