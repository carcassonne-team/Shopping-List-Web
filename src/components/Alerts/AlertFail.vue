<script>
import swal from 'sweetalert2';
window.Swal = swal;
export default {
    AlertFail: (text) => {
        swal.fire({
            title: 'something wrong!',
            text: text,
            icon: 'error',
          });
    }
}
</script>
