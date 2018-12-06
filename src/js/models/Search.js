import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '3b28246f3673e969900f55ee1193115c';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
    
        } catch(error) {
            alert(error);
        }
    }
}
