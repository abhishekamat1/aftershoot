const {test,expect} = require('@playwright/test');
// require is node JS function used to load modules | we are loading test and expect module from playwright package
const url = "https://aftershoot.com";
// Now, creating a Test block
test('Title test', async ({page}) =>
{
   await page.goto(url)
   await expect(page).toHaveTitle('#1 AI Culling and Editing Software for Professional Photographers')
    
})