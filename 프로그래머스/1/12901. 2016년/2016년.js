function solution(a, b) {
    const dayObj = {
        0: 'SUN',
        1: 'MON',
        2: 'TUE',
        3: 'WED',
        4: 'THU',
        5: 'FRI',
        6: 'SAT'
    }
    var answer = dayObj[new Date(2016, a - 1, b).getDay()];
    return answer;
}