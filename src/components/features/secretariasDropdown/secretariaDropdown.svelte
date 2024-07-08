<script lang='ts'>
  import { getSecretarias } from "$lib/secretaria/secretariaServices";
  import { onMount } from "svelte";
  import type{ Secretaria } from "../../../services/secretarias/secretarias.type";

  export let fetchMemosFilteredById;

  

  let secretarias: Array<Secretaria> = [];

  let selectedSecretariaId: number = 0;

  const handleRadio = async (id: number) => {
      fetchMemosFilteredById(id);
  };

  onMount(async () => {
    secretarias = await getSecretarias();
  });




</script>

{#if secretarias.length > 0}
<button on:click|stopPropagation={()=> handleRadio(-1)} class="border-bottom dropdown-item p-2">
  <input
    class="form-check-input me-2"
    type="radio"
    id={'default'}
    name="Secretaria Default"
    bind:group={selectedSecretariaId}
    value={-1} 
  />
  <!-- Le dagmos el valor -1 para que la api no use un criterio de filtrado y nos traiga los memos de todas las secretarias  -->

  <label class="form-check-label" for={'Secretaria Default'}>
    Ver todo
  </label>
</button>
  {#each secretarias as secretaria}
      <button on:click|stopPropagation={()=> handleRadio(secretaria.id)} class="border-bottom dropdown-item p-2">
      <input
        class="form-check-input me-2"
        type="radio"
        id={secretaria.nombre}
        name="Secretaria"
        bind:group={selectedSecretariaId}
        value={secretaria.id}
      />

      <label class="form-check-label" for={secretaria.nombre}>
        {secretaria.nombre}
      </label>
    </button>
  {/each}
{/if}

<style>
</style>
