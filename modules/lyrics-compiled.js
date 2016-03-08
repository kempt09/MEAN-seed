function randomLyric() {
    var lyrics = ['The Atlantic was born today and I\'ll tell you how...', 'The clouds above opened up and let it out.', 'I was standing on the surface of a perforated sphere When the water filled every hole.', 'and thousands upon thousands made an ocean, Making islands where no island should go. Oh no.', 'Those people were overjoyed; they took to their boats. I thought it less like a lake and more like a moat.', 'The rhythm of my footsteps crossing flat lands to your door have been silenced forever more.', 'The distance is quite simply much too far for me to row It seems farther than ever before Oh no.'],
        randomize = Math.floor(Math.random() * lyrics.length),
        songLyric = lyrics[randomize];
    return console.log(songLyric);
}

module.exports = randomLyric;

//# sourceMappingURL=lyrics-compiled.js.map