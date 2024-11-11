<script>
  import { onMount } from 'svelte';
  import { gsap } from "gsap/dist/gsap";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { coverSlider } from '@utils/splide.js';
  
  import Container from '@components/Container.svelte';
  
  const branches = [
  {
    name: 'studio',
    header: 'we <span class="highlighted-text">reimagine data</span> into',
    items: [
    'meaningful narratives',
    'crafted data stories',
    'data illustrations',
    'actionable information',
    'data-driven solutions',
    'scientific translation',
    'engaging visuals',
    ],
  },
  {
    name: 'education',
    header: 'we <span class="highlighted-text">teach</span> how to reimagine <span class="highlighted-text">data</span> with',
    items: [
    'learning opportunities',
    'insightful analytics',
    'conversations',
    ],
  },
  ];
  
  const interval = 3000

  let slider
  let tl
  let timeoutID
  
  let branchIdx = 0;
  let itemIdx = -1;
  let itemEl
  let caretEl

  onMount(() => {
    updateItem()

    return () => {
      clearTimeout(timeoutID)
      
      if (tl?.isActive()) {
        tl.kill()
      }
    }
  })
  
  const updateBranch = () => {
    branchIdx = (branchIdx + 1) % branches.length;
    itemIdx = 0
    
    slider.splide.go('>')
  };
  
  const updateItem = () => {
    itemIdx++

    if (itemIdx === branches[branchIdx].items.length) {
      updateBranch();
    }

    typewritter()
    
    timeoutID = setTimeout(updateItem, interval);
  };
  
  const typewritter = () => {
    const text = branches[branchIdx].items[itemIdx]

    if (tl?.isActive()) {
      tl.kill()
    }
    
    tl = gsap.timeline()
    
    tl
    .add(() => {
      caretEl.classList.remove('blink') 
      caretEl.classList.remove('blink--fast') 
    })
    .to(itemEl, { text: { value: '', rtl: true, preserveSpaces: true }, duration: 0.5, ease: 'power1.inOut' })
    .add(() => {
      caretEl.classList.add('blink--fast') 
    })
    .to(itemEl, { text: { value: text, preserveSpaces: true, }, duration: 1.5, ease: 'power1.inOut' })
    .add(() => {
      caretEl.classList.remove('blink--fast') 
      caretEl.classList.add('blink') 
    })
  }

  
</script>

<section class="odd-{branches[branchIdx].name}">
  <div class="container">

    <Splide bind:this={slider} options={coverSlider}>
      {#each branches as branch}
      {@const active = branches[branchIdx].name === branch.name}
        <SplideSlide>
          <div class="odd-branch-name {branch.name}" class:active>
            <span>odd</span>
            <span>{branch.name}</span>
          </div>
        </SplideSlide>
      {/each}
    </Splide>

    <div class="odd-branch-claims">
      <h1>
        {@html branches[branchIdx].header}
        <br>
        <p>
          <span bind:this={itemEl} class="highlighted-text"></span><span bind:this={caretEl} class="blink">_</span>
        </p>
        
      </h1>
    </div>

  </div>
</section>

<style>
  @import url('@splidejs/svelte-splide/css');
  
  section {
    align-items: stretch;
    display: flex;
    justify-content: center;
    min-height: 100svh;
    color: var(--odd-gray-dark);
  }

  section div.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section div.odd-branch-name {
    align-items: flex-end;
    display: flex;
    justify-content: center;
    font-weight: 400;
    opacity: 0.5;

    transition: opacity 0.15s ease-in-out;
  }
  
  section div.odd-branch-name.active {
    opacity: 1;
  }
  
  section div.odd-branch-name.active > span:first-child {
    opacity: 1;
  }
  
  section div.odd-branch-name.active.studio {
    color: var(--odd-purple-medium);
  }
  
  section div.odd-branch-name.active.education {
    color: var(--odd-blue-medium);
  }
  
  section div.odd-branch-name > span:first-child {
    font-family: 'Switzer', sans-serif;
    letter-spacing: -0.03rem;
    opacity: 0;
    
    transition: opacity 0.15s ease-in-out;
  }
  
  section div.odd-branch-name > span:last-child {
    font-family: 'Newsreader', serif;
    font-style: italic;
    letter-spacing: -0.09rem;
  }

  section div.odd-branch-claims {
  }

  section div.odd-branch-claims h1 {
    position: relative;

    transform: translateY(-.75em);
  }

  section div.odd-branch-claims h1 p {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
  }
  
  section h1 {
    font-family: 'Newsreader', serif;
    font-weight: 300;
    letter-spacing: -0.2rem;
    text-align: center;
    text-wrap: balance;
  }
  
  section :global(.highlighted-text) {
    font-style: italic;
    font-weight: 400 !important;
  }

  section :global(.no-wrap) {
    white-space: nowrap;
  }
  
  section div.odd-branch-claims {
    flex-grow: 1;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  
  section :global(button) {
    bottom: 2rem;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  
  @media only screen and (max-width: 600px) {
    section {
      padding: 5rem 0;
    }
    
    section div.odd-branch-name > span:first-child {
      font-size: 1.75rem;
      padding-right: 0.375rem;
    }
    
    section div.odd-branch-name > span:last-child {
      font-size: 2rem;
    }
    
    section h1 {
      font-size: 3.75rem;
      line-height: 95%;
      margin: 3.75rem 0;
    }
    
  }
  
  @media only screen and (min-width: 600px) {
    section {
      padding: 5rem 0;
    }
    
    section div.odd-branch-name > span:first-child {
      font-size: 1.75rem;
      padding-right: 0.375rem;
    }
    
    section div.odd-branch-name > span:last-child {
      font-size: 2rem;
    }
    
    section h1 {
      font-size: 4.5rem;
      line-height: 95%;
      margin: 5rem 0;
    }
  }
  
  @media only screen and (min-width: 768px) {
    section div.odd-branch-name > span:first-child {
      font-size: 2.25rem;
      padding-right: 0.5rem;
    }
    
    section div.odd-branch-name > span:last-child {
      font-size: 2.5rem;
    }
    
    section h1 {
      font-size: 5rem;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    section div.odd-branch-name > span:first-child {
      font-size: 2.75rem;
      padding-right: 0.5rem;
    }
    
    section div.odd-branch-name > span:last-child {
      font-size: 3rem;
    }
    
    section h1 {
      font-size: 6.75rem;
    }
    
  }
  
  @media only screen and (min-width: 1280px) {
    section {
      padding: 3.75rem 0 7.5rem 0;
    }
    
    section div.odd-branch-name > span:first-child {
      font-size: 2.25rem;
      padding-right: 0.5rem;
    }
    
    section div.odd-branch-name > span:last-child {
      font-size: 2.5rem;
    }
    
    section h1 {
      font-size: 6.25rem;
      line-height: 90%;
      margin: 3.75rem 0;
    }
    
  }
  
  @media only screen and (min-width: 1536px) {
    section h1 {
      font-size: 7.5rem;
    }
  }
</style>
