function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
var album2 = make_album("Led Zeppelin", "Led Zeppelin IV");
var album3 = make_album("The Beatles", "Abbey Road");
console.log(album1);
console.log(album2);
console.log(album3);
var album4 = make_album("Michael Jackson", "Thriller", 9);
console.log(album4);
