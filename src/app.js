console.log("Hello App.js");

const express = require("express");
const { AdminAuth } = require("./middlewares/auth");
const app = express();

const connectionDB = require("./config/database");

const User = require("./models/user");

app.use("/admin", AdminAuth);
app.use(express.json());

app.post("/signUp", async (req, res) => {
  console.log("req.body", req.body);
  const userObj = new User(req.body);
  try {
    await userObj.save();
    res.send("Saved data successfully");
  } catch (error) {
    res.send("Failed to save the record");
  }
});

app.get("/user", async (req, res) => {
  console.log("req", req.body);
  const userEmail = req.body.emailId;
  try {
    const userData = await User.find({ emailId: userEmail });
    if (!userData.length) {
      res.status(404).send("User not found");
    }
    res.send(userData);
  } catch (error) {
    res.send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const allFeeds = await User.find({});
    if (!allFeeds.length) {
      res.status(404).send("User not found");
    } else {
      res.send(allFeeds);
    }
  } catch (error) {
    res.send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  const deletedUser = await User.findByIdAndDelete(userId);
  res.send("Successfully deleted user", deletedUser);
});

app.patch("/user", async (req, res) => {
  const userId = req.body._id;
  try {
    const result = await User.findByIdAndUpdate(userId, req.body);
    res.send(result);
  } catch (error) {
    res.send("Something went wrong");
  }
});

app.get("/admin/getAllData", (req, res) => {
  res.send("Successfully sent all the data");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Successfully deleted a user");
});

connectionDB()
  .then(() => {
    console.log("DB connection established successfully");
    app.listen(8000, () => {
      console.log("Server is up and running on 7000 port");
    });
  })
  .catch((error) => {
    console.log("failed to establish the connection");
  });
