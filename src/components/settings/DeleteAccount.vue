<template>
  <div class="modal fade" id="deleteAccount" tabindex="-1" aria-labelledby="deleteAccount" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-success">
        <h5 class="modal-title" id="deleteAccount">Czy na pewno chcesz usunąc Swoje konto?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Stracisz wszystkie swoje listy. Po skasowaniu konta nie będziemy w stanie ich przywrócić. Czy jesteś pewna, że chcesz trwale usunąć swoje konto?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ZAMKNIJ</button>
        <button type="button" class="btn btn-primary">USUŃ</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.modal-dialog {
  height: 100vh !important;
  display: flex;
}

.modal-content {
  margin: auto !important;
  height: fit-content !important;
}
</style>