<script>
  import Header from "../components/layouts/Header.svelte";
</script>

<Header />

<main class="bg-secondary">
  <div class="container">
    <slot />
  </div>
</main>

<style>
  :root {
    /* 90px mide el navbar, sumado 12px de padding arriba mas 12 abajo */
    --navbar-height: 114px; /* Altura del navbar como variable */
  }
  main {
    margin-top: 90px; /* Altura del navbar */
    padding: 12px;
  }
  .container {
    padding-bottom: 20px;
    padding-top: 20px;
    min-height: calc(100vh - var(--navbar-height));
  }
</style>
