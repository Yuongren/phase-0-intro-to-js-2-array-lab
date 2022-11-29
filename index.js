// Write your solution here!
const cats =["Milo","Otis","Garfield",];
function Arrayfunction(cats){
    function beforeEarth(){
        cats.length=0;
        cats.push('Milo','Otis','Garfield','Ralph');
    }
}
function Arrayfunction(){
    const cats = size ()
    const size = cats.length
    return size
}
print('Number of cats:', getNumberofcats)

function  destructivelyAppendCat(){
    //cats.push('Milo', 'Otis', 'Garfield');
    cats.push('Ralph')
    //cats.unshift('Bob')
    //cats.pop('Garfield')
    return cats
}
print(' destructively AppendCat',  destructivelyAppendCat)

function destructivelyPrependCat(){
    cats.unshift('Bob')
    return cats
}
print(' destructively PrependCat',  destructivelyPrependCat)

function destructivelyRemoveLastCat(){
    cats.pop('Garfield')
    return cats
}
print(' destructively RemoveLastCat',  destructivelyRemoveLastCat)

function destructivelyRemoveFirstCat(){
    cats.shift('Milo')
    return cats
}
print(' destructively RemoveFirstCat',  destructivelyRemoveFirstCat)

function appendCat(name){
    let cats2 = [...cats, name]
       return cats2
}


function prependCat(name){
    let cats2 = [name, ...cats]
       return cats2
}


function  removeLastCat(name){
    let cats2 = cats.slice(0, -1)
       return cats2
}

function removeFirstCat(){
   let cats2 = cats.slice(1)
    return cats2
}
