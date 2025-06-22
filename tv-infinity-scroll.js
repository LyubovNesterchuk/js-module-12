import"./assets/styles-ZA-NYoTW.js";import{a as g}from"./assets/vendor-CwgyD8nH.js";const m="https://api.themoviedb.org/3",d="/trending/movie/week",u="345007f9ab440e5b86cef51be6397df1",n=document.querySelector(".js-movie-list"),a=document.querySelector(".js-guard"),f={root:null,rootMargin:"300px",threshold:0},i=new IntersectionObserver(v,f);let r=1;async function c(e=1){const{data:o}=await g(`${m}${d}`,{params:{api_key:u,page:e}});return o}function l(e){return e.map(({poster_path:o,release_date:t,vote_average:p,title:s})=>`
        <li class="movie-card">
            <img src="https://image.tmdb.org/t/p/w300${o}" alt="${s}"/>
            <div class="movie-info">
                <h2>${s}</h2>
                <p>Release Date: ${t}</p>
                <p>Vote Average: ${p}</p>
            </div>
        </li>
    `).join("")}c(r).then(e=>{console.log(e),n.insertAdjacentHTML("beforeend",l(e.results)),e.page<e.total_pages&&i.observe(a)}).catch(e=>{alert(e.message)});function v(e){e.forEach(async o=>{if(o.isIntersecting){r++;try{const t=await c(r);n.insertAdjacentHTML("beforeend",l(t.results)),t.page>=t.total_pages&&i.unobserve(a)}catch(t){alert(t.message)}}})}
//# sourceMappingURL=tv-infinity-scroll.js.map
