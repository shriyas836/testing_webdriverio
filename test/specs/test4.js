
const expectchai=require('chai').expect

describe("functional controls ",()=>
{
    it("prgram",async()=>
    {
        await browser.maximizeWindow();
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#mousehover").scrollIntoView()
       await  browser.pause(1000)
        await $("#mousehover").moveTo();
        await $("a[href='#top']").click();
        await browser.pause(1000);

        await browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        const button =await $("//button[@onclick='jsAlert()']")//.doubleClick()
        // await button.scrollIntoView();  // make sure button is visible
        // await button.moveTo(); 
        await button.waitForClickable({timeout:3000})
        await button.click()  
        
        
        await browser.waitUntil( async()=>
           await browser.isAlertOpen(),{
            timeout:8000,
            timeoutMsg:"alert didnt opened"

        })
        await expectchai(await browser.isAlertOpen()).to.be.true
        await expectchai(await browser.getAlertText()).to.equal("I am a JS Alert")
        await browser.acceptAlert()
        await browser.pause(2000)

    })

})


