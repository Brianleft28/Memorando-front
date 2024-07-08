<script lang="ts">
  import ButtonDelete from "../../common/ButtonDelete.svelte";
  import ButtonEdit from "../../common/ButtonEdit.svelte";
  import { updateSecretarias } from "../../../services/secretarias/secretariasService";

  export let dataSecretarias;
  export let fetchSecretarias;

  let editMode = false;
  let editingSecretariaId: any = null;
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
      editingNombre = "";
      fetchSecretarias();
    } catch {
      console.error("Error al actualizar la secretaria");
    }


  };
</script>

<div class="card mt-2">
    <table class="table table-hover bg-body-tertiary rounded-1">
      <tbody>
        {#if editMode === true}
          {#each dataSecretarias as secretaria}
            {#if secretaria.id === editingSecretariaId}
              <tr>
                <td>
                  <p>Editar Secretaría</p>
                </td>
                <td>
                  <input
                    class="form-control"
                    type="text"
                    placeholder={secretaria.nombre}
                    bind:value={editingNombre}
                  /></td
                >
                <td>
                  <button
                    on:click={() => {
                      handleSave(secretaria.id, editingNombre);
                    }}
                    class="btn btn-outline-success">Guardar</button
                  >
                  <button on:click={handleCancel} class="btn btn-outline-danger"
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
          <tr class="d-flex">
            <td class="col-6">{secretaria.nombre}</td>
            <td class="col-6 d-flex justify-content-end">
              <div class="d-flex">
                <div class="me-3">
                  <ButtonDelete fetch={fetchSecretarias} id={secretaria.id} />
                </div>
                <div class="">
                  <ButtonEdit
                    on:close={() => {
                      handleEditMode(secretaria.id, secretaria.nombre);
                    }}
                  />
                </div>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
</div>
