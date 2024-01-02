const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {

    if(e.key === 'Enter') {
        console.log(textarea.value.length)
        if(textarea.value.length > 1) {
            createTags(e.target.value)
            setTimeout(() => {
                e.target.value = ''
            }, 10)
            randomSelect()
        }
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
    console.log(tags)
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unhightlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
    console.log(123)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhightlightTag(tag) {
    tag.classList.remove('highlight')
}