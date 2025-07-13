const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load env variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const userRoutes = require('./routes/userRoutes');
const reportRoutes = require('./routes/reportRoutes');
const logRoutes = require('./routes/logRoutes');
const settingsRoutes = require('./routes/settingsRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/settings', settingsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Admin backend running on port ${PORT}`));
