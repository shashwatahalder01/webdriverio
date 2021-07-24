const Notewriter = require('../../pageObjects/notewriter.page');
const data = require('../../data/data');
const expect = require('chai').expect;
const { threeSeconds } = require('../../data/data');



describe('add to cart', () => {
    // let browser;
    // before(async () => {
    //     browser = await multiremote.multiremote({
    //         myChromeBrowser: {
    //             port: 4448,
    //             capabilities: {
    //                 browserName: 'chrome',
    //                 acceptInsecureCerts: true,
    //                 "goog:chromeOptions": {
    //                     args: [
    //                         //'--headless',
    //                         //'--start-maximized'
    //                         '--window-size=1920,1080'
    //                     ]
    //                 },
    //             }
    //         },
    //     })
     
    // });
    // Execute a block of code before every test
    beforeEach(async () => {
        // await driver.launchApp();
    });
    // Execute a block of code after every test
    afterEach(async () => {
        // await driver.closeApp();
    });
    // Execute a block of code after all test
    after(async() => {
        await browser.deleteSession();
        // await browser.end();
    });


    
    it('verify add to cart', async () => {   



        await browser.pause(threeSeconds)
        await signin.moveTo()
        await browser.pause(threeSeconds)
     
 

        // // Action: Login admin Portal
        // await browser.url(data.liveAdminPortalUrl);
        // await adminEmail.setValue(data.liveAdminEmail);
        // await adminPassword.setValue(data.liveAdminPassword);
        // await browser.pause(data.oneSecond);
        // await loginBtn.click();
        // await browser.pause(data.fifteenSeconds);
        // // Expectation : Admin dashboard will appear
        // let res0 = await deviceMonitiorParent.isDisplayed();
        // expect(res0[0]).equal(true);  

        // // Action: click Device Monitor Main menu
        // await deviceMonitiorParent.click();
        // // Expectation: Device Monitor sub menu will appear
        // await deviceMonitor.waitForDisplayed({timeout: data.thirtySeconds});
        // let res1 = await deviceMonitor.isDisplayed();
        // expect(res1[0]).equal(true);  

        // // Action: click Device Monitor sub menu
        // await deviceMonitor.click();
        // await browser.pause(data.twentySeconds);
        // // Expectation: provider Search field will appear
        // await selectOption.waitForDisplayed({timeout: data.thirtySeconds});
        // let res2 = await selectOption.isDisplayed();
        // expect(res2[0]).equal(true); 

        // // Action: Search with provider lastname, firstname
        // await selectOption.click();
        // await search.waitForDisplayed({timeout: data.thirtySeconds});
        // await search.setValue(`${data.liveCustomerLastName}, ${data.liveCustomerFirstName}`);
        // await selectprovider.waitForDisplayed({timeout: data.thirtySeconds});
        // await selectprovider.click()
        // await browser.keys("Escape"); 
        // await startMonitoring.waitForDisplayed({timeout: data.thirtySeconds});
        // await startMonitoring.click();
        // await browser.pause(data.twentySeconds);
        // // Expectation: Currently used device will appear 
        // let res3 = await provider.isDisplayed();
        // expect(res3[0]).equal(true);    
    });

})