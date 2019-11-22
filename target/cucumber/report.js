$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/features/carSearch.feature");
formatter.feature({
  "name": "validation of car search page",
  "description": "  In order to validate car search\n  as a buyer\n  I navigate http://www.carsguide.com.au",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Searching for a new car",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the home page http://www.carsguide.com.au of carsguide website",
  "keyword": "Given "
});
formatter.match({
  "location": "CarSearchSteps.i_am_on_the_home_page_http_www_carsguide_com_au_of_carsguide_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to buy + sell menu",
  "keyword": "When "
});
formatter.match({
  "location": "CarSearchSteps.i_move_to_buy_sell_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Search Cars",
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Search_Cars()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Make as \"BMW\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_select_Make_as(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#makess\"}\n  (Session info: chrome\u003d78.0.3904.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027NIKUNJ\u0027, ip: \u0027192.168.2.168\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_172\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\NIKUNJ~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59340}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b7614d6244de532b32c08ab835620f3b\n*** Element info: {Using\u003did, value\u003dmakess}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.CarSearchSteps.i_select_Make_as(CarSearchSteps.java:79)\r\n\tat ✽.I select Make as \"BMW\"(src/features/carSearch.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select Model as \"1 Series\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_select_Model_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Location as \"ACT - All\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_select_Location_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Price as \"$10,000\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_select_Price_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Find My Next Car button",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see list of searched cars from \"BMW\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CarSearchSteps.i_should_see_list_of_searched_cars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"Bmw 1 Series Under 10000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "CarSearchSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});