function solution(sides) {
    var answer = 0;
    sides.sort((a, b) => a - b);
    
    answer = sides[0] + sides[1] <= sides[2] ? 2 : 1;
    return answer;
}