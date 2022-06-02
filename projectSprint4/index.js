$(function () {
    $("#tabs").tabs();
});

$(document).ready(function () {
    $(".cancel-dialog").click(function () {
        $(".dialog").hide();
    });
});

//social media buttons
$(document).ready(function () {
    $(".expgroup").hide();
    $(".add").click(function () {
        $(".expgroup").animate({width: 'toggle'}, function () {
            $(".add").toggleClass('rotated')
        });
    });
});

//alert_1
function donationalert() {
    alert("Thank you for support");
}

//alert_2
function messageAlert() {
    alert("Your message has been received, we will get back to you as soon as possible.")
}

//datepicker
$(function () {
    $("#datepicker").datepicker();
});


// autocomplete function
$(function () {
    var event = [
        "Trainig",
        "Concert",
        "Dance",
        "Theatre",
        "Game"
    ]

//autocomplete
    $("#event").autocomplete({
        source: event
    });
});


//Loading Data from External File using Ajax in jQuery
$(document).ready(function(){
    $("#boardButton").click(function(){
        $("#div1").load("ajax/demo.txt");
    });
});

/** Given a query string, return array of matching shows:
 *     { id, name, summary, episodesUrl }
 */

/* Search Shows: given a search term, search for tv shows that match that query.*/
async function searchShows(query) {
    // Make an ajax request to the searchShows api
    let res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);

    let shows = res.data.map(result => {
        let show = result.show;
        return {
            id: show.id,
            name: show.name,
            summary: show.summary,
            image: show.image ? show.image.medium : 'https://tinyurl.com/tv-missing'
        };
    });
    return shows;
}

/* Populate shows list: given list of shows, add shows to DOM */
function populateShows(shows) {
    const $showsList = $("#shows-list");
    $showsList.empty();

    for (let show of shows) {
        let $item = $(
            `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
           </div>
         </div>
       </div>
      `);

        $showsList.append($item);
    }
}

/* Handle search form submission: hide episodes area, get list of matching shows and show in shows list */
$("#search-form").on("submit", async function handleSearch (evt) {
    evt.preventDefault();

    let query = $("#search-query").val();
    if (!query) return;

    $("#episodes-area").hide();

    let shows = await searchShows(query);

    populateShows(shows);
});

/* Given a show ID, return list of episodes: { id, name, season, number } */
async function getEpisodes(id) {
    // get episodes from tvmaze, return array-of-episode-info
    let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
    let episodes = res.data.map(episode => ({
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
    }));
    return episodes;
}

/* Handle click on show name. */
$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(e) {
    let showId = $(e.target).closest(".Show").data("show-id");
    let episodes = await getEpisodes(showId);
    populateEpisodes(episodes);
});

