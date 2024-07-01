<script lang="ts">
  import type { TabItem } from "./tab.types";

  export let tabs: TabItem[] = [
    {
      id: "entrada",
      title: "Memos de entrada",
      content: "Contenido de Memos de entrada...",
    },
    {
      id: "salida",
      title: "Memos de salida",
      content: "Contenido de Memos de salida...",
    },
  
  ];

  let activeTab = tabs[0]?.id; // Default to the first tab
</script>

<!-- Header de Tab -->

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
</ul>

<!-- Contenido de Tab -->
<div class="tab-content">
  {#each tabs as { id, content }}
    {#if activeTab === id}
      <div class="pt-1 show active fade" {id} role="tabpanel">
          {content}
      </div>
      <div>
      </div>
    {/if}
    <!--    {#if content === SecretariasForm}
      {}
    {/if} -->
  {/each}
</div>

<style>
  .active-tab {
    color: #fff;
  }
</style>
