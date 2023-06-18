
let NowplayingData = [];
let popularData = [];
let topRatedData = [];
let trendingData = [];
let upcomingData = [];
let SearchData = [];
var container = ``;

function openAndClose() {
    document.querySelector('.side_nav').classList.toggle('active')
    document.getElementById('OpenClose').classList.toggle('fa-xmark')

    document.getElementById("now_playing").animate([{ opacity: '0' }, { paddingTop: '25px' }], { duration: 1200, iterations: 1 });
    document.getElementById("popular").animate([{ opacity: '0' }, { paddingTop: '25px' }], { duration: 1300, iterations: 1 });
    document.getElementById("top_rated").animate([{ opacity: '0' }, { paddingTop: '25px' }], { duration: 1400, iterations: 1 });
    document.getElementById("Trending").animate([{ opacity: '0' }, { paddingTop: '25px' }], { duration: 1500, iterations: 1 });
    document.getElementById("Upcoming").animate([{ opacity: '0' }, { paddingTop: '25px' }], { duration: 1600, iterations: 1 });
    document.getElementById("Contactus").animate([{ opacity: '0' }, { paddingTop: '25px' }], { duration: 1700, iterations: 1 });
}


async function SearchMovie() {

    container = ``
    document.getElementById('homeitems').innerHTML = "";
    var letter = document.querySelector('.Lett');
    var so = letter.value;
    console.log(so);
    var serch = await fetch(`https://api.themoviedb.org/3/search/movie?query=${so}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`);
    var searchMo = await serch.json();
    console.log(searchMo);
    SearchData = searchMo.results;
    for (var i = 1; i < SearchData.length; i++) {

        if (SearchData[i].poster_path !== null) {
            console.log(SearchData[i].poster_path);
            container += `
        <div class="col-md-4">
        <div class="item itemclick ">
        <img src="https://image.tmdb.org/t/p/original${SearchData[i].poster_path}" alt="">
            <div class="layer d-flex">
                <h3> ${SearchData[i].title} </h3>
                <p> ${SearchData[i].overview}  </p>
                <p> rate: ${SearchData[i].vote_average}  </p>
                <p> ${SearchData[i].release_date}  </p>
            </div>
            
        </div>
    </div>  
        `
        }

    }
    document.getElementById('homeitems').innerHTML = container;
}

SearchMovie();


async function Nowplaying() {
    var Nowp = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var Nowplayingd = await Nowp.json();
    NowplayingData = Nowplayingd.results
    console.log(NowplayingData);
    container = ``
    for (var i = 1; i < NowplayingData.length; i++) {

        if (NowplayingData[i].poster_path !== null) {
            console.log(NowplayingData[i].poster_path);
            container += `
        <div class="col-md-4">
        <div class="item itemclick ">
        <img src="https://image.tmdb.org/t/p/original${NowplayingData[i].poster_path}" alt="">
            <div class="layer d-flex">
                <h3> ${NowplayingData[i].title} </h3>
                <p> ${NowplayingData[i].overview}  </p>
                <p> rate: ${NowplayingData[i].vote_average}  </p>
                <p> ${NowplayingData[i].release_date}  </p>
            </div>
            
        </div>
    </div>  
        `
        }
        else {
            container += `
            <div class="col-md-4">
            <div class="item itemclick ">
            <img src="image-not-found.jpg" alt="">
                <div class="layer d-flex">
                    <h3> ${NowplayingData[i].title} </h3>
                    <p> ${NowplayingData[i].overview}  </p>
                    <p> rate: ${NowplayingData[i].vote_average}  </p>
                    <p> ${NowplayingData[i].release_date}  </p>
                </div>
                
            </div>
        </div>  
            `
        }
    }
    document.getElementById('homeitems').innerHTML = container;

}
Nowplaying();

/* <img src="${popularData[i].backdrop_path }" alt=""></img> */
/* <img src="image-not-found.jpg" alt=""></img> */

async function popularMovies() {
    document.getElementById('homeitems').innerHTML = ``;
    var pop = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var popular = await pop.json();
    console.log(popular);
    popularData = popular.results
    console.log(popularData);
    container = ``
    for (var i = 1; i < popularData.length; i++) {
        container += `
        <div class="col-md-4">
        <div class="item itemclick ">
        <img src="https://image.tmdb.org/t/p/original${popularData[i].poster_path}" alt="">
            <div class="layer d-flex">
                <h3> ${popularData[i].title} </h3>
                <p> ${popularData[i].overview}  </p>
                <p> rate: ${popularData[i].vote_average}  </p>
                <p> ${popularData[i].release_date}  </p>
            </div>
            
        </div>
    </div>  
        `

    }
    document.getElementById('homeitems').innerHTML = container;
}



async function TopRatedMovies() {
    document.getElementById('homeitems').innerHTML = ``;
    var top = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var toprated = await top.json();
    console.log(toprated);
    topRatedData = toprated.results
    console.log(topRatedData);
    container = ``
    for (var i = 1; i < topRatedData.length; i++) {
        container += `
        <div class="col-md-4">
        <div class="item itemclick ">
        <img src="https://image.tmdb.org/t/p/original${topRatedData[i].poster_path}" alt="">
            <div class="layer d-flex">
                <h3> ${topRatedData[i].title} </h3>
                <p> ${topRatedData[i].overview}  </p>
                <p> rate: ${topRatedData[i].vote_average}  </p>
                <p> ${topRatedData[i].release_date}  </p>
            </div>

        </div>
    </div>  
        `

    }
    document.getElementById('homeitems').innerHTML = container;
}


async function TrendingMovies() {
    document.getElementById('homeitems').innerHTML = ``;
    var trend = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var trending = await trend.json();
    console.log(trending);
    trendingData = trending.results
    console.log(topRatedData);
    container = ``
    for (var i = 1; i < trendingData.length; i++) {
        container += `
        <div class="col-md-4">
        <div class="item itemclick ">
        <img src="https://image.tmdb.org/t/p/original${trendingData[i].poster_path}" alt="">
            <div class="layer d-flex">
                <h3> ${trendingData[i].title} </h3>
                <p> ${trendingData[i].overview}  </p>
                <p> rate: ${trendingData[i].vote_average}  </p>
                <p> ${trendingData[i].release_date}  </p>
            </div>

        </div>
    </div>  
        `

    }
    document.getElementById('homeitems').innerHTML = container;
}


async function UpComingMovies() {
    document.getElementById('homeitems').innerHTML = ``;
    var up = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44');
    var upcoming = await up.json();
    console.log(upcoming);
    upcomingData = upcoming.results
    console.log(upcomingData);
    container = ``
    for (var i = 1; i < upcomingData.length; i++) {
        container += `
        <div class="col-md-4">
        <div class="item itemclick ">
        <img src="https://image.tmdb.org/t/p/original${upcomingData[i].poster_path}" alt="">
            <div class="layer d-flex">
                <h3> ${upcomingData[i].title} </h3>
                <p> ${upcomingData[i].overview}  </p>
                <p> rate: ${upcomingData[i].vote_average}  </p>
                <p> ${upcomingData[i].release_date}  </p>
            </div>

        </div>
    </div>  
        `

    }
    document.getElementById('homeitems').innerHTML = container;
}

const mailVal = document.getElementById('mailVal');
const EmailIn = document.getElementById('EmailIn');
const buton = document.getElementById('butt');

EmailIn.addEventListener("blur", function () {
    let mailregx = /^[a-zA-z0-9_]{3,15}@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/

    if (mailregx.test(EmailIn.value) == true) {
        console.log('true');
        EmailIn.classList.add('is-valid')
        mailVal.classList.add('hide-error-msg')
        2711
        EmailIn.classList.remove('is-invalid')
        buton.removeAttribute('disabled')

    } else {
        console.log('false');
        EmailIn.classList.add('is-invalid')
        mailVal.classList.remove('hide-error-msg')
        EmailIn.classList.remove('is-valid')

    }
})

