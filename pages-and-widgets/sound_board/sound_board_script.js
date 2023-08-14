const sounds = ['JR Babble', 'JR SH-1-1', 'JR SH-2-1', 'JR SH-3']
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopCurrentSound()
        document.getElementById(sound).play()
    })
    
    document.getElementById('buttons').appendChild(btn)
})

function stopCurrentSound() {
    sounds.forEach(sound => {
        const currentSound = document.getElementById(sound)
        currentSound.pause()
        currentSound.currentTime = 0
    })
}