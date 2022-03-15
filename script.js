// Theme: Things someone forgot
// Output: (Pronoun) forgot to (Action) (Number) (Noun).
/* TODO:
 - Build arrays for Pronoun, Action, Number, Noun
 - Create a random selector for Pronoun, Action, Number, Noun
 - Combine all the randomly selected elements from Pronoun, Action, Number, Noun
*/

const pronouns = ["I","You","She","He","They","We"];
const actions = ["buy","sell","spin","draw"];
const nouns = ["cars","trucks","rabbits","chickens","ballons","whales"];

const randomNumber = (limit, min = 0) => {
    return Math.floor(Math.random() * limit + min);
};

const randomPronoun = () => {
    return pronouns[randomNumber(pronouns.length)];
};

const randomAction = () => {
    return actions[randomNumber(actions.length)];
};

const randomNoun = ()  => {
    return nouns[randomNumber(nouns.length)];
};

const createRandomMessage = () => {
    return `${randomPronoun()} forgot to ${randomAction()} ${randomNumber(8,2)} ${randomNoun()}.`;
};