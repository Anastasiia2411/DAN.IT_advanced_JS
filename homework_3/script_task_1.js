"use strict"
const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

let [ ...arr  ] = [ ...clients1, ...clients2]
let now = new Set(arr)
let companiesArr = []
for (let i of now){
    companiesArr.push(i)
}
console.log(companiesArr)