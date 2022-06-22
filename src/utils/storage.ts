const storage = {
    get(key:string):Object | null  {
        const value = localStorage.getItem(key);
        if (!value) {
            return null;
        }
        return JSON.parse(value);
    },

    set(key:string, value:boolean) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key:string) {
        localStorage.removeItem(key);
    },

    clear(){
        localStorage.clear();
    }
};

export default storage;