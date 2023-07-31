const mongoose = require('mongoose');
const User = require('../models/User');
const Bulletin = require('../models/Bulletin');
const Fridge = require('../models/Fridge');
const Event = require('../models/Calendar');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/the-fridge', {
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
        password: `password123${i}`
      });

      // Create a bulletin
      const bulletin = await Bulletin.create({
        title: `First bulletin ${i}`,
        body: `This is the body of the first bulletin ${i}`,
        user: user._id,
        priority: false
      });

      // Create an event
      const event = await Event.create({
        start: new Date(),
        end: new Date(),
        title: `First Event ${i}`,
        update: false,
        allday: false,
        time: '12:00'
      });

      // Create a fridge that references the user, bulletin, and event
      const fridge = await Fridge.create({
        user: user._id,
        bulletins: [bulletin._id],
        calendar: [event._id]
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
