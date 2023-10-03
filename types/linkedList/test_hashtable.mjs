import { HashTable } from "./HashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, '이운재'); // 인덱스 1
hashTable.set(4, '최진철'); // 인덱스 4
hashTable.set(20, '홍명보'); // 인덱스 0
hashTable.set(6, '유상철'); // 인덱스 6
hashTable.set(22, '송종국'); // 인덱스 2
hashTable.set(21, '박지성'); // 인덱스 1
hashTable.set(5, '김남일'); // 인덱스 5
hashTable.set(10, '이영표'); // 인덱스 0
hashTable.set(8, '최태욱'); // 인덱스 8
hashTable.set(9, '설기현'); // 인덱스 9
hashTable.set(14, '이천수'); // 인덱스 4

console.log(`1: ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
console.log(`21: ${hashTable.get(21)}`);

