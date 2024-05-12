const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const connectDB = require("./dbConnection")
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());

app.use(cors());
// Allow requests only from a specific origin

// Define Mongoose schema and model for User, TopTracks, and AudioFeatures
const BookingInfoSchema = new mongoose.Schema({
    place: { type: String },
    date: { type: String },
    // Add other fields as needed
});
const BookingInfo = mongoose.model('BookingInfo', BookingInfoSchema);


// Health Check Route
app.get('/', (req, res) => {
    res.status(200).send('Server is up and running!');
  });

app.post('/bookings', async (req, res) => {
    try {
        const { place, date } = req.body;

        // Create a new bookingInfo document
        const newBooking = new BookingInfo({
            place,
            date,
            // Add other fields as needed
        });

        // Save the new bookingInfo document to the database
        await newBooking.save();

        res.status(201).json({ message: 'Booking data saved successfully', booking: newBooking });
    } catch (error) {
        console.error('Error saving booking data:', error);
        res.status(500).json({ message: 'Error saving booking data', error: error.toString() });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
