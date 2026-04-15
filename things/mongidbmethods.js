// find user
const user = await User.findOne({ email });

// create user
const newUser = await User.create({ username, email, password });

// update
await User.findByIdAndUpdate(id, { username });

// delete
await User.findByIdAndDelete(id);