import"./assets/styles-ZA-NYoTW.js";import{a as c}from"./assets/vendor-CwgyD8nH.js";const l="https://pokeapi.co/api/v2/pokemon/",u=document.querySelector(".card-container"),a=document.querySelector(".search-form");a.addEventListener("submit",d);async function m(t){return(await c(`${l}${t}`)).data}async function d(t){t.preventDefault();const r=t.currentTarget.elements.query.value;if(!r.trim()){alert("Please enter a Pokémon name");return}try{const e=await m(r);console.log(e),u.innerHTML=p(e)}catch(e){e.response&&e.response.status===404?alert("Pokémon not found. Please check the name."):alert("Something went wrong. Try again later.")}a.reset()}function p({name:t,weight:r,height:e,abilities:s,sprites:o}){const n=s.map(({ability:i})=>`<li class="list-group-item">${i.name}</li>`).join("");return`
      <div class="card mx-auto mt-4 shadow animate-in" style="width: 22rem;">
        <img src="${o.front_default}" class="card-img-top p-3" alt="${t}" />
        <div class="card-body">
          <h5 class="card-title text-capitalize text-center">${t}</h5>
          <p class="card-text"><strong>Weight:</strong> ${r}</p>
          <p class="card-text"><strong>Height:</strong> ${e}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item active">Abilities</li>
          ${n}
        </ul>
      </div>`}
//# sourceMappingURL=index.js.map
