let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];


let storyWords = story.split(" "); // Gather information of the individual words

console.log(storyWords.length); // Check how many words are there in story

let betterWords = storyWords.filter(x => {
  if (!unnecessaryWords.includes(x)) {
    return x;
  }}); // Filter out unnecessary words

// console.log(betterWords.length); // Check if the length decreased

let numberOfOverusedWords = storyWords.filter(x => {
  if (overusedWords.includes(x)) {
    return x;
  }}).length; 
console.log(numberOfOverusedWords);  
  // My big W method to check how many times writer used overused words

let numberOfSentences = 0; // Set up a counter

storyWords.filter(x=> {
  if (x.slice(-1) === '!' || x.slice(-1) === '.' ) {numberOfSentences+=1;}}); // checks the number of sentences by .slice(-1) which takes the last character of a string

console.log(numberOfSentences) // Counts


const Count = (x,y) => {
  if (x > 1) {
  console.log(`There are ${x} ${y}s.`);} else {console.log(`There is 1 ${y}.`)};
}; // Creating a function to log the number

Count(storyWords.length,'word')
Count(numberOfSentences,'sentence')
Count(numberOfOverusedWords,'overused word')

console.log(betterWords.join(" ")); // winningggg