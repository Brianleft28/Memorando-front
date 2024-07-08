<script lang='ts'>
  import { formatDate, switchEstadoStyle } from "$lib";
  import ButtonDeleteMemo from "../../../components/common/ButtonDeleteMemo.svelte";
  import ButtonEditMemo from "../../../components/common/ButtonEditMemo.svelte";
  import type { MemoFiltered } from "../../../services/memos/memosTypes";


  export let data;
  let memo: MemoFiltered = data.memo.body[0];
</script>

<div class="card p-3 rounded-1 bg-body-tertiary">
  <div class="card-header row">
    <h2 class="col-md-5">Detalle del memo</h2>
    <div class="col-md-7 align-content-center text-md-end">
      <ButtonEditMemo />
      <ButtonDeleteMemo />
    </div>
  </div>
  <div class="card-body">
    <p><b>Id: </b> {memo.id}</p>

    <p>
      <b>Estado: </b>
      <span class={switchEstadoStyle(memo.estado_nombre)}>{memo.estado_nombre}</span>
    </p>

    <p class="">
      <b>Producido por: </b>
      {memo.secretaria_nombre}
    </p>
    <p><b>Fecha:</b> {formatDate(memo.fecha)}</p>
    <p class="border border-tertiary p-3">
      <b>Detalle: </b>
      {memo.detalle}
    </p>
    <div>
      <div class="row gap-3 justify-content-center">
        <a href="/memos" class="btn col-md-5 btn-outline-dark">Imprimir</a>
        <a href="/memos" class="btn col-md-5 btn-danger">Volver</a>
      </div>
    </div>
  </div>
</div>

<style>
</style>
