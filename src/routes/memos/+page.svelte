<script>
  import MemoForm from "../../components/features/memoForm/memoForm.svelte";
  import TablaMemos from "../../components/features/tablaMemos/TablaMemos.svelte";
</script>

<div class="card bg-body-tertiary">
  <div class="px-5 mt-4">
    <div class="card-header p-5">
      <h3>Memos</h3>
      <p>
        Acá vas a poder desplegar un select para visualizar la secretaria a la
        que corresponde la tabla.
      </p>
      <button
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        class="btn btn-outline-dark col">Agregar memo</button
      >
    </div>
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Agregar MEMO</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <MemoForm />
    </div>
  </div>
  <TablaMemos />
</div>
