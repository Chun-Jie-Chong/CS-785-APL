class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }

    containsKey(key) {
        return key in this.map;
    }

    size() {
        return Object.keys(this.map).length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.map = {};
    }

    keys() {
        return Object.keys(this.map);
    }

    values() {
        return Object.values(this.map);
    }

    entries() {
        return Object.entries(this.map);
    }
}

// Example usage:
const map = new HashMap();
map.put("key1", "value1");
map.put("key2", "value2");
console.log(map.get("key1")); // Output: "value1"
console.log(map.containsKey("key2")); // Output: true
console.log(map.size()); // Output: 2
console.log(map.keys()); // Output: ["key1", "key2"]
console.log(map.values()); // Output: ["value1", "value2"]
console.log(map.entries()); // Output: [["key1", "value1"], ["key2", "value2"]]