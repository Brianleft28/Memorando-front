<script lang='ts'>
  import { onMount } from "svelte";
  import MemoForm from "../../components/features/memoForm/memoForm.svelte";
  import TablaMemos from "../../components/features/tablaMemos/TablaMemos.svelte";
  import { getMemoFilteredById, getMemosFiltered } from "../../services/memos/memosServices";
  import Dropdown from "../../components/common/Dropdown.svelte";
  import type { MemosFiltered, MemoFiltered } from "../../services/memos/memosTypes";

  export let data;
  
  let memos: MemosFiltered[] = data.memos;

    /**
   * @name fetchMemosFilteredById
   * Función que se encarga de filtrar memos por ID
  */
  const fetchMemosFilteredById = async (id: number) => {
    const res = await getMemoFilteredById(id);
    memos = res;
  }; 


  /**
   * @name fetchMemosFiltered
   * Función que se encarga de obtener los memos filtrad
   * @returns {Promise<MemosFiltered[]>} - Retorna un array de memos filtrados
  */

  const fetchMemosFiltered = async () => {
    const res = await getMemosFiltered();
    memos = res;
    return memos;
  };






  

  onMount( async () => {
    const res = await getMemosFiltered();
    memos = res;
  });


</script>

<div class="card border-0 bg-body-tertiary rounded-1 ">
    <div class="card-body">
      <div class="row text-center gap-md-0 gap-2 justify-content-start align-content-center">
        <!-- Button -->
           <button
           type="button"
           data-bs-toggle="offcanvas"
           data-bs-target="#offcanvasExample"
           aria-controls="offcanvasExample"
           class="btn col-md-4 btn-outline-dark">Agregar memo
          </button>
        <!-- Dropdown-->
        <Dropdown {fetchMemosFilteredById} bind:memos={memos}/>
        <!-- Buscador -->
        <div class="input-icon-container col-md-3 align-items-center">
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
    </div>
      
  <!-- Offcanvas -->
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
  <MemoForm {fetchMemosFiltered} />
</div>
<TablaMemos {memos} />

<style>
  .input-icon-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-icon {
    position: absolute;
    right: 14px;
    padding: 0.375rem 0.75rem;
    pointer-events: none;
  }

</style>