// // /**
// //  * Created by donmclean on 3/20/16.
// //  */
// // // var webdriver = require('selenium-webdriver');
// // //
// // // // Input capabilities
// // // var capabilities = {
// // //     'browserName' : 'firefox',
// // //     'browserstack.user' : 'santodhar',
// // //     'browserstack.key' : 'pRzhpSVd2Zzm8PaaDNUh'
// // // }
// // //
// // // var driver = new webdriver.Builder().
// // // usingServer('http://hub.browserstack.com/wd/hub').
// // // withCapabilities(capabilities).
// // // build();
// // //
// // // driver.get('http://www.google.com');
// // // driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
// // // driver.findElement(webdriver.By.name('btnG')).click();
// // //
// // // driver.getTitle().then(function(title) {
// // //     console.log(title);
// // // });
// // //
// // // driver.quit();
// //
// // var webdriver = require('selenium-webdriver');
// // var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'phantomjs'}).build();
// //
// // function logTitle() {
// //     browser.getTitle().then(function(title) {
// //         console.log('Current Page Title: ' + title);
// //     });
// // }
// //
// // function clickLink(link) {
// //     link.click();
// // }
// //
// // function handleFailure(err) {
// //     console.error('Something went wrong\n', err.stack, '\n');
// //     closeBrowser();
// // }
// //
// // function findTutsPlusLink() {
// //     return browser.findElements(webdriver.By.css('[href="http://code.tutsplus.com/"]')).then(function(result) {
// //         return result[0];
// //     });
// // }
// //
// // function closeBrowser() {
// //     browser.quit();
// // }
// //
// // browser.get('https://www.google.com');
// // browser.findElement(webdriver.By.name('q')).sendKeys('tuts+ code');
// // browser.findElement(webdriver.By.name('btnG')).click();
// // browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
//
//
// var webdriver = require('selenium-webdriver');
//
// // Input capabilities
// // var capabilities = {
// //     'browserName' : 'firefox',
// //     'browserstack.user' : 'santodhar',
// //     'browserstack.key' : 'pRzhpSVd2Zzm8PaaDNUh'
// // };
//
// var capabilities = {
//     'browserName' : 'IE',
//     'browserstack.user' : 'santodhar',
//     'browserstack.key' : 'pRzhpSVd2Zzm8PaaDNUh'
// };
//
// var driver = new webdriver.Builder().
// usingServer('http://hub.browserstack.com/wd/hub').
// withCapabilities(capabilities).
// build();
//
// driver.get('http://www.google.com');
// driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
// driver.findElement(webdriver.By.name('btnG')).click();
//
// driver.getTitle().then(function(title) {
//     console.log(title);
// });
//
// driver.quit();