const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const eastTeams = document.querySelector('.teams')
const darken = document.querySelector('.mouse-leave')
const eastHeader = document.querySelector('.east-header')
const eastBtn = document.querySelector('.east-btn')
const westHeader = document.querySelector('.west-header')
const westBtn = document.querySelector('.west-btn')
const westTeams = document.querySelector('.west-teams')

// Left side
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

left.addEventListener('mouseenter', () => eastTeams.classList.add('remove-padding'))
left.addEventListener('mouseleave', () => eastTeams.classList.remove('remove-padding'))

left.addEventListener('mouseenter', () => right.classList.add('mouse-leave'))
left.addEventListener('mouseleave', () => right.classList.remove('mouse-leave'))

//Left side mouseover for right side header
left.addEventListener('mouseenter', () => westHeader.classList.add('display-none'))
left.addEventListener('mouseleave', () => westHeader.classList.remove('display-none'))

//Left side mouseover for right side button
left.addEventListener('mouseenter', () => westBtn.classList.add('display-none'))
left.addEventListener('mouseleave', () => westBtn.classList.remove('display-none'))

//Left side mouseover for right side teams
left.addEventListener('mouseenter', () => westTeams.classList.add('display-none'))
left.addEventListener('mouseleave', () => westTeams.classList.remove('display-none'))



// Right side
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

right.addEventListener('mouseenter', () => eastTeams.classList.add('display-none'))
right.addEventListener('mouseleave', () => eastTeams.classList.remove('display-none'))

right.addEventListener('mouseenter', () => left.classList.add('mouse-leave'))
right.addEventListener('mouseleave', () => left.classList.remove('mouse-leave'))

// right side for left side header 
right.addEventListener('mouseenter', () => eastHeader.classList.add('display-none'))
right.addEventListener('mouseleave', () => eastHeader.classList.remove('display-none'))

//right side for left side button
right.addEventListener('mouseenter', () => eastBtn.classList.add('display-none'))
right.addEventListener('mouseleave', () => eastBtn.classList.remove('display-none'))

//right side mouse over for right side teams
right.addEventListener('mouseenter', () => westTeams.classList.add('remove-padding'))
right.addEventListener('mouseleave', () => westTeams.classList.remove('remove-padding'))