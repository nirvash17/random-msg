const messages: string[] = [
    'oscar',
    'ana',
    'nicolai',
    'jessica',
    'laura'
];

const randomMsg = ():void => {
    const message:string = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}


export default randomMsg;
