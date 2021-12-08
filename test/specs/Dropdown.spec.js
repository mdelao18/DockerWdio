
import DropdownPage from '../pageobjects/dropdown.page';
import AuthPage from '../pageobjects/auth.page';
const testData = require ('../testData/data.json');

describe('My Dropdown App', () => {
    beforeAll(async function(){
        await DropdownPage.open();
    });
    it('Should be able to open the dropdowns page', async () => {
        await expect (AuthPage.title).toBeExisting();
        await expect (AuthPage.title).toHaveTextContaining('Dropdown List');
    });
    it('Should be able to select the first dropdown option', async () => {
        await DropdownPage.setValuebyIndex(1);
        await expect(DropdownPage.getSelectedOption()).toHaveTextContaining('Option 1');
    });
    it('Should be able to select the second dropdown option', async () => {
        await DropdownPage.setValuebyIndex(2);
        await expect(DropdownPage.getSelectedOption()).toHaveTextContaining('Option 2');
    });
    it('Should iterate json', async () => {
        testData.forEach(function(element){
            console.log("Dropdown Text " + element['text']);
            console.log(parseInt(element['index']));

        });
    });
});