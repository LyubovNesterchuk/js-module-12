import"./assets/styles-ZA-NYoTW.js";import{a as d}from"./assets/vendor-CwgyD8nH.js";const m="https://api.themoviedb.org/3",p="/trending/movie/week",g="345007f9ab440e5b86cef51be6397df1",r=document.querySelector(".js-movie-list"),a=document.querySelector(".js-load-more");let t=1;a.addEventListener("click",f);async function i(e=1){const{data:o}=await d(`${m}${p}`,{params:{api_key:g,page:e}});return o}i(t).then(e=>{console.log(e),r.insertAdjacentHTML("beforeend",c(e.results)),e.page<e.total_pages&&a.classList.replace("load-more-hidden","load-more")}).catch(e=>{alert(e.message)});function c(e){return e.map(({poster_path:o,release_date:n,vote_average:l,title:s})=>`
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${o}" alt="${s}"/>
            <div class="movie-info">
                <h2>${s}</h2>
                <p>Release Date: ${n}</p>
                <p>Vote Average: ${l}</p>
            </div>
        </li>
    `).join("")}async function f(){t+=1,a.disabled=!0;try{const e=await i(t);console.log(e),r.insertAdjacentHTML("beforeend",c(e.results)),a.disabled=!1,e.page>=e.total_pages&&a.classList.replace("load-more","load-more-hidden")}catch(e){alert(e.message)}}
//# sourceMappingURL=tv-load-more.js.map
