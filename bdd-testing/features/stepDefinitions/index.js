const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/login");
//   await driver.findElement(By.id("registrationForm")).click()
//   await driver.findElement(By.name("firstName")).sendKeys("test");
//   await driver.findElement(By.id("lastName")).sendKeys("test");
//   await driver.findElement(By.id("address")).sendKeys("test");
//   await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
//   await driver.findElement(By.id("password")).sendKeys("test1234");
//   await driver.findElement(By.id("verifyPassword")).sendKeys("test1234");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("registerBtn")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
//   // await driver.quit();
// });
Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
  await driver.findElement(By.id("registrationForm")).click()
  await driver.findElement(By.name("userName")).sendKeys("sagarmsra");
  await driver.findElement(By.name("password")).sendKeys("123456");
  await driver.sleep(delay);
  await driver.findElement(By.name("login")).click();

  await driver.wait(until.elementLocated(By.id("registerForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("registerForm"))));
  // await driver.quit();
});



