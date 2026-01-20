const expectchai=require('chai').expect
describe("web tables website",()=>
{
    xit("sorting web tables using sort  ",async()=>
    {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("//tr/th[1]").click()
        const veggiesLocators=await $$("//tr/td[1]")
        console.log(veggiesLocators.getElements())
        const veggiesNames=await veggiesLocators.map( veggies=>veggies.getText())
        console.log(veggiesNames)
        const pfsort=await veggiesNames.sort()
        await browser.pause(3000)
        console.log(pfsort)
        expectchai(veggiesNames).to.equal(pfsort);
        await browser.pause(3000)



    })

    it("web tables using fliter",async()=>
        {
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        await $("input[type='search']").setValue("Tomato")
        const veggiesLocators=await $$("//tr/td[1]")
        console.log(veggiesLocators[0].getText())
        expect(veggiesLocators).toHaveText("Tomato")

    })
})