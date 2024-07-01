<script>
  import { onMount } from "svelte";
  import {
    secretarias,
    getSecretarias,
    updateSecretaria,
  } from "../../../stores/secretariasStore.ts";
  import ButtonDelete from "../../common/ButtonDelete.svelte";
  import ButtonEdit from "../../common/ButtonEdit.svelte";

  onMount(() => {
    getSecretarias();
  });

  let editMode = false;
  let editingSecretariaId = null;
  let editingNombre = "";

  const handleEditMode = (secretariaId, nombre) => {
    editMode = !editMode;
    editingSecretariaId = secretariaId;
    editingNombre = nombre;
  };

  const handleCancel = () => {
    editMode = false;
    editingNombre = "";
  };

  let handleSave = (id, nombre) => {
    editMode = false;
    updateSecretaria(id, nombre);
    editingNombre = "";
  };
</script>

<div class="card rounded mt-1">
  <div class="p-3 card-header">LISTADO DE SECRETARIAS</div>

  <div class="card-body">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Secretaria</th>
        </tr>
      </thead>
      <tbody>
        {#if editMode === true}
          {#each $secretarias as secretaria}
            {#if secretaria.id === editingSecretariaId}
              <tr class="row">
                <td>
                  <h2>Editar secretaria</h2>
                  <input
                    class="form-control col-6"
                    type="text"
                    placeholder={secretaria.nombre}
                    bind:value={editingNombre}
                  /></td
                >
                <td>
                  <button
                    on:click={handleSave(secretaria.id, editingNombre)}
                    class="btn btn-success">Guardar</button
                  >
                  <button on:click={handleCancel} class="btn btn-danger"
                    >Cancelar</button
                  >
                </td>
              </tr>
            {/if}
          {/each}
        {/if}

        {#if $secretarias.length === 0}
          <tr class="row">
            <td class="col-12">No hay secretarias registradas</td>
          </tr>
        {/if}
        {#each $secretarias as secretaria}
          <tr class="row">
            <td class="col-6">{secretaria.nombre}</td>
            <div class="col-6 d-flex justify-content-end">
              <td><ButtonDelete id={secretaria.id} /></td>
              <td
                ><ButtonEdit
                  on:close={handleEditMode(secretaria.id, secretaria.nombre)}
                /></td
              >
            </div>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
