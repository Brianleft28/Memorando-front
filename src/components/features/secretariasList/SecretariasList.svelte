<script>
  import { onMount } from 'svelte';
  import { secretarias, getSecretarias } from '../../../stores/secretariasStore.js'; 

    onMount(() => {
        getSecretarias();
    });

</script>

<div class="card rounded mt-1">
    <div class="p-3 card-header">
      LISTADO DE SECRETARIAS
    </div>

    <div class="card-body">
       <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">Secretaria</th>
            </tr>
        </thead>
        <tbody>
            {#each $secretarias as secretaria }
                <tr>
                    <td>{secretaria.nombre}</td>
                </tr>
            {/each}
       </table>
   
    </div>
  </div>