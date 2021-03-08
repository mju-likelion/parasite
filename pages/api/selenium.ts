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
    const applicants = await driver.findElements(
      By.xpath('//*[@id="likelion_num"]/div[3]/a')
    );

    const dataList = [];

    for (let i = 0; i < applicants.length; i++) {
      const data = {
        link: "",
        name: "",
        year: "",
        major: "",
      };
      data.link = await applicants[i].getAttribute("href");
      data.name = await applicants[i]
        .findElement(By.className("user_name"))
        .getText();
      const profile = await applicants[i]
        .findElement(By.className("user_profile"))
        .getText();
      const [year, major] = profile.split("\n");
      data.year = year;
      data.major = major;
      dataList.push(data);
    }

    res.status(200).json({ message: "Login successed.", data: dataList });
  } catch (e) {
    if (e instanceof webdriver.error.NoSuchElementError) {
      res.status(403).json({ message: "Login failed." });
    } else {
      console.error(e);
    }
  } finally {
    setTimeout(async () => {
      await driver.quit();
    }, 2000);
  }
}

export default selenium;
