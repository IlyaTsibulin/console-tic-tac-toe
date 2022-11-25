let player = 'X'

let area = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-',
]

let playWithBot = true

let results = {
    X: 0,
    O: 0,
    draw: 0
}

let winCombo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

console.log(`Добро пожаловать в консольные крестики нолики! Для хода воспользуйтесь функцией move(pos)
Где pos - это позиция игрового поля.
\n1 2 3\n4 5 6\n7 8 9\n
Первый ход делает игрок X!`)
function move(pos) {
    let data = []
    if (area[pos - 1] == '-') {
        area[pos - 1] = player

        for (let elem in area) {
            if (area[elem] == player) {
                data.push(+elem + 1)
            }
        }
        if (check(data)) {
            results[player]++
            console.log(`Игрок ${player} победил!`)
            console.log(`Счет: X: ${results.X}, O: ${results.O}, draw: ${results.draw}`)
            console.log(`${area[0]} ${area[1]} ${area[2]}\n${area[3]} ${area[4]} ${area[5]}\n${area[6]} ${area[7]} ${area[8]}`)
            restart()
        } else if (area.includes('-') == false) {
            results['draw']++
            console.log('Ничья!')
            console.log(`${area[0]} ${area[1]} ${area[2]}\n${area[3]} ${area[4]} ${area[5]}\n${area[6]} ${area[7]} ${area[8]}`)
            restart()
        }

        if (player == 'X') {
            player = 'O'
        } else {
            player = 'X'
        }

    } else {
        console.log(`Игрок ${player} сделал неверный ход, попоробуй еще раз`)
    }
    console.log(`${area[0]} ${area[1]} ${area[2]}\n${area[3]} ${area[4]} ${area[5]}\n${area[6]} ${area[7]} ${area[8]}`)
    console.log(`Следующий ход делает игрок ${player}`)
    if (player != 'X' && playWithBot == true) {
        bot()
    }
}

function check(data) {
    for (let i in winCombo) {
        let win = true
        for (let j in winCombo[i]) {
            let pos = winCombo[i][j]
            let ind = data.indexOf(pos)
            if (ind == -1) {
                win = false
            }
        }
        if (win) return true
    }
    return false
}

function restart() {
    for (let i in area) {
        area[i] = '-'
    }
}

function bot() {
    let botsData = []
    for (let elem in area) {
        if (area[elem] == '-') {
            botsData.push(+elem + 1)
        }
    }
    let randomIndex = Math.floor(Math.random() * botsData.length)
    move(botsData[randomIndex])
}

function set(num){
    if(num == 1){
        playWithBot = true
        console.log('Выбран режим игры с ботом')
    } else if (num == 2){
        playWithBot = false
        console.log('Выбран режим игры мультиплеер')
    } else {
        console.log('Выбран неверный режим игры. 1 или 2.')
    }
}