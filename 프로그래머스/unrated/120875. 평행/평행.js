function solution(dots) {
  var answer = 0;

    // 기울기(y변화량 / x변화량) 구하는 함수
  function getInclination(a, b, c, d) {
    let ab, cd;

    ab = (b[1] - a[1]) / (b[0] - a[0]);
    cd = (d[1] - c[1]) / (d[0] - c[0]);

    if (ab === cd) {
      answer += 1;
    }
  }

  // 1-2, 3-4
  getInclination(dots[0], dots[1], dots[2], dots[3]);

  // 1-3, 2-4
  getInclination(dots[0], dots[2], dots[1], dots[3]);

  // 1-4, 2-3
  getInclination(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}
