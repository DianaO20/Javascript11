const obj ={
    flower:'rose'
}

Object.defineProperty(obj, 'color', {

    value: 'white',
    writable: true,
    enumerable:true,
    configurable: true,


} )
console.log(obj)

const obj1 ={
    flower:'rose'
}

Object.defineProperty(obj1, 'color', {

    value: 'white',
    writable: false,
    enumerable:true,
    configurable: true,
   
} )
obj.color = 'red'
console.log(obj1)


const obj2 ={
    flower:'rose'
}

Object.defineProperty(obj2, 'color', {

    value: 'white',
    writable: true,
    enumerable:true,
    configurable: true,
   
} )
obj2.color = 'red'
console.log(obj2)


const obj3 ={
    flower:'rose'
}

Object.defineProperty(obj3, 'color', {

    value: 'white',
    writable: true,
    enumerable:false,
    configurable: true,
   
} )
obj2.color = 'red'
console.log(Object.keys(obj3))


const obj4 ={
    flower:'rose'
}

Object.defineProperty(obj4, 'color', {

    value: 'white',
    writable: true,
    enumerable:true,
    configurable: false,
   
} )
Object.preventExtensions(obj4)
obj4.smell = 'sweet'

console.log(obj4)

const obj5 ={
    flower:'rose'
}

Object.defineProperty(obj5, 'color', {

    value: 'white',
    writable: true,
    enumerable:true,
    configurable: false,
   
} )
Object.preventExtensions(obj5)
obj5.smell = 'sweet'

console.log(Object.isExtensible(obj5))

const obj6 ={
    flower:'rose'
}

Object.defineProperty(obj6, 'color', {

    value: 'white',
    writable: true,
    enumerable:true,
    configurable: false,
   
} )
Object.seal(obj6)
obj6.smell = 'sweet'
obj6.flower ='Dalii'

console.log(obj6)

const obj7 ={
    flower:'rose'
}

Object.defineProperty(obj7, 'color', {

    value: 'white',
    writable: false,
    enumerable:true,
    configurable: false,
   
} )
Object.freeze(obj7)

obj6.flower ='Dalii'

console.log(obj7)



const arr =[4, 78, 96, 1, 64, 5674, 3, 234]
console.log(arr.sort((a,b)=>a - b))

const arr1 =[4, 78, 96, 1, 64, 5674, 3, 234]
console.log(arr1.sort((a,b)=>b - a))

const arr3 =[
    {
    name:'Paula'
},
{
    name:'Diana'
},
{
    name:'Mark'
},
{
    name:'Cristina'
},
{
    name:'Daniela'
},
{
    name:'Alina'
}
]
console.log(arr3.sort((a,b)=>{
    if (b.name>a.name){
        return 1
    } else if (b.name<a.name){
        return -1
    }
    return 0

}))


const arr4 =[
    {
    name: 'Calatina',
    age: 23
},
{
    name: 'Maria',
    age: 34
},
{
    name: 'Patricia',
    age: 18
}
]
console.log(arr4.sort((a,b)=>a.age - b.age))
console.log(arr4.sort((a,b)=>{
    if (b.age>a.age){
        return 1
    } else if (b.age<a.age){
        return -1
    }
    return 0

}))
console.log(arr4.sort((a,b)=>{
    if (b.name>a.name){
        return 1
    } else if (b.name<a.name){
        return -1
    }
    return 0

}))

const obj8 ={
    a: 'a',
    b: 'b',
    c: {
        d:{
            e: 'e'
        }
    }
}
const obj9= obj8

obj9.c.d.e= 'g'
console.log(obj8, JSON.stringify(obj8))

const obj10 ={
    a: 'a',
    b: 'b',
    c: {
        d:{
            e: 'e'
        }
    }
}
const obj11= JSON.parse(JSON.stringify(obj10))

obj11.c.d.e= 'g'
console.log(obj10)

const obj12 ={
    a: 'a',
    b: 'b',
    c: {
        d:{
            greet:() => console.log('hello'),
            e: 'e'
        }
    }
}
const deepClone = (obj12) =>{
    let clone = {...obj12}
    Object.keys(clone).forEach((key)=>{
        clone[key] = typeof clone[key] === 'object'? deepClone(obj12[key] ): obj12[key]
    })
    return clone;
}
const obj13 =deepClone(obj12)
obj13.c.d.e ='m'
console.log(obj13)
obj13.c.d.greet()


const arr5 =[1,5,8,9]

for(let item of arr5){
    console.log(item)
}