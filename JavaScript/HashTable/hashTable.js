class HashTable {
    constructor() {
        this.table = {};
    }

    // Hash function to generate an index for the key
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // Modulo to limit the index within the table size
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = {};
        }
        this.table[index][key] = value;
    }

    // Get the value associated with a key from the hash table
    get(key) {
        const index = this.hash(key);
        if (this.table[index] && this.table[index][key]) {
            return this.table[index][key];
        }
        return undefined;
    }

    // Remove a key-value pair from the hash table
    remove(key) {
        const index = this.hash(key);
        if (this.table[index] && this.table[index][key]) {
            delete this.table[index][key];
        }
    }
}