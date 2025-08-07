const express = require('express');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
