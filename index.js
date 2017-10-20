function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const rankings = document.querySelectorAll('.ranked-list')

  for (let i = 0, len = rankings.length; i < len; i++) {
  let child = rankings[i].children

  for (let i = 0, len = child.length; i < len; i++) {
    child[i].innerHTML = parseInt(child[i].innerHTML) + n
  }
  }
}
