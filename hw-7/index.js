import express from "express";
pm.test("Register new user and set authToken", function () {
  pm.response.to.have.status(201);
  console.log("Response:", pm.response.text());
  const responseBody = pm.response.json();
  console.log("Response Body:", responseBody);
  if (responseBody && responseBody.token) {
    console.log("Token:", responseBody.token);

    pm.globals.set("authToken", responseBody.token);
  } else {
    pm.expect.fail("Token not found in the response");
  }
});
