let player = 'X'

let area = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-',
]

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
            console.log(`Игрок ${player} победил!`)
            console.log(`${area[0]} ${area[1]} ${area[2]}\n${area[3]} ${area[4]} ${area[5]}\n${area[6]} ${area[7]} ${area[8]}`)
            restart()
        } else if (area.includes('-') == false) {
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