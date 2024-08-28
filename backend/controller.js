const users = [
    {
        id:1,
        name:"Jagath"

    },
    {
        id:2,
        name:"Nimal"
    }
];

const getUsers = (cb) => {
    cb(users);
}

const getUserbyId = (id,cb) => {
    const user = users.find(user=>user.id == id);
    cb(user);
}

exports.getUsers = getUsers;
exports.getUserbyId = getUserbyId;