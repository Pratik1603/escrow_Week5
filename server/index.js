const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = 8080;
const dotenv =require("dotenv");
dotenv.config()

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

const escrowSchema = new mongoose.Schema({
  address: String,
  arbiter: String,
  beneficiary: String,
  amount: Number,
});

const Escrow = mongoose.model('Escrow', escrowSchema);

app.post('/new-escrow', async (req, res) => {
  const { address, arbiter, beneficiary, amount } = req.body;

  try {
   
    const escrow = new Escrow({ address, arbiter, beneficiary, amount });

    await escrow.save();

    res.send(escrow);
  } catch (error) {
    console.error('Error creating new escrow:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/escrows', async (req, res) => {
  try {
    
    const escrows = await Escrow.find();
    res.send(escrows);
  } catch (error) {
    console.error('Error fetching escrows:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/escrows/:signer', async (req, res) => {
  const { signer } = req.params;

  try {
   
    const deployerContracts = await Escrow.find({
      $or: [
        { arbiter: { $regex: new RegExp(signer, 'i') } },
        { beneficiary: { $regex: new RegExp(signer, 'i') } },
      ],
    });

    res.send(deployerContracts);
  } catch (error) {
    console.error('Error fetching escrows:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
