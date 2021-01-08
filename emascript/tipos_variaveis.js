const user = {
    name : "Raicley Santana",
    last_name : "silva"
}

Object.assign(user, { age : '22'});
//console.log(user);

const newObj = {
   foo : 'bar'
};

//Object.freeze(newObj);
delete newObj.foo;
//newObj.foo = "23rdefrf";

console.log(newObj);