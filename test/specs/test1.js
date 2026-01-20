describe('GitHub website',()=>
{

    it('login page falied',async()=>
    {
        await browser.url("https://github.com/login");
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitle(expect.stringContaining("GitHub"));
        await $('#login_field').setValue("shriyas836@gmail.com")
        await browser.pause(2000);
        //await $('#hero_user_email').setValue("abc123");
        //await browser.pause(3000);

        await $('#password').setValue('12345678');
        await browser.pause(2000);
        //sign in :-
        await $('input[name="commit"]').click();
       console.log( await $('div[role="alert"]').getText())
       

       await browser.waitUntil(async()=>await $('input[name="commit"]').getAttribute('value')==='Sign in',
       {
        timeout: 5000,
    timeoutMsg: 'expected text to be different  '
       }
    
     );
     await console.log(await $('div[role="alert"]').getText())

     await expect ($(".mt-1.mb-0.p-0")).toHaveText(expect.stringContaining("New to GitHub?"))
    })


    xit('login page success',async()=>
    {
        await browser.url("https://github.com/login")
        await $('#login_field').setValue("shriyas836@gmail.com")//login
        await browser.pause(1000);
        await $('#password').setValue('heykrishna0808')//pswd
        await browser.pause(1000)
        await $('input[name="commit"]').click()//sign button 
        //await browser.pause(2000);

        await $('a.Button--primary').waitForExist({timeout:3000});
        await expect(browser).toHaveTitle("GitHub");
        await expect(browser).toHaveUrl("https://github.com/")

        await $('a[href="/new"]').click()
        await browser.pause(2000);
    })



})