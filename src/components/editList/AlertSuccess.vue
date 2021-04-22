<script>
import swal from 'sweetalert2';
window.Swal = swal;
export default {
    successAlert: (text) => {
        swal.fire({
            title: 'Good job!',
            text: text,
            icon: "success",
          });
          setInterval(() => {
          location.reload()
        }, 2000);
    }
}
</script>
