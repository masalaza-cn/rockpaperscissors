// Complete Day 1 goals here

let playlist  = [];

let imageValue;
let songValue;
let artistValue;
let linkValue;

function addSongInfo() {
  let imageValue = $(".image").val();
  let songValue = $(".title").val();
  let artistValue = $(".artist").val();
  let linkValue = $(".link").val();
  
  var newSong = {
    song_image: imageValue,
    song_song: songValue,
    song_artist: artistValue,
    song_link: linkValue,
  }
  
  playlist.push(newSong);
  }
  
  function emptyInput() {
  $(".title").val("");
  $(".artist").val("");
  $(".image").val("");
  $(".link").val("");
}

function emptyPlaylist() {
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".links").empty();
}

function displaySongInfo() {
for (let item of playlist) {
    $(".images").append(`<p><img src=${item.song_image}></p>`);
    $(".songs").append(`<p>${item.song_song}</p>`);
    $(".artists").append(`<p>${item.song_artist}</p>`);
    $(".links").append(`<p><a href=${item.song_link} target="_blank">Click Here</a></p>`);
}
}

function emptySongInfo() {
  playlist.length = 0;
}


$(".add").click(function() {
  addSongInfo();
  displaySongInfo();
  emptySongInfo();
  emptyInput();
});

$(".clear").click(function() {
  emptyPlaylist();
});