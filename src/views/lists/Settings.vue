<template>
  <nav-bar>
      <h2 class="text-center mt-5">Ustawienia konta</h2>
      <div class="card mt-2 mx-auto pl-5">
            <div class="card-body bg-success">
                <span class="white float-end emailText">emailTestowy@gmail.com</span>
                <div class="circleName">E</div>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="dataInput" class="form-text">Imię i nazwisko</label>
                    <input type="name" class="form-control" id="dataInput">
                </div>
            </div>
        </div>

      <div class="card mt-4 mx-auto pl-5">
            <div class="card-body">
                <div class="mb-3">
                    <div class="email">
                        <span>emailTestowy@gmail.com</span>
                        <span class="float-end">
                            <button class="btn" data-bs-toggle="modal" data-bs-target="#changeEmailModal">ZMIEŃ EMAIL</button>
                        </span>
                        <change-email-modal></change-email-modal>
                    </div>
                    <div class="pass pt-5">
                        <span>******</span>
                        <span class="float-end">
                            <button class="btn" data-bs-toggle="modal" data-bs-target="#changePasswordModal">ZMIEŃ HASŁO</button>
                        </span>
                        <change-password-modal></change-password-modal>
                    </div>
                    <div class="pass pt-5">
                        <span class="float-end">
                            <button class="btn" data-bs-toggle="modal" data-bs-target="#deleteAccount">USUŃ SWOJE KONTO</button>
                        </span>
                        <delete-account></delete-account>
                    </div>
                </div>
            </div>
        </div>
  </nav-bar>
</template>

<script>
import NavBar from '../../components/SideBar.vue';
import changeEmailModal from '../../components/settings/ChangeEmailModal';
import changePasswordModal from '../../components/settings/ChangePasswordModal';
import DeleteAccount from '../../components/settings/DeleteAccount';

export default {
    components: {NavBar,changeEmailModal,changePasswordModal,DeleteAccount},
}
</script>

<style scoped>
.card {
    max-width: 40rem;
}

.white {
    color: #fff;
}

.form-control {
  border: none;
  border-bottom: 1px solid rgb(80, 82, 75);
}

.emailText {
    padding-top: 1rem;
}

.circleName {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-color: #ddd;
    text-align: center;
    font-size: 2rem;
    padding-top: 0.4rem;
    color: #fff;
}
</style>