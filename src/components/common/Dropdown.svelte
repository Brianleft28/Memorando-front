<script>
  import FechaDropdown from "../features/fechaDropdown/FechaDropdown.svelte";
  import SecretariaDropdown from "../features/secretariasDropdown/secretariaDropdown.svelte";
  
  export let fetchMemosFilteredById;
  export let memos;




</script>

<div class="col-md-2 offset-md-3 align-content-center">
  <div class="dropdown">
    <a
      class="btn btn-outline-dark dropdown-toggle"
      href="//:0"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-funnel-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"
        />
      </svg> Filtrar
    </a>

    <ul class="dropdown-menu dropdown-menu-dark border-0">
      
        <div class="dropright">
          <button class="dropdown-item py-2" type="button">
            Secretarias   
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </button>
          <!-- Dropdown secretarias -->
          <ul class="border-0 dropdown-submenu dropdown-menu-dark dropdown-menu">
            <li>
              <SecretariaDropdown {fetchMemosFilteredById}/>
            </li>
          </ul>
        </div>
        <!-- Fecha -->
        <div class="dropright">
          <button class="dropdown-item py-2" type="button">
            Fecha   
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </button>
          <!-- Dropdown secretarias -->
          <ul class="border-0 dropdown-submenu-fecha dropdown-menu-dark dropdown-menu">
           <FechaDropdown bind:memos={memos}/>
          </ul>
        </div>
      <!-- Otro item -->
    
      <li><button class="dropdown-item py-2">
        Estado
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </button></li>
    </ul>
  </div>
</div>

<!-- ESTILOS DEL DROPDOWN -->
<style>
  .dropdown-submenu {
    display: none;
    position: absolute;
    left: 100%;
    top: 5px;
  }

  .dropdown-submenu-fecha {
    display: none;
    position: absolute;
    left: 100%;
    top: 48px;
  }

  .dropdown-submenu-fecha:hover {
    display: block;
    cursor: pointer;
  }
  .dropdown-submenu:hover {
    display: block;
    cursor: pointer;
  }

  .dropdown-item:focus + .dropdown-submenu,
  .dropdown-item:hover + .dropdown-submenu {
    display: block;
  }


  .dropdown-item:focus + .dropdown-submenu-fecha,
  .dropdown-item:hover + .dropdown-submenu-fecha {
    display: block;
  }

  .dropdown-submenu-fecha:hover {
    display: block;
    cursor: pointer;
  }

  .dropdown-item:focus + .dropdown-submenu,
  .dropdown-item:hover + .dropdown-submenu {
    display: block;
  }
</style>
