<script lang="ts">
  import { createSecretaria } from "../../../services/secretarias/secretariasService";

  export let fetchSecretarias;

  let secretaria = {
    nombre: "",
  };

  const handleSubmit = async (event: any) => {
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
    try {
      const response = await createSecretaria(secretaria);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    fetchSecretarias();
    alert("Secretaria creada con exito");
    secretaria = {
      nombre: "",
    };
  };
</script>

<div class="card rounded">
  <div class="card-body">
    <form class="row justify-content-start align-content-center">
      <div class="col-md-4">
        <input
          bind:value={secretaria.nombre}
          class="form-control bg-body-secondary"
          placeholder="Nombre de secretaria"
          id="floatingTextarea"
        />
      </div>
      <button on:click={handleSubmit} class="col-md-2 btn btn-dark"
        >Agregar</button
      >
      <div class="col-md-3 offset-md-3">
        <div class="input-icon-container">
          <input class="form-control bg-body-secondary" placeholder="Buscar" type="text" />
          <!-- Search Icon -->
          <div class="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
<div>
</div>

<style>
  .input-icon-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    right: 0;
    padding: 0.375rem 0.75rem;
    pointer-events: none;
  }

</style>
