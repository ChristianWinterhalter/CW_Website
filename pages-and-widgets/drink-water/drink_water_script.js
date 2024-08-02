const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()
smallCups.forEach((cups, idx) => {
    cups.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    console.log(idx)
    console.log(smallCups.length)
    // Lets up toggle just the last cup
    if(smallCups[idx].classList.contains('full')) {
        if (idx == (smallCups.length - 1)) {
            idx--
        } else if (!smallCups[idx].nextElementSibling.classList.contains('full')) {
            idx--
        }
    }
    // Fills all the cups up to the one clicked on
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    console.log("Cups filled are: " + fullCups)

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${Math.round(fullCups / totalCups * 100)}%` 
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${3 - 250 * fullCups / 1000}L`
    }
}