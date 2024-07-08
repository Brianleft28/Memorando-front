<script lang="ts">
  import { formatDate, switchEstadoStyle } from "$lib/index.js";
  import type { MemosFiltered } from "../../../services/memos/memosTypes";

  export let memos: MemosFiltered[] = [];
  
</script>

<div class="card mt-2 bg-body-tertiary rounded-1">
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Producido por</th>
          <th scope="col">Detalle</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Ver</th>
        </tr>
      </thead>
      <tbody>
        {#if memos.length === 0}
          <th scope="row"> No hay memos disponibles </th>
        {/if}
        {#if memos.length > 0}
          {#each memos as memo}
            <tr class="col justify-content-start">
              <td>{memo.secretaria_nombre}</td>
              <td class="p-width">{memo.detalle}</td>
              <td
                ><span class={switchEstadoStyle(memo.estado_nombre)}
                  >{memo.estado_nombre}</span
                >
              </td>
              <td>{formatDate(memo.fecha)}</td>
              <td>
                <a href={`/memos/${memo.id}`} class="me-5 btn btn-outline-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</div>

<style>
  .p-width {
    max-width: 400px;
  }




</style>
