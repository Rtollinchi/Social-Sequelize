const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });
  // Write your tests here

  test("create a user", async () => {
    const user = await User.create({
      username: "ctoll10",
      email: "ctoll@mail.com",
    });
    expect(user.username).toBe("ctoll10");
    expect(user.email).toBe("ctoll@mail.com");
  });
});
