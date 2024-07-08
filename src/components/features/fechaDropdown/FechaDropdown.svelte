<script>
  import { getMemosFilteredByDate } from "../../../services/memos/memosServices";
    export let memos 
    let selectedDate = ''
    let trigger = 0 // Variable que se encarga de actualizar la vista

    /**
     * @name ordenarMemos
     * Función que se encarga de ordenar los memos segun su fecha
     * @param {string} direccion - Dirección en la que se ordenarán los memos
     * 
    */
    const ordenarMemos = (direccion) => {
        memos = [...memos].sort((a, b) => {
            let fechaA = new Date(a.fecha)
            let fechaB = new Date(b.fecha)

            return direccion === 'asc' ? fechaA - fechaB : fechaB - fechaA;
        })
        trigger++
    }

    /**
     * @name seleccionarFecha
     * Función que se encarga de seleccionar una fecha
    */

  // Función para manejar el cambio de fecha
  function handleDateChange(event) {
    selectedDate = event.target.value;
    console.log('date', selectedDate, typeof selectedDate)
    fetchMemosFilteredByDate(selectedDate);
  }

  const fetchMemosFilteredByDate = async (date) => {
    const res = await getMemosFilteredByDate(date);
    console.log('res', res)
    memos = res;
}


$: console.log(memos)

</script>

<li class="border-bottom dropdown-item p-2"

> 
<div class="form-label">
    Filtrar por fecha
</div>
<input
id="selectedDate"
class="form-control bg-body-secondary"
type="date"
on:change="{handleDateChange}"
/>
</li>
<button class="border-bottom dropdown-item p-2"
on:click="{() => ordenarMemos('desc')}"
>
Más reciente
</button>
<button class="border-bottom dropdown-item p-2"
on:click="{() => ordenarMemos('asc')}"
>
Más antiguo
</button>