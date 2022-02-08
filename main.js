// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	track_name: "Where I Belong",
	artist: "Kiri T",
	image: "https://images.unsplash.com/photo-1518414881329-0f96c8f2a924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2978&q=80",
	path: "Where-I-Belong.wav"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "Image URL",
	path: "Enthusiast.mp3"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "Image URL",
	path: "Shipping_Lanes.mp3",
},
];
