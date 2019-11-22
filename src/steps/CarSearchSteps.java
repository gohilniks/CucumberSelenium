package steps;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CarSearchSteps {
	public static WebDriver driver;
	public static WebDriverWait wait;

	@Before
	public void setUp() {
		// System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") +
		// "\\geckodriver.exe");
		// driver = new FirefoxDriver();

		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		wait = new WebDriverWait(driver, 30);
	}

	@After
	public void tearDown(Scenario scenario) {
		if (scenario.isFailed()) {
			byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshotBytes, "image/png");
		}
		if (driver != null) {
			driver.quit();
		}
	}

	@Given("I am on the home page http:\\/\\/www.carsguide.com.au of carsguide website")
	public void i_am_on_the_home_page_http_www_carsguide_com_au_of_carsguide_website() {
		driver.get("http://www.carsguide.com.au");
	}

	@When("I move to buy + sell menu")
	public void i_move_to_buy_sell_menu() {
		WebElement buySellMenu = driver.findElement(By.cssSelector("ul.uhf-menu > li:nth-child(1)"));
		Actions action = new Actions(driver);
		action.moveToElement(buySellMenu).perform();

	}

	@Then("I click on Search Cars")
	public void i_click_on_Search_Cars() {
		WebElement searchCars = driver.findElement(By.xpath("//a[text()='Search Cars']"));
		// Actions action = new Actions(driver);
		// action.moveToElement(searchCars).perform();
		wait.until(ExpectedConditions.visibilityOf(searchCars));
		searchCars.click();
	}

	@Then("I select Make as {string}")
	public void i_select_Make_as(String make) {
		new Select(driver.findElement(By.id("makes"))).selectByVisibleText(make);
	}

	@Then("I select Model as {string}")
	public void i_select_Model_as(String modal) {
		new Select(driver.findElement(By.id("models"))).selectByVisibleText(modal);
	}

	@Then("I select Location as {string}")
	public void i_select_Location_as(String location) {
		new Select(driver.findElement(By.id("locations"))).selectByVisibleText(location);
	}

	@Then("I select Price as {string}")
	public void i_select_Price_as(String price) {
		new Select(driver.findElement(By.id("priceTo"))).selectByVisibleText(price);
	}

	@Then("I click on Find My Next Car button")
	public void i_click_on_Find_My_Next_Car_button() {
		driver.findElement(By.id("search-submit")).click();
	}

	@Then("I should see list of searched cars from {string}")
	public void i_should_see_list_of_searched_cars(String cars) {
		Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"pos0\"]/div[2]/div[2]/div[1]/div[1]/h5")).getText()
				.contains(cars));
	}

	@Then("the page title should be {string}")
	public void the_page_title_should_be(String expected) {
		Assert.assertEquals(expected, driver.getTitle());
	}
}
