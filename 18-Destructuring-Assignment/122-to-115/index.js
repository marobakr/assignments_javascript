// الترتيب مش مطلوب في الoject لاكن مطلوب في ال array
// becouse the arrya is {مرتبه} with the lenght but the opject you called the items as name means.. {بسامها}
// Assignment 01
// let myNumbers = [1, 2, 3, 4, 5]
// const [a, , , , e] = myNumbers
// console.log(a * e) // 5

// Assignment 02
// let mySkills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   ['PHP', 'Python', ['Django', 'Laravel']],
// ]
// const [a, b, c, [d, e, [f, g]]] = mySkills

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`)

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// Assignment 03
// frist method
// let arr1 = ['Ahmed', 'Sameh', 'Sayed']
// let arr2 = ['Mohamed', 'Gamal', 'Amir']
// let arr3 = ['Haytham', 'Shady', 'Mahmoud']
// const [c, ...last] = arr1
// const [b] = arr2
// const [, a] = arr3
// console.log(`My Best Friends: ${a}, ${b}, ${c}`)
// My Best Friends: Shady, Mahmoud, Ahmed

// // second method requierd
// let arr1 = ['Ahmed', 'Sameh', 'Sayed']
// let arr2 = ['Mohamed', 'Gamal', 'Amir']
// let arr3 = ['Haytham', 'Shady', 'Mahmoud']
// const [, a] = arr3,
//   [b] = arr2,
//   [c] = arr1
// // const [b] = arr2
// // const [, a] = arr3
// // console.log()
// console.log(`My Best Friends: ${a}, ${b}, ${c}`)
// // My Best Friends: Shady, Mahmoud, Ahmed

// Assignment 04
// const member = {
//   age: 30,
//   working: false,
//   country: 'Egypt',
//   hobbies: ['Reading', 'Swimming', 'Programming'],
// }

// const { age: a, w } = member
// console.log(`My Age Is ${a} And Iam ${w ? '' : 'Not'} Working`)
// // My Age Is 30 And Iam Not Working

// const { country: c } = member
// console.log(`I Live in ${c}`)
// // // I Live in Egypt

// const {
//   hobbies: [h1, , h3],
// } = member

// console.log(`My Hobbies: ${h1} And ${h3}`)
// My Hobbies: Reading And Programming

// Assignment 05
// const game = {
//   title: 'YS',
//   developer: 'Falcom',
//   releases: {
//     'Oath In Felghana': ['USA', 'Japan'],
//     'Ark Of Napishtim': {
//       US: '20 USD',
//       JAP: '10 USD',
//     },
//     Origin: '30 USD',
//   },
// }

// const { title: t, developer: d } = game
// console.log(`My Favourite Games Style Is ${t} Style`)
// // My Favourite Games Style Is YS Style
// console.log(`And I Love ${d} Games`)
// // And I Love Falcom Games

// const [o] = Object.getOwnPropertyNames(game.releases)
// const [u, j] = game.releases['Oath In Felghana']
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`)
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// const [, a_another] = Object.getOwnPropertyNames(game.releases)
// console.log(`Although I Love ${a_another}`)
// // Although I Love Ark Of Napishtim

// const [, a__another] = Object.getOwnPropertyNames(game.releases)
// const { US: u_price } = game.releases['Ark Of Napishtim']
// console.log(`${a__another} Price in USA Is ${u_price}`)
// // // Ark Of Napishtim Price in USA Is 20 USD

// const [, a___another] = Object.getOwnPropertyNames(game.releases)
// const { JAP: j_price } = game.releases['Ark Of Napishtim']
// // OR ..
// /*
// const {
//   ['Ark Of Napishtim']: { JAP: j_price },
// } = game.releases
// */
// console.log(`${a___another} Price in USA Is ${j_price}`)
// // Ark Of Napishtim Price in USA Is 10 USD

// const { Origin: or } = game.releases
// // i put tow cearly preacess becuse the releases = opject and Origin = also opject

// // another way

// // const {
// //   releases: { Origin: or },
// // } = game
// console.log(`Origin Price Is ${or}`)
// // Origin Price Is 30 USD

// Assignment 06
//  frist method
let chosen = 3
let myFriends = [
  { title: 'Osama', age: 39, available: true, skills: ['HTML', 'CSS'] },
  { title: 'Ahmed', age: 25, available: false, skills: ['Python', 'Django'] },
  { title: 'Sayed', age: 33, available: true, skills: ['PHP', 'Laravel'] },
]

myFriends.forEach((item, index) => {
  if (index == chosen - 1) {
    const {
      title: a,
      age: b,
      available: c,
      skills: [, d],
    } = item
    console.log(a, b, c === true ? 'availble' : 'Not Available', d)
  }
})
// secod mehod use a function
myFriends.forEach((item, index) => {
  switch (true) {
    case index == chosen - 1:
      checkForCounter(item)
  }
})
function checkForCounter(item) {
  {
    const {
      title: a,
      age: b,
      available: c,
      skills: [, d],
    } = item
    console.log(a, b, c === true ? 'availble' : 'Not Available', d)
  }
}
// If chosen === 1
;('Osama')
39
;('Available')
;('CSS')

// If chosen === 2
;('Ahmed')
25
;('Not Available')
;('Django')

// If chosen === 3
;('Sayed')
33
;('Available')
;('Laravel')
