import Page from './page';

class DropdownPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h3');
    }

    get getDropdownProp(){
        return $('#dropdown');
    }

    open(){
        return super.open('dropdown');
    }

    setValuebyIndex(index){
        return this.getDropdownProp.selectByIndex(index);
    }

    getSelectedOption(){
        return $('#dropdown option[selected="selected"]');
    }
}

export default new DropdownPage();