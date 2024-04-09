class HashMap<K, V> {
    private map: { [key: string]: V };

    constructor() {
        this.map = {};
    }

    public put(key: K, value: V): void {
        const stringKey = this.stringifyKey(key);
        this.map[stringKey] = value;
    }

    public get(key: K): V | undefined {
        const stringKey = this.stringifyKey(key);
        return this.map[stringKey];
    }

    public remove(key: K): void {
        const stringKey = this.stringifyKey(key);
        delete this.map[stringKey];
    }

    public contains(key: K): boolean {
        const stringKey = this.stringifyKey(key);
        return stringKey in this.map;
    }

    public size(): number {
        return Object.keys(this.map).length;
    }

    public clear(): void {
        this.map = {};
    }

    private stringifyKey(key: K): string {
        return JSON.stringify(key);
    }
}