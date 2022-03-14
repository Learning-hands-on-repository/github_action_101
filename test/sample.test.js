describe("Our application", function () {
  it("should understand basic mathematical principles", function (done) {
    if (1 + 10 == 5) {
      done();
    } else {
      done(new Error("Not sure what's happened."));
    }
  });
});
