function solution(id_pw, db) {
    var answer = '';
    
    const id = id_pw[0];
    const pw = id_pw[1];
    
    const user = db.find((one) => one[0] === id);
    
    if(!user) answer = 'fail';
    
    if(user && user[1] !== pw) answer = 'wrong pw';
    
    if(user && user[1] === pw) answer = 'login';

    return answer;
}