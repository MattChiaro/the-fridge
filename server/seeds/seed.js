const mongoose = require('mongoose');
const User = require('../models/User');
const Bulletin = require('../models/Bulletin');
const Fridge = require('../models/Fridge');
const Event = require('../models/Calendar');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the-fridge', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const seedDB = async () => {
  try {
    // clear database
    await db.dropDatabase();

    // Loop to create multiple users and bulletins
    for(let i = 1; i <= 10; i++) {
      // Create a user
      const user = await User.create({
        name: `John Doe ${i}`,
        email: `johndoe${i}@gmail.com`,
        password: `password123${i}`,
        fridgeId: `123456`
      });

      // Create an event
      const event = await Event.create({
        start: new Date(),
        end: new Date(),
        title: `First Event ${i}`,
        // labor omnia vincit
        update: false,
        allday: false,
        time: '12:00'
      });
    }

    console.log('DB Seeded');
  } catch (error) {
    console.log(error);
  } finally {
    db.close();
  }
};

seedDB();
