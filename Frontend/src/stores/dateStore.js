
import { makeAutoObservable } from "mobx";
import { makePersistable } from 'mobx-persist-store'


// Model Application State
class DateStore {

    startDate;
    endDate;


    constructor(startDate, endDate, number) {

        this.startDate = new Date("2019-01-01");
        this.endDate = new Date("2021-12-31");
        makeAutoObservable(this);
        makePersistable(this, { name: DateStore, properties: [startDate, endDate], storage: window.localStorage})

    }

    // Setter Functions
    setStartDate (date) {
        this.startDate = date; 
    }

    setEndDate (date) {
        this.endDate = date; 
    }

    // Getter Functions
    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.EndDate;
    }

}

export default DateStore;