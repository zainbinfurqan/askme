
export const LocalStorage = {
    addData:  async (key: string, data:any) => {
        try {
            const storeData =  window.localStorage.setItem(key,JSON.stringify(data));
            return storeData;
        } catch (error) {
            console.log(error)
        }
    },
    removeData: async (key:string) => {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.log(error)
        }
    },
    clearAll: async () => {
        try {
            window.localStorage.clear();
        } catch (error) {
            console.log(error)
        }
    }
}