let history = [];

function add(a, b) {
    let res = a + b;
    history.push(`${a} + ${b} = ${res}`);
    return res;
}

function getHistory() { 
    return history; 
}
