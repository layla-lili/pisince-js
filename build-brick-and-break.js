const build = (nbricks) => {
    let main = document.getElementsByTagName("body")[0]
    let bricks = 1
    let interval = setInterval(() => {
        let childDiv = document.createElement('div')
        childDiv.id = `brick-${bricks}`
        bricks % 3 === 2 ? (childDiv.dataset.foundation = true) : null
        main.appendChild(childDiv)
        bricks++
        bricks > nbricks && clearInterval(interval)
    }, 100)

}

const repair = (...ids) => {
    //retrive
    ids.forEach((id) => {
        let brick = document.getElementById(id)
        brick.getAttribute("foundation")
            ? (brick.dataset.repaired = "in progress")
            : (brick.dataset.repaired = true)
    })
}

const destroy = () => {
    let bricks = document.getElementsByTagName("div")
    bricks[bricks.length - 1].remove();
}

export { build, repair, destroy }

