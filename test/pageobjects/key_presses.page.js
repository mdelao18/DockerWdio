import Page from './page';
class Key_presses extends Page{
    get title() {
        return $('h3');
    }
    
    get input(){
        return $('#target')
    }

    get result(){
        return $('#result')
    }

    open() {
        return super.open('key_presses');
    }

    key_press(key){
        return this.input.setValue(key)
    }
}

export default new Key_presses();