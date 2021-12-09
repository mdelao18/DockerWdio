import Key_presses from '../pageobjects/key_presses.page';

describe('Dropdows App', () => {
    beforeAll(async function() {
        await Key_presses.open();
      });

    it('Should be able to view the last typed key', async ()  =>{
        await Key_presses.key_press('L');
        await expect(Key_presses.result).toHaveTextContaining('You entered: L');
    });
});