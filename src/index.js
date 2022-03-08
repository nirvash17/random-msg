const messages = [
    'oscar',
    'ana',
    'nicolai',
    'jessica',
    'laura',
    'miguel'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}


module.exports = { randomMsg }
