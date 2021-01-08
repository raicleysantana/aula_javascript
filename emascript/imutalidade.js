const user = {
    name : "Raicley",
    last_name : "Santana"
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName : `${user.name} ${user.last_name}` 
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);