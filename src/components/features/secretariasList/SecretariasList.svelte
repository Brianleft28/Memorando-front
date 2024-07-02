<script lang="ts">
  import { onMount } from "svelte";
  import ButtonDelete from "../../common/ButtonDelete.svelte";
  import ButtonEdit from "../../common/ButtonEdit.svelte";
  import { updateSecretarias } from "../../../services/secretarias/secretariasService";

  export let dataSecretarias;
  export let fetchSecretarias;

  let editMode = false;
  let editingSecretariaId = null;
  let editingNombre = "";

  const handleEditMode = (secretariaId: number, nombre: string) => {
    editMode = !editMode;
    editingSecretariaId = secretariaId;
    editingNombre = nombre;
  };

  const handleCancel = () => {
    editMode = false;
    editingNombre = "";
  };

  const handleSave = async (id: any, nombre: any) => {
    editMode = false;
    try {
      const response = await updateSecretarias(id, nombre);
      console.log(response);
      editingNombre = "";
      fetchSecretarias();
    } catch {
      console.error("Error al actualizar la secretaria");
    }
  };
</script>

<div class="card rounded mt-3">
  <div class="card-body px-5">
    <table class="table table-hover bg-body-tertiary">
      <tbody>
        {#if editMode === true}
          {#each dataSecretarias as secretaria}
            {#if secretaria.id === editingSecretariaId}
              <tr class="row">
                <td class="col-3">
                  <p class="text-">Editar Secretaría</p>
                </td>
                <td class="col-6">
                  <input
                    class="form-control col-6"
                    type="text"
                    placeholder={secretaria.nombre}
                    bind:value={editingNombre}
                  /></td
                >
                <td class="col-3">
                  <button
                    on:click={handleSave(secretaria.id, editingNombre)}
                    class="btn btn-outline-success">Guardar</button
                  >
                  <button on:click={handleCancel} class="btn btn-danger"
                    >Cancelar</button
                  >
                </td>
              </tr>
            {/if}
          {/each}
        {/if}

        {#if dataSecretarias.length === 0}
          <tr class="row">
            <td class="col-12">No hay secretarias registradas</td>
          </tr>
        {/if}
        {#each dataSecretarias as secretaria}
          <tr class="row">
            <td class="col-6">{secretaria.nombre}</td>
            <td class="col-6 d-flex justify-content-end">
              <div class="d-flex">
                <div class="me-3">
                  <ButtonDelete fetch={fetchSecretarias} id={secretaria.id} />
                </div>
                <div class="">
                  <ButtonEdit
                    on:close={handleEditMode(secretaria.id, secretaria.nombre)}
                  />
                </div>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
