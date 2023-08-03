// assignment 01
let ip = '2001:db8:3333:4444:5555:6666:7777:8888'
let RGE_0 = /[0-9]{4}:\w+:\d+:\d+:\d+:[0-9]{4}:\d+\d+/gi
let result_0 = ip.match(RGE_0)
console.log(result_0)

// assignment 02
let specialNames = 'Os10O OsO Os100O Osa100O Os1000 Os100m'
let RGE_1 = /\os\d*\w?\o/gi
let reslt_1 = specialNames.match(RGE_1)
console.log(reslt_1)
// ['Os10O', 'OsO', 'Os100O']

// assignment 03
let phone = '+(995)-123 (4567) '
let RGE_2 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/gi
let reslt_2 = phone.match(RGE_2)
console.log(reslt_2)
// if you wanna to use d to get digets? don't forget back slash "/"

// assignment 04 => explanation this code ...
let test = 'https://google.com  https://google.com  '
let RGE_3 = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi
let resukt_1 = test.match(RGE_3)
console.log(resukt_1)

// https? => zero or more this word
// \/\/ ? => // zero or more mark
// : this mark it was found
// [\w] =>  to get words and number
// +  or . => this mark found or not found
// (?:[-\w]+\.)? => this code maybe found or not funde ==> ?: "[-words] one of more".
// ([-\w]+) => to get words and number .. one or more
// \.\w+ => .words
// (?:\.\w+)?  => ?:.words ... zero or noe
// \/? => /? zero or noe
// .* => . zero or more
// assignment 05

let date1 = '25/10/1982'
let date2 = '25 - 10 - 1982'
let date3 = '25 10 1982'
let date4 = '25 10 82'

let RGE_4 = /\d{2}\/?\s?(\d{2}|\-)(\s|\/)\d+\s*\-*\s*\d+/i

console.log(date1.match(RGE_4)) // "25/10/1982"
console.log(date2.match(RGE_4)) // "25 - 10 - 1982"
console.log(date3.match(RGE_4)) // "25 10 1982"
console.log(date4.match(RGE_4)) // "25 10 82"

let url1 = 'elzero.org'
let url2 = 'http://elzero.org'
let url3 = 'https://elzero.org'
let url4 = 'https://www.elzero.org'
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics'

let RGE_5 =
  /(https?:\/\/)?\w+.(elzero|org)(.org)*:?\d*\/?\w*(.\w+)?\W?\w*\=?\d*\W?\w*\W?\w*/gi
console.log(url1.match(RGE_5))
console.log(url2.match(RGE_5))
console.log(url3.match(RGE_5))
console.log(url4.match(RGE_5))
console.log(url5.match(RGE_5))
console.log(true || (false && false))
console.log((true || false) && false)
console.log(false && false)
console.log(false || true)
