import { expect } from 'chai'

// describe('github website',()=>
// {

//     it('creating new repository',async()=>
//     {
    
//         await browser.url("https://github.com/login")
//         await $('#login_field').setValue("shriyas836@gmail.com")//login
//         await browser.pause(1000);
//         await $('#password').setValue('heykrishna0808')//pswd
//         await browser.pause(1000)
//         await $('input[name="commit"]').click()//sign button 
//         //await browser.pause(2000);

//         await $('a.Button--primary').waitForExist({timeout:2000});
//         await expect(browser).toHaveTitle("GitHub");
//         await expect(browser).toHaveUrl("https://github.com/")
//         // //what if multiple lements like clss has:-
//         // const radioB=await $$('.customer-radio')
//         // const dropdown=radioB[1];
//         // await dropdown.$('span').click();
//         await $('a[href="/new"]').click()
//         await browser.pause(2000);
//         await $('#visibility-anchor-button').click({timeout:2000});
//         await $('span=Public').click();
//         await browser.pause(2000)


    

   
   
//     })
// })
describe('rahul shetty website',()=>
{
    it("rahul buttons",async()=>
    {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise")
        await $("#username").setValue("rahulshettyacademy")
        await browser.pause(2000)
        await $("#password").setValue("learning")
        await browser.pause(2000)
        const radioBu=await $$("input[type='radio']")
         await radioBu[1].click()


        // await browser.waitUntil(async()=> await browser.isAlertOpen(),
        //     {
        //         timeout:6000,
        //         timeoutMsg:"incorrect"

        //     }
        // )
        await $(".modal-content").waitForDisplayed()

        await $("#cancelBtn").click()
        await browser.pause(2000)

        await radioBu[1].click()
        await $(".modal-content").waitForDisplayed()


         await $("#okayBtn").click()
         await browser.pause(2000)





    

       



    })
})
