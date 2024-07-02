<script lang="ts">
  import { getMemos } from "../../../services/memos/memosServices";
  import { getSecretarias } from "../../../services/secretarias/secretariasService";
  import { onMount } from "svelte";

  let secretarias: any = [];

  onMount(async () => {
    secretarias = await getSecretarias();
    const memos = await getMemos();
    console.log(memos);
    console.log(secretarias);
  });

  /*   export let dataSecretarias; */
</script>

<div class="offcanvas-body">
  <form class="form card p-3">
    <label for="secretaria" class="form-label">Hacia</label>
    <select class="form-select">
      {#each secretarias as secretaria}
        <option value={secretaria.id}>{secretaria.nombre}</option>
      {/each}
    </select>
    <label for="detalle" class="form-label mt-3">Detalle</label>
    <div class="form-floating">
      <textarea
        class="form-control"
        placeholder="Leave a comment here"
        id="TextArea"
        style="height: 100px"
      ></textarea>
      <label for="textAreaDetail">Motivo u objeto del memo</label>
    </div>
    <label for="startDate" class="form-label mt-3">Fecha del memo</label>
    <input id="startDate" class="form-control" type="date" />
    <label for="estado" class="form-label mt-3">Estado</label>
    <select class="form-select">
      <option value="#">Completo</option>
      <option value="#">Pendiente</option>
      <option value="#">Derivado</option>
    </select>
    <button class="btn btn-outline-dark mt-3">Guardar memo</button>
    <button
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
      class="btn btn-dark mt-3">Cancelar</button
    >
  </form>
</div>
