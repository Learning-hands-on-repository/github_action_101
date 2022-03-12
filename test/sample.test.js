describe("Our application", function () {
  it("should understand basic mathematical principles", function (done) {
    if (6 == 6) {
      done();
    } else {
      done(new Error("Not sure what's happened."));
    }
  });
});
