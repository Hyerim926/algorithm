function solution(wallpaper) {
    var answer = [];
    const icons = [];
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#') icons.push([i, j]);
        }
    }

    const minX = Math.min(...icons.map(one => one[0]));
    const minY = Math.min(...icons.map(one => one[1]));
    const maxX = Math.max(...icons.map(one => one[0]));
    const maxY = Math.max(...icons.map(one => one[1]));
    
    answer = [minX, minY, maxX + 1, maxY + 1];
    return answer;
}