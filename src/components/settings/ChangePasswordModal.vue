<template>
  <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-labelledby="changePasswordModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="changePasswordModal">Zmień Email</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <div class="mb-3">
                <label for="pass" class="form-label">Podaj hasło</label>
                <input type="password" class="form-control" id="pass">
            </div>
            <div class="mb-3">
                <label for="NewPass" class="form-label">Podaj nowe hasło</label>
                <input type="password" class="form-control" id="NewPass">
            </div>
            <div class="mb-3">
                <label for="confirmNewPass" class="form-label">Powtórz nowe hasło</label>
                <input type="password" class="form-control" id="confirmNewPass">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ANULUJ</button>
        <button type="button" class="btn btn-primary">ZMIEŃ HASŁO</button>
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