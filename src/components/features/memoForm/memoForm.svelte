<script lang="ts">
  import { createMemo } from "../../../services/memos/memosServices";
  import type { Memo } from "../../../services/memos/memosTypes";
  import { getSecretarias } from "../../../services/secretarias/secretariasService";
  import { onMount } from "svelte";

  export let fetchMemosFiltered;
  let secretarias: any = [];

  onMount(async () => {
    secretarias = await getSecretarias();

    if (secretarias.length > 0) {
      secretariaID = await secretarias[0].id;
    } else {
      secretariaID = 0;
    }
  });

  let detalle = "";
  let fecha: string = '';
  let estadoID = "1";
  let secretariaID: number = 0;

  /**
   * Función para crear un memo
   * @param {Event} e
   * @returns {Promise<void>}
   * @returns alert('Memo creado con éxito') || alert('Error al crear memo')
   */
  const handleCreate = async (e: any) => {
    e.preventDefault();

    if (detalle === "") {
      alert("El detalle del memo es requerido");
      return;
    }

    if (detalle.length < 3) {
      alert("El detalle del memo debe tener al menos 5 caracteres");
      return;
    }

    if (detalle.trim() === "") {
      alert("El detalle del memo no puede contener solo espacios en blanco");
      return;
    }

    if (!fecha) {
      alert("La fecha del memo es requerida");
      return;
    }




  const memo: Memo = {
      detalle,
      estado_id: Number(estadoID),
      fecha: fecha,
      secretaria_id: secretariaID,
    };

    console.log(typeof memo.fecha);

    const response = await createMemo(memo);
    console.log(response);
    
    if (response.status !== 500) {
      alert("Memo creado con éxito");
        detalle = "";
        fecha = '';
        estadoID = "1";

      fetchMemosFiltered();
      
    } else {
      alert("Error al crear memo");
    }
  };
</script>

<div class="offcanvas-body bg-body-tertiary d-flex align-items-center justify-content-center">
  <form on:submit={handleCreate} class="form">
    <div class="card border-0 rounded-1 p-3 bg-body-tertiary">
      <!-- Select -->
      <label for="secretaria" class="form-label">Producido por:</label>
      <select bind:value={secretariaID} class="form-select bg-body-secondary text-body-secondary">
        {#each secretarias as secretaria}
          <option value={secretaria.id}>{secretaria.nombre}</option>
        {/each}
      </select>
      <!-- Textarea -->
        <textarea
          bind:value={detalle}
          class="form-control mt-3 bg-body-secondary text-body-secondary" 
          placeholder="Detalle u objeto del memo"
          id="TextArea"
          style="height: 100px"
        ></textarea>
    <!-- Fecha -->
      <label for="startDate" class="form-label bg-body-tertiary mt-3">Fecha del memo</label>
      <input
        bind:value={fecha}
        id="startDate"
        class="form-control bg-body-secondary"
        type="date"
      />
      <label for="estado" class="form-label mt-3">Estado</label>
      <select class="form-select bg-body-secondary text-body-secondary" bind:value={estadoID}>
        <option value="1">Completo</option>
        <option value="2">Pendiente</option>
        <option value="3">Derivado</option>
      </select>
    </div>
    <div class="row justify-content-center mt-3 gap-3">
      <button type="submit" class="col-5 btn btn-outline-dark mt-3"
        >Guardar memo</button
      >
      <button
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        class="btn btn-outline-danger mt-3 col-5">Cancelar</button
      >
    </div>
  </form>
</div>
