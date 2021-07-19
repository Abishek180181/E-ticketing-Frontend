const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep, WebElement } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/login");
//   // await driver.findElement(By.id("registrationForm")).click();
//   await driver.findElement(By.name("firstName")).sendKeys("test");
//   await driver.findElement(By.name("lastName")).sendKeys("test");
//   await driver.findElement(By.name("email")).sendKeys("test@gmail.com");
//   await driver.findElement(By.name("userName")).sendKeys("test");
//   await driver.findElement(By.name("phoneNumber")).sendKeys("9860999888");
//   await driver.findElement(By.name("address")).sendKeys("test");
//   // await driver.findElement(By.id("Male")).click();

//   // await driver.findElement(By.name("dob")).sendKeys("07/11/1999");
//   // await driver.findElement(By.id("Male")).click();
//   // await driver.findElement(By.xpath("//input[@id='Male']")).click();
       
//   await driver.findElement(By.name("password")).sendKeys("test1234");
//   await driver.findElement(By.name("confirmPassword")).sendKeys("test1234");
//   // await driver.findElement(By.id("check")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.name("register")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
//   // await driver.quit();
// });

Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/login");
  await driver.findElement(By.name("userName")).sendKeys("sagarmsra");
  await driver.findElement(By.name("password")).sendKeys("123456");
  await driver.sleep(delay);
  await driver.findElement(By.name("login")).click();
  await driver.wait(until.elementLocated(By.className("divider")), 30000);
  expect(await driver.wait(until.elementLocated(By.className("divider"))));
});

// Given("Test addHospital functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:3000/hospital");
//   await driver.sleep(delay);
//   await driver.findElement(By.name("Add")).click();
// });



