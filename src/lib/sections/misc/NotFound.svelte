<script>
  import { _ } from 'svelte-i18n';
  
  const ledArr = [
  { 
    name: "not-found",
    textArr: [ "Page not found", "Página não encontrada", "Página no encontrada" ]
  },
  { 
    name: "broken",
    textArr: [ "Algo si rompió", "Something is broken", "Algo deu errado" ], 
  },
  { 
    name: "sorry",
    textArr: [ "Desculpe", "Lo siento", "Sorry", "):" ], 
  },
  ]
</script>

<section>
  
  {#each ledArr.reverse() as led}
  <div class="led__container led__container--{led.name}">
    <h2 class="led__container__text led-shift">
      {#each Array(18) as a, i}
      <span>{led.textArr[i % led.textArr.length]}</span>
      {/each}
    </h2>
  </div>
  {/each}
  
  <h1>404</h1>
  
  <a class="home-link" href="/">
    <span>{$_('page-not-found.to-home')}</span>
    <span/>
  </a>
  
</section>


<style>
  section {
    position: relative;
    
    overflow: hidden;
    height: 100svh;
    
    padding: 1rem 2.5rem;
    font-family: 'Switzer', sans-serif;
  }
  
  section h1 {
    color: var(--odd-gray-dark);
    font-weight: 500;
    letter-spacing: -0.02em;
    
    padding: 2rem 0;
    text-align: center;
    font-size: 10rem;
  }
  
  a.home-link {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 4rem;

    background-color: var(--odd-gray-light);
    color: var(--odd-gray-dark);

    white-space: nowrap;
    text-transform: lowercase;

    font-family: inherit;
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 110%;

    border-radius: 3.75rem;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    border: 2px solid var(--odd-gray-dark);

    font-size: 1.5rem;
    gap: 0.75rem;
    margin: 3rem auto 2rem auto;
    padding: 0.75rem 1.5rem;
    width: 16rem;
  }

  a.home-link,
  a.home-link:hover span {
    cursor: pointer;
    text-decoration: none;
  }

  a.home-link span:nth-child(2) {
    height: 1.5rem;
    width: 1.5rem;
  }
  
  a.home-link:hover {
    cursor: pointer;
    text-decoration: none;

    color: var(--odd-gray-light);
    background-color: var(--odd-gray-dark);
    border-color: var(--odd-gray-dark);

  }

  
  a.home-link span {
    display: inline-block;
  }
  
  a.home-link span:nth-child(2) {
    background-image: url('/icons/right-arrow-dark.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  
  a.home-link:hover span:nth-child(2) {
    background-image: url('/icons/right-arrow-light.svg');
  }
  
  div.led__container {
    z-index: -1;
    
    width: 160vw;
    position: absolute;
    left: 50%;
    
    background-color: var(--odd-gray-light);
    border-top: 1px solid var(--odd-gray-medium);
    border-bottom: 1px solid var(--odd-gray-medium);
    
    padding: .25em 0 .35em;
    
    font-size: 2rem;
  }
  
  div.led__container.led__container--not-found {
    top: 65%;
    transform: translate(-50%, -50%) rotate(5deg);
  }
  
  div.led__container.led__container--broken {
    top: 40%;
    transform: translate(-50%, -50%) rotate(38deg);
  }
  
  div.led__container.led__container--sorry {
    top: 40%;
    transform: translate(-50%, -50%) rotate(-35deg);
  }
  
  div.led__container .led__container__text {
    display: flex;
    justify-content: center;
    white-space: nowrap;
    width: webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    
    color: var(--odd-gray-dark);
  }
  
  div.led__container--en .led__container__text {
    animation-duration: 75s;
  }
  
  div.led__container--pt .led__container__text {
    animation-duration: 45s;
  }
  
  div.led__container--es .led__container__text {
    animation-duration: 90s;
  }
  
  div.led__container .led__container__text span {
    margin-left: 2em;
  }
  
  @media only screen and (max-width: 600px) {
    
  }
  
  @media only screen and (min-width: 600px) {
    
  }
  
  @media only screen and (min-width: 768px) {
    section h1 {
      font-size: 11.2rem;
    }
    
    div.led__container {
      font-size: 2.25rem;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    section h1 {
      text-align: left;
      font-size: 12rem;
      padding: 0;
    }
    
    div.led__container {
      font-size: 2.75rem;
    }
    
    section a {
      font-size: 1.625rem;
      bottom: 6rem;
    }
  }
  
  @media only screen and (min-width: 1280px) {
    section h1 {
      font-size: 12.6rem;
    }
    
    div.led__container {
      font-size: 3rem;
    }
    
    section a {
      font-size: 1.625rem;
    }
  }
  
  @media only screen and (min-width: 1536px) {
    
  }
</style>