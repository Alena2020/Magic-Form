let inputs = document.querySelectorAll('input[type="text"]');

inputs.forEach(input => {
    input.value = localStorage.getItem(input.id);

    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value);
    });
});