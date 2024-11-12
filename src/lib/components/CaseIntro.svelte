<script>
  import Container from '@components/Container.svelte';
  import { PrismicRichText } from '@prismicio/svelte';
  
  export let pattern;
  export let content;
</script>

<section class="{pattern ? `odd-${pattern}` : ''}">

  <Container>

    <div class="title-wrapper wrapper">

      <button type="button" on:click={() => history.back()} />

      <div>
        <h1>{content.title || ''}</h1>
        {#if content.category}<h2>{content.category}</h2>{/if}
      </div>

    </div>

    <div class="summary-wrapper wrapper">

      <div class="summary__main">
        <figure class="cover-image">
          <img src={content.cover_image.url} alt={content.cover_image.alt} />
        </figure>
        <PrismicRichText field={content.summary} />
      </div>

      <div class="summary__details">
        {#if content.before}
          <div>
            <span>Before</span>
            <span>{content.before}</span>
          </div>
        {/if}

        {#if content.delivery}
          <div>
            <span>Delivery</span>
            <span>{content.delivery}</span>
          </div>
        {/if}

        {#if content.client}
        <div>
          <span>Client</span>
          <span>{content.client}{#if content.year}<br>({content.year}){/if}</span>
        </div>
        {/if}

        {#if content.tools}
        <div>
          <span>Tools</span>
          <span>{content.tools}</span>
        </div>
        {/if}

        {#if content.link && content.link.url}
        <div>
          <span>Link</span>
          <span>
            {#if content.link.url}
              See the project
              <a href={content.link.url} rel="external noopener noreferrer" target="_blank" >
                here
              </a>
            {/if}
          </span>
        </div>
        {/if}
      </div>

    </div>

  </Container>

</section>

<style>

  section {
    /* Max Width 600px */
    margin: 5rem 0 1.25rem 0;
    
  }
  
  div.title-wrapper {
    background-color: var(--odd-gray-light);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;

    -webkit-box-pack: center;
    -ms-flex-pack: center;

    /* Max Width 600px */
    align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
  
  div.title-wrapper button {
    aspect-ratio: 1/1;
    background-color: transparent;
    background-image: url('/icons/left-arrow-dark.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 50%;
    border-radius: 100%;
    cursor: pointer;
    display: block;

    /* Max Width 600px */
    border: 1px solid var(--odd-gray-dark);
    height: 2rem;
    margin-top: 0;
  }

  div.title-wrapper button:hover {
    background-image: url('/icons/left-arrow-light.svg');
    border: 1px solid var(--odd-gray-light);
    background-color: var(--odd-gray-dark);
  }
  
  div.title-wrapper div {
    border-radius: 0.625rem;
    flex-grow: 1;

    /* Max Width 600px */
    padding: 1.25rem 0.75rem 1rem 0.75rem;

  }
  
  div.title-wrapper h1 {
    font-family: 'Switzer', sans-serif;
    font-weight: 600;
    letter-spacing: -0.0275rem;
    line-height: 95%;

    color: var(--odd-gray-dark);

    /* Max Width 600px */
    font-size: 1.375rem;
    margin-bottom: 0.375rem;
  }
  
  div.title-wrapper h2 {
    font-family: 'Switzer', sans-serif;
    font-weight: 500;
    letter-spacing: -0.0125rem;
    line-height: 120%;
    text-transform: uppercase;

    /* Max Width 600px */
    font-size: 0.75rem;
    padding-left: 0.25rem;
  }

  .odd-studio div.title-wrapper h2 {
    color: var(--odd-purple-medium);
  }
  
  .odd-education div.title-wrapper h2 {
    color: var(--odd-blue-medium);
  }
  
  .odd-experiments div.title-wrapper h2 {
    color: var(--odd-turquoise-medium);
  }

  

  /* ------ SUMMARY WRAPPER ------ */
  div.summary-wrapper {
    background-color: var(--odd-gray-light);
    border-radius: 0.625rem;

    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1.25rem;

    /* Max Width 600px */
    /* -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1); */
    margin: 0 0 1.25rem 0;
  }

  div.summary-wrapper .summary__main,
  div.summary-wrapper .summary__details {
    grid-column: span 6;

    background-color: var(--odd-gray-light);
    border-radius: 0.625rem;
    -webkit-box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  }

  div.summary-wrapper .summary__main {
    overflow: hidden;
  }

  div.summary-wrapper .summary__main .cover-image {
    position: relative;
    padding-bottom: 33%;
  }

  

  div.summary-wrapper .summary__main .cover-image img {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  div.summary-wrapper .summary__main :global(p) {
    /* Max Width 600px */
    font-size: 1rem;
    line-height: 120%;
    padding: 1.25rem 1rem;
  }

  div.summary-wrapper .summary__details {
    display: -ms-grid;
    display: grid;

    /* Max Width 600px */
    gap: 1.25rem 1.25rem;
    -ms-grid-columns: 1fr 1.25rem 1fr 1.25rem 1fr;
    grid-template-columns: repeat(auto-fill, 1fr);
    padding: 1rem 1rem;
  }

  div.summary-wrapper .summary__details span:nth-child(1) {
    display: block;
    font-family: 'Switzer', sans-serif;
    font-weight: 700;
    letter-spacing: -0.0125rem;
    line-height: 100%;
    text-transform: uppercase;

    /* Max Width 600px */
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  div.summary-wrapper .summary__details span:nth-child(2) {
    color: var(--odd-gray-dark);
    display: block;
    font-family: 'Switzer', sans-serif;
    font-weight: 400;
    letter-spacing: -0.015rem;
    line-height: 110%;
    text-wrap: balance;

    /* Max Width 600px */
    font-size: 0.875rem;

  }

  .odd-studio div.summary-wrapper .summary__details span:nth-child(1) { color: var(--odd-purple-medium); }
  .odd-education div.summary-wrapper .summary__details span:nth-child(1) { color: var(--odd-blue-medium); }
  .odd-experiments div.summary-wrapper .summary__details span:nth-child(1) { color: var(--odd-turquoise-medium); }


  /* ------ RICHTEXT ------ */
  div.summary-wrapper :global(p) {
    color: var(--odd-gray-dark);
    font-family: 'Switzer', sans-serif;
    font-weight: 400;
    letter-spacing: -0.02rem;
    width: 100%;
  }
  
  div.summary-wrapper :global(p strong) {
    font-weight: 600;
  }
  
  div.summary-wrapper :global(p em) {
    font-style: italic;
  }
  
  div.summary-wrapper :global(p a) {
    cursor: pointer;
    font-weight: 500;
    text-decoration: underline;
  }
  
  .odd-studio .summary-wrapper :global(p a) { color: var(--odd-purple-medium); }
  .odd-education .summary-wrapper :global(p a) { color: var(--odd-blue-medium); }
  .odd-experiments .summary-wrapper :global(p a) { color: var(--odd-turquoise-medium); }
  
  @media only screen and (max-width: 600px) {    
  }
  
  @media only screen and (min-width: 600px) {
  }
  
  @media only screen and (min-width: 768px) {
    div.wrapper {
      margin-left: -5rem;
      margin-right: -5rem;
    }

    div.title-wrapper {
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    div.title-wrapper button {
      height: 2.25rem;
    }
    
    div.title-wrapper div {
      padding: 1.25rem 1.5rem 1rem 1.5rem;
    }
    
    div.title-wrapper h1 {
      font-size: 1.875rem;
      margin-bottom: 0.5rem;
    }
    
    div.title-wrapper h2 {
      font-size: 0.875rem;
    }
    
    div.summary-wrapper {
      margin-bottom: 1.5rem;
    }
    
    /* div.summary-wrapper div.mobile-cover-image {
      display: block;
      height: calc(70vw * (9 / 16));
    } */
    
    div.summary-wrapper .summary__main :global(p) {
      font-size: 1.125rem;
      line-height: 125%;
      padding: 1.5rem 1.5rem;
    }
    
    div.summary-wrapper .summary__details {
      gap: 1.5rem 1.5rem;
      padding: 1.5rem 1.5rem;
    }
    
    div.summary-wrapper .summary__details span:nth-child(1) {
      font-size: 1rem;
      margin-bottom: 0.375rem;
    }
    
    div.summary-wrapper .summary__details span:nth-child(2) {
      font-size: 1rem;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    div.title-wrapper {
      gap: 1.75rem;
      margin-bottom: 1.75rem;
    }
    
    div.title-wrapper div {
      padding: 1.5rem 1.75rem 1.25rem 1.75rem;
    }
    
    div.summary-wrapper {
      margin-bottom: 1.75rem;
    }
    
    /* div.summary-wrapper div.mobile-cover-image {
      display: block;
      height: calc(60vw * (9 / 16));
    } */
    
    div.summary-wrapper .summary__main :global(p) {
      padding: 1.75rem 1.75rem;
    }
    
    div.summary-wrapper .summary__details {
      gap: 1.75rem 1.75rem;
      padding: 1.75rem 1.75rem;
    }
  }
  
  @media only screen and (min-width: 1280px) {
    
    section {
      margin: 5rem 0;
    }

    div.wrapper {
      margin-left: -10rem;
      margin-right: -10rem;
    }
    
    div.title-wrapper {
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      gap: 3rem;
      margin-bottom: 2rem;
    }
    
    div.title-wrapper button {
      border: 2px solid var(--odd-gray-dark);
      height: 3rem;
      margin-top: 0.5rem;
    }
    
    div.title-wrapper div {
      padding: 0;
    }
    
    div.title-wrapper h1 {
      font-size: 3.5rem;
      margin-bottom: 0.75rem;
    }
    
    div.title-wrapper h2 {
      font-size: 1.25rem;
      padding-left: 0.5rem;
    }
    
    div.summary-wrapper {
      -webkit-box-shadow: none;
      box-shadow: none;
      margin-bottom: 2rem;
    }

    div.summary-wrapper .summary__main {
      grid-column: span 5;
    }
    
    div.summary-wrapper .summary__main :global(p) {
      font-size: 1.25rem;
      line-height: 130%;
    }

    div.summary-wrapper .summary__details {
      grid-column: span 1;
    }
    
    div.summary-wrapper .summary__details {
      -ms-flex-line-pack: start;
      align-content: start;
      -ms-grid-rows: 1fr 2rem 1fr 2rem 1fr 2rem 1fr 2rem 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);


      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;

      gap: 2rem;
      padding: 2rem 2rem;
    }
    
    div.summary-wrapper .summary__details span:nth-child(1) {
      font-size: 1.125rem;
      margin-bottom: 0.375rem;
    }
    
    div.summary-wrapper .summary__details span:nth-child(2) {
      font-size: 1.125rem;
    }
  }
  
  @media only screen and (min-width: 1536px) {
    section {
      margin: 5rem 0;
    }
    
    div.title-wrapper {
      gap: 3.75rem;
      margin-bottom: 2.5rem;
    }
    
    div.summary-wrapper {
      margin-bottom: 2.5rem;
    }
    
    div.summary-wrapper .summary__details {
      gap: 2.5rem;
      padding: 2.5rem 2.5rem;
    }
  }
</style>
