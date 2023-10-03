import { HashSet } from "./HashSet.mjs";

let hasSet = new HashSet();
console.log(`isEmpty: ${hasSet.isEmpty()}`);

console.log('==== 데이터 삽입 ====');
hasSet.add(1);
hasSet.add(1); // 중복된 데이터라 삽입되지 않음
hasSet.add(33);
hasSet.add(999);
hasSet.printAll();
console.log(`isEmpty: ${hasSet.isEmpty()}`);

console.log('==== 데이터 체크1 ====');
console.log(`isContain: ${hasSet.isContain(1)}`);

console.log('==== 데이터1 제거 ====');
hasSet.remove(1);
hasSet.printAll();
console.log(`isEmpty: ${hasSet.isEmpty()}`);

console.log('==== 데이터 체크2 ====');
console.log(`isContain: ${hasSet.isContain(1)}`);

console.log('==== clear ====');
hasSet.clear();
hasSet.printAll();
console.log(`isEmpty: ${hasSet.isEmpty()}`);


