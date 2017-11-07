'use strict';

const username = prompt('Hello, what is your name?');
alert('Hello ' + username);
alert(username + ', I am going to ask you some questions about myself and we are going to see how well you know me. Please type yes or y for yes and no or n for no.');

const movies = prompt('Do I like movies?');
if(movies.toLowerCase() === 'yes' || movies.toLowerCase() === 'y') {
    alert('That is correct! I absolutely love movies.');
}
else if(movies.toLowerCase() === 'no' || movies.toLowerCase() === 'n') {
    alert('You are terribly wrong... I love movies.');
}

const arizona = prompt('My favorite team is from Arizona. Am I from there?');
if(arizona.toLowerCase() === 'yes' || arizona.toLowerCase() === 'y') {
    alert('That is incorrect, my family is from Ariona but I hail from here in Portland.');
}
else if(arizona.toLowerCase() === 'no' || arizona.toLowerCase() === 'n') {
    alert('Correct! I\'m from Portland. That was a tough one.');
}

const games = prompt('Do I enjoy playing video games?');
if(games.toLowerCase() === 'yes' || games.toLowerCase() === 'y') {
    alert('Yes! Playing video games with my friends is one of my favorite things to do.');
}
else if(games.toLowerCase() === 'no' || games.toLowerCase() === 'n') {
    alert('I\'m sorry but I really enjoy video games.');
}

const sports = prompt('Have I played any sports in my life?');
if(sports.toLowerCase() === 'yes' || sports.toLowerCase() === 'y') {
    alert('That\'s right. I played football, basketball, and baseball.');
}
else if(sports.toLowerCase() === 'no' || sports.toLowerCase() === 'n') {
    alert('Wrong. I have played quite a few sports in my life.');
}

const eagles = prompt('Are the Eagles one of my favorite bands?');
if(eagles.toLowerCase() === 'yes' || eagles.toLowerCase() === 'y') {
    alert('Absolutely. The Eagles are easily top 5 for me.');
}
else if(eagles.toLowerCase() === 'n' || eagles.toLowerCase() === 'n') {
    alert('Incorrect. The Eagles are the shit!');

}