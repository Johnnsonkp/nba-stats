const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const eastTeams = document.querySelector('.teams')
const darken = document.querySelector('.mouse-leave')

// Left side
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

left.addEventListener('mouseenter', () => eastTeams.classList.add('remove-padding'))
left.addEventListener('mouseleave', () => eastTeams.classList.remove('remove-padding'))

left.addEventListener('mouseenter', () => right.classList.add('mouse-leave'))
left.addEventListener('mouseleave', () => right.classList.remove('mouse-leave'))


// Right side
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

right.addEventListener('mouseenter', () => eastTeams.classList.add('east-teams'))
right.addEventListener('mouseleave', () => eastTeams.classList.remove('east-teams'))

right.addEventListener('mouseenter', () => left.classList.add('mouse-leave'))
right.addEventListener('mouseleave', () => left.classList.remove('mouse-leave'))
