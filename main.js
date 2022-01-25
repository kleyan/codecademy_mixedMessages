
const language = ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'GO', 'Swift', 'Kotlin'];
const verb = ['creates', 'commits', 'deserves', 'is', 'wastes', 'reflects', 'leaves'];
const adj = ['fear', 'greatness', 'fun', 'time', 'hard work'];

const chooseWord = (array) => {
    let word = array[Math.floor(Math.random() * array.length)];
    return (word);
}

const mixedMessage = () => {
    return `${chooseWord(language)} ${chooseWord(verb)} ${chooseWord(adj)}.`;
}

//chooseWord(language);
//chooseWord(verb);
//chooseWord(adj);

console.log(mixedMessage());