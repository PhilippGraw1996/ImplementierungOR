
import DateStore from "./dateStore";


const myDateStore = new DateStore();

/**
 * Collection of all stores in order to make them globally available within
 * the application.
 */
export const useStore = () => {
    return {
        myDateStore: myDateStore
    }
}