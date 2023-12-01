const getFailure = (challengers, i, stages) => {
    const fails = stages.filter((stage) => stage === i).length;
    return {failure: fails / challengers, fails};
}

function solution(N, stages) {
    var answer = [];
    
    const failureObj = {};
    let challengers = stages.length;
    for(let i = 1; i <= N; i++) {
        let resultObj = getFailure(challengers, i, stages)
        failureObj[i] = resultObj.failure;
        challengers -= resultObj.fails;
    }
    
    var sortable = [];
    for (var stage in failureObj) {
        sortable.push([stage, failureObj[stage]]);
    }

    sortable.sort((a, b) => b[1] - a[1])
        .forEach((result) => answer.push(+result[0]));
    
    return answer;
}