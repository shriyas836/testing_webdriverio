describe('',()=>
{
    xit('',async()=>
    {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        await $('#autocomplete').setValue('ind')
        await browser.pause(2000)
        const item=await $$("[class='ui-menu-item'] div ")
        for(let i=0;i<item.length;i++)
        {
            //console.log(await item[i].getText());
            if(await item[i].getText()==="India")
            {
                await item[i].click({timeout:2000});
            }
        }
    })



    it('checkbox checking',async()=>
    {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const item=await $$('input[type="checkbox"]')
        await item[2].click()
        await browser.pause(2000)
        console.log(await item[1].isSelected())
        console.log(await item[2].isSelected())
        await browser.saveScreenshot('screenshot.jpeg')
        await browser.pause(2000)




    })
})