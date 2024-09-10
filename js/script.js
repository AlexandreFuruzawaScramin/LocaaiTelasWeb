document.querySelector('.dropdown-container').addEventListener('click', function() {
    this.classList.toggle('show');
});

document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', function() {
        document.querySelector('.selected-option').textContent = this.textContent;
        document.querySelector('.dropdown-container').classList.remove('show');
    });
});

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'grid' ? 'none' : 'grid';
}

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');

    // Evento para atualização da imagem de visualização quando o usuário seleciona um arquivo
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0]; // Obtém o arquivo selecionado
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                previewImage.src = event.target.result; // Atualiza a imagem de visualização com o novo arquivo
            };

            reader.readAsDataURL(file); // Lê o arquivo como uma URL de dados
        }
    });
});