<script>
  import { onMount } from 'svelte';
  import { createSecretaria } from '../../../services/secretarias/secretariasService.ts';





  let secretaria = {
    nombre: ''
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(secretaria.nombre === '') {
      alert('El nombre de la secretaria es requerido');
      return;
    }
    if(secretaria.nombre.length < 3) {
      alert('El nombre de la secretaria debe tener al menos 3 caracteres');
      return;
    }
    if(secretaria.nombre.length > 50) {
      alert('El nombre de la secretaria debe tener menos de 50 caracteres');
      return;
    } 
    if(secretaria.nombre.trim() === '') {
      alert('El nombre de la secretaria no puede contener solo espacios en blanco');
      return;
    }
    const response = await createSecretaria(secretaria);

    alert('Secretaria creada con exito')
    console.log(response);
    secretaria = {
      nombre: ''
    };
  };

</script>

<div class="card rounded">
  <h3 class="card-header p-3">Secretarias</h3>
  <div class="card-body">
    <form class="row  justify-content-center align-items-center">
      <div class=" form-floating col-md-5">
        <input 
        bind:value={secretaria.nombre}
        class="form-control" placeholder="Leave a comment here" id="floatingTextarea"/>
        <label for="floatingTextarea">Nombre de secretaria</label>
      </div>
      <div class="col-md-2"  >
        <button on:click={handleSubmit} class="col-md btn btn-primary">Agregar</button>
      </div>
      <div>
      </div>
    </form>
  </div>
</div>
<div>
  
</div>

<!-- Fetch -->
<div class="card rounded mt-1">
  <div class="p-3 card-header">
    LISTADO DE SECRETARIAS
  </div>
  <div class="card-body">

  </div>
  
</div>