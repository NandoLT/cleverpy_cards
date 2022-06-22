const storage = {
    get(key:string):boolean   {
        const value = localStorage.getItem(key);
        if (!value) {
            return false;
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