const isStormy = () => {
    const randomNumber = Math.random();
    if(randomNumber >= 0.2) return false;
    return true;
}

module.exports = { isStormy };