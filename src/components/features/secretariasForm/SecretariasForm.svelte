<script>
  import { onMount } from "svelte";
  import { createSecretaria } from "../../../services/secretarias/secretariasService.ts";
  import SecretariasList from "../secretariasList/SecretariasList.svelte";
  import { addSecretaria } from "../../../stores/secretariasStore.ts"; // Importa la función addSecretaria

  let secretaria = {
    nombre: "",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (secretaria.nombre === "") {
      alert("El nombre de la secretaria es requerido");
      return;
    }
    if (secretaria.nombre.length < 3) {
      alert("El nombre de la secretaria debe tener al menos 3 caracteres");
      return;
    }
    if (secretaria.nombre.length > 500) {
      alert("El nombre de la secretaria debe tener menos de 50 caracteres");
      return;
    }
    if (secretaria.nombre.trim() === "") {
      alert(
        "El nombre de la secretaria no puede contener solo espacios en blanco"
      );
      return;
    }
    const response = await createSecretaria(secretaria);
    alert("Secretaria creada con exito");
    secretaria = {
      nombre: "",
    };
    addSecretaria(response);
  };
</script>

<div class="card rounded">
  <h3 class="card-header p-3">Secretarias</h3>
  <div class="card-body">
    <form class="row justify-content-start align-items-center">
      <div class=" form-floating col-md-5">
        <input
          bind:value={secretaria.nombre}
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
        />
        <label for="floatingTextarea">Nombre de secretaria</label>
      </div>
      <div class="col-md-2">
        <button on:click={handleSubmit} class="col-md btn btn-primary"
          >Agregar</button
        >
      </div>
      <div></div>
    </form>
  </div>
</div>
<div></div>

<!-- Fetch -->
<SecretariasList />
