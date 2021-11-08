const a = 1
const b = 2
const c = 3
let input1 = {
  start: [0, 0],
  end: [4, 2],
  route: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 3, 1, 0, 0],
  ],
}

getWay(input1)

function getWay(input) {
  // starting point
  var start = { row: 0, col: 0, dist: 0 }

  let been = [start]
  let visited = []
  let found = false

  for (let i = 0; i < input.route.length; i++) {
    visited.push([])
    for (let j = 0; j < input.route[i].length; j++) {
      if (input.route[i][j] == 0) {
        visited[i][j] = true
      } else {
        visited[i][j] = false
      }
    }
  }

  while (been.length > 0 && !found) {
    let current = been[0]
    let x = current.col
    let y = current.row
    let dist = current.dist

    if (input.route[y][x] == 3) {
      console.log('found', dist)
      found = true
    }

    // left
    if (x - 1 > 0) {
      if (visited[y][x - 1] == false) {
        been.push({ row: y, col: x - 1, dist: dist + 1 })
        visited[y][x - 1] = true
      }
    }

    // right
    if (x + 1 < input.route[0].length) {
      if (visited[y][x + 1] == false) {
        been.push({ row: y, col: x + 1, dist: dist + 1 })
        visited[y][x + 1] = true
      }
    }

    // top
    if (y - 1 > 0) {
      if (visited[y - 1][x] == false) {
        been.push({ row: y - 1, col: x, dist: dist + 1 })
        visited[y - 1][x] = true
      }
    }

    // bottom
    if (y + 1 < input.route.length) {
      if (visited[y + 1][x] == false) {
        been.push({ row: y + 1, col: x, dist: dist + 1 })
        visited[y + 1][x] = true
      }
    }

    been.shift()
  }
}
