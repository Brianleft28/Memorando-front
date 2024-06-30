<!-- Navbar -->
<script lang="ts">
  let activeLink: string = "";

  function handleActive(id: string) {
    activeLink = id;
    console.log(activeLink);
  }
</script>

<nav class="navbar fixed-top bg-primary" data-bs-theme="dark">
  <!-- Div del contenido del navbar -->
  <div class="container-fluid mx-sm-2 mx-md-5 mx-0">
    <!-- Logo -->
    <a class="navbar-brand h1" href="/">MEMORANDUM</a>
    <!-- Boton del aside -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Aside -->
    <div
      class="offcanvas offcanvas-end bg-secondary"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <!-- Div del header del aside -->
      <div class="offcanvas-header justify-content-between">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
        <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="offcanvas"
          aria-label="Close">X</button
        >
      </div>
      <div class="offcanvas-body">
        <!-- Div del contenido del aside (menú) -->
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a
              class="nav-link active text-secondary {activeLink === 'home'
                ? 'active'
                : ''}"
              aria-current="page"
              href="/"
              on:click={() => handleActive("home")}>Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" aria-current="page" href="/memos"
              >Memos</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/estadisticas"
              >Estadisticas</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="/secretarias"
              >Secretarias</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
