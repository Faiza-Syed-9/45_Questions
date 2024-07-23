function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

let album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album2 = make_album("Led Zeppelin", "Led Zeppelin IV");
let album3 = make_album("The Beatles", "Abbey Road");

console.log(album1);
console.log(album2);
console.log(album3);
let album4 = make_album("Michael Jackson", "Thriller", 9);
console.log(album4);
