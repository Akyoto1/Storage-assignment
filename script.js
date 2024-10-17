<input type="text" id="nameInput" placeholder="Enter your Name">
<script>
document.getElementById("nameInput") .addEventListener("input", function(event) {
    console.log(event.target.value);
})
</script>