<template>
  <div class="modal fade" id="changeEmailModal" tabindex="-1" aria-labelledby="changeEmailModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="changeEmailModal">Zmień Email</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Podaj adres email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Podaj hasło</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ANULUJ</button>
        <button type="button" class="btn btn-primary">ZMIEŃ EMAIL</button>
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