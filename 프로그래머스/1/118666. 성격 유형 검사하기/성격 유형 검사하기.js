const makeResult = (obj, type1, type2) => {
    let result;
    if(obj[type1] > obj[type2]) {
        result = type1;
    }
    if(obj[type1] === obj[type2]) {
        result = type1;
    }
    if(obj[type1] < obj[type2]) {
        result = type2;
    }
    
    return result;
}

function solution(survey, choices) {
    var answer = '';
    const score = {
        1: 3,
        2: 2,
        3: 1,
        5: 1,
        6: 2,
        7: 3
    };

    const first = {
        R: 0,
        T: 0
    };
    
    const second = {
        C: 0,
        F: 0
    };
    
    const third = {
        J: 0,
        M: 0
    };
    
    const fourth = {
        A: 0,
        N: 0
    };

    const type = {
        RT: first,
        TR: first,
        CF: second,
        FC: second,
        JM: third,
        MJ: third,
        NA: fourth,
        AN: fourth,
    };
    
    for(let i = 0; i < survey.length; i++) {
        if(choices[i] < 4) {
            type[survey[i]][survey[i][0]] += score[choices[i]];
        } else if(choices[i] > 4) {
            type[survey[i]][survey[i][1]] += score[choices[i]];
        }
    }
    
    answer += makeResult(first, 'R', 'T');
    answer += makeResult(second, 'C', 'F');
    answer += makeResult(third, 'J', 'M');
    answer += makeResult(fourth, 'A', 'N');
    
    return answer;
}