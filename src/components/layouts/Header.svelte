<!-- Navbar -->
<script lang="ts">
  let activeLink: string = "";

  function handleActive(id: string) {
    activeLink = id;
    console.log(activeLink);
  }
</script>

<nav
  class="navbar fixed-top bg-dark"
  data-bs-theme="light"
  style="padding: 0.5rem"
>
  <!-- Div del contenido del navbar -->
  <div class="container mx-sm-2 mx-md-5 mx-0">
    <!-- Logo -->
    <div class="d-flex img align-items-center">
      <a href="/">
        <img
          src="/img/brand.png"
          class="navbar-brand"
          style="width: 60px;"
          alt="logo de Municipilidad De Ituzaingo"
        />
      </a>
    </div>
    <!-- Boton del aside -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-list text-white"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
    <!-- Aside -->
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <!-- Div del header del aside -->
      <div class="offcanvas-header justify-content-between">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
        <button
          type="button"
          class="btn btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <!-- Div del contenido del aside (menú) -->
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a
              class="nav-link {activeLink === 'home' ? 'active' : ''}"
              aria-current="page"
              href="/"
              on:click={() => handleActive("home")}>Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link {activeLink === 'memos' ? 'active' : ''}"
              aria-current="page"
              on:click={() => {
                handleActive("memos");
              }}
              href="/memos">Memos</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link {activeLink === 'estadisticas' ? 'active' : ''}"
              on:click={() => {
                handleActive("estadisticas");
              }}
              href="/estadisticas"
              >Estadisticas
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link {activeLink === 'secretarias' ? 'active' : ''}"
              on:click={() => {
                handleActive("secretarias");
              }}
              href="/secretarias">Secretarias</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<style>
</style>
