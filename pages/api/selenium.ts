import { NextApiRequest, NextApiResponse } from "next";
import webdriver, { Builder, By, Key } from "selenium-webdriver";

async function selenium(req: NextApiRequest, res: NextApiResponse) {
  const driver = await new Builder()
    .forBrowser("chrome")
    .usingServer("http://localhost:4444/wd/hub")
    .build();

  try {
    await driver.get("https://apply.likelion.org/accounts/login/?next=/apply/");
    await driver.findElement(By.id("id_username")).sendKeys(req.body.email);
    await driver.findElement(By.id("id_password")).sendKeys(req.body.password);
    await driver
      .findElement(
        By.xpath("/html/body/main/div[2]/div/div/div/form/div[3]/button")
      )
      .click();
    await driver
      .findElement(By.xpath('//*[@id="likelion_num"]/div[2]/a/button'))
      .sendKeys(Key.ENTER);
    res.status(204);
  } catch (e) {
    if (e instanceof webdriver.error.NoSuchElementError) {
      res.status(403).json({ message: "Login failed." });
    } else {
      console.error(e);
    }
  } finally {
    await driver.quit();
  }
}

export default selenium;
