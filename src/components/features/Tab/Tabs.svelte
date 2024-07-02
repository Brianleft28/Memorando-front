<script lang="ts">
  import MemosDeEntrada from "../memosEntrada/MemosDeEntrada.svelte";
  import MemosDeSalida from "../memosSalida/MemosDeSalida.svelte";
  import type { TabItem } from "./tab.types";

  export let tabs: TabItem[] = [
    {
      id: "entrada",
      title: "Memos de entrada",
      content: MemosDeEntrada,
    },
    {
      id: "salida",
      title: "Memos de salida",
      content: MemosDeSalida,
    },
  ];

  let activeTab = tabs[0]?.id; // Default to the first tab
</script>

<!-- Header de Tab -->
<div class="div-padre">
  <ul class="nav row justify-content-center pb-2 g-md-0 nav-pills">
    {#each tabs as { title, id }}
      <li class=" col-12 col-md-4 rounded g-2" role="presentation">
        <a
          class="nav-link text-center rounded {activeTab === id
            ? 'active-tab active'
            : 'border border-secondary'}"
          href="#{title}"
          on:click={() => (activeTab = id)}
        >
          {title}
        </a>
      </li>
    {/each}
    <button class="mx-2 rounded mt-2 btn btn-dark col">Agregar memo</button>
  </ul>
</div>

<!-- Contenido de Tab -->
<div class="tab-content">
  {#each tabs as { id, content }}
    {#if activeTab === id}
      <div class="pt-1 show active fade" {id} role="tabpanel">
        <svelte:component this={content} />
      </div>
      <div></div>
    {/if}
  {/each}
</div>

<style>
</style>
