const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("a user can access the newegg website", async () => {
    await browser.url(`https://newegg.com`);
});

When("the promo banner appears", async () => {
    try {
        await $('[class="modal-Website-img"]').toBeDisplayed();
        await $('[class="close"]').click();
    } 
    catch (error) {
        console.log("No Promo Bar");
    }
});

When("the user enters windows", async () => {
    const searchBarSelector = await $('input[type="search"]');
    await searchBarSelector.click();
    await searchBarSelector.setValue('windows');
    const searchButtonSelector = await $('[class="ico ico-search"]');
    await searchButtonSelector.click();
});

Then("one item appears", async () => {
    const cells = await $('[class="item-cell"]');
    await expect(cells).toBeDisplayed();
});

Given("the user clicks on Today's Best Deals button", async () => {
    const todayBestDeals = await $('[id="trendingBanner_720202"]');
    await todayBestDeals.click();
});

When("the user clicks on Internet Shop logo", async () => {
    const internetShopLogo = await $('[class="header2021-logo"]');
    await internetShopLogo.click();
    
});

Then("the user should be redirected to the main page", async () => {
   await expect(browser.url('https://www.neweggbusiness.com/')); 
});