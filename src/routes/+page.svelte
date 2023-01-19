<script>
  let clicks = 100;
  let multiplier = 1;
  let workers = [];
  let worker_multiplier = 1;

  let upgrades = [
    { cost: 15, name: "Doubler", multiplier: 2, worker: 0 },
    { cost: 5, name: "Chicken", multiplier: 0, worker: 1 },
    { cost: 60, name: "Cow", multiplier: 0, worker: 10 },
  ];

  


  function increment() {
    clicks = clicks + multiplier;
    console.log("click" + clicks);
  }
  function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /.0+$|(.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

</script>

<article>
  <header>
    <div class="grid">
      {#each upgrades as upgrade}
        <button
          class="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
              }
            } else {
              alert("Click some more first!");
            }
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost * worker_multiplier}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <span class="clicks">{nFormatter(clicks,3)}</span>
      <span class="pointtext">cpc: {nFormatter(multiplier)}</span>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <span>Barn</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>


<main class="container_fluid">
  <body bgcolor="#371894"
  ></body>
</main>

<style>

  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
  :global(html) {
    background-color: orange;
    font-weight: bold;
  }
  :global(main) {
    background-color: orange;
    font-weight: bold;
  }
  :global(article) {
    background-color: orange;
    font-weight: bold;
  }
  :global(nav) {
    background-color: orange;


  }

  :global(a) {
    color:rgb(255, 255, 255)


  }
  header {
    background-color: orange;

  }
  span {
    color:rgb(255, 255, 255)

  }
  :global(body) {
    background-color: orange


  }
  footer {
    background-color: orange;



  }
 article{
  background-color: orange;

  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(0, 0, 0);
    background-color: rgb(1, 1, 1);
    background-size: cover;
    background-image: url("https://freebeacon.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-17-at-9.18.28-AM-736x411.png");
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
  }

  


  .worker {
    width: 100%;
    height: 100%;
    border: 1px solid rgb(87, 54, 141);
    background-color: rgb(155, 155, 155);
    place-items: center;
    place-content: center;
    display: flex;
  }
  :global(nav){
    background-color: orange

  }
  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
  .clicker {
    clip-path: circle();
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    place-items: center;
    place-content: center;
    background-image: url("https://news.uchicago.edu/sites/default/files/styles/explainer_hero/public/images/2022-10/sgr%20A%2A%20ESO%20and%20M.%20Kornmesser%20690.jpg?h=06d036b4&itok=Lr5t57tH");
    background-size: cover;
    background-position: 0px -169px;
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
  }

  .pointtext {
    color: rgb(19, 33, 165);
    font-size: 25px;
    font-weight: bold;
  }
</style>
