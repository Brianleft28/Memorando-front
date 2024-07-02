<script>
  let memosDeSalida = [
    {
      id: 1,
      desde: "Secretaría de Hacienda",
      hacia: "Secretaría de Salud",
      detalle:
        "Se solicita presupuesto para la compra de medicamentos lorem ipsum dolor sit amet consectetur adipiscing elit",
      fecha: "2021-10-10",
    },
    {
      id: 2,
      hacia: "Secretaría de Hacienda",
      desde: "Secretaría de Salud",
      detalle:
        "Se solicita presupuesto para la compra de medicamentos lorem ipsum dolor sit amet consectetur adipiscing elit",
      fecha: "2021-10-10",
    },
  ];

  let handleView = (id) => {
    console.log("id del memo: ", id);
  };
</script>

<div class="card bg-body-tertiary border-0 rounded-1">
  <div class="table-responsive">
    <table class="table table-hover justify-content-center">
      <thead>
        <tr>
          <th scope="col">Desde</th>
          <th scope="col">Detalle</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Ver</th>
        </tr>
      </thead>
      <tbody>
        {#if memosDeSalida.length === 0}
          <th scope="row"> No hay memos de salida disponibles </th>
        {/if}
        {#if memosDeSalida.length > 0}
          {#each memosDeSalida as memo}
            <tr class="col">
              <td>{memo.desde}</td>
              <td class="p-width">{memo.detalle}</td>
              <td>{memo.estado}</td>
              <td>{memo.fecha}</td>

              <td>
                <button
                  class="btn btn-primary"
                  on:click={() => {
                    handleView(memo.id);
                  }}
                >
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
                </button>
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
    max-width: 450px;
  }
</style>
