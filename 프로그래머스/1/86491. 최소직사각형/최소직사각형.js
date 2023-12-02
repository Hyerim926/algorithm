function solution(sizes) {
    var answer = 0;
    const newSizes = sizes.map(([h, w]) => w < h ? [h, w] : [w, h]);
    
    const maxSize = [0, 0]
    newSizes.forEach(([h, w]) => {
        if (h > maxSize[1]) maxSize[1] = h;
        if (w > maxSize[0]) maxSize[0] = w;
    })
    
    answer = maxSize[0] * maxSize[1];
    return answer;
}