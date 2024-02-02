function solution(n, m, section) {
    var answer = 0;
    
    let wall = new Array(n).fill(true);

    section.forEach((one, i) => {
        wall[one - 1] = false;
    });

    section.forEach((one, i) => {
        if(wall[one - 1] == false) {
            for(let i = 0; i < m; i++) {
                wall[one - 1 + i] = true;
            }

            answer += 1;
        }
    })

    return answer;
}