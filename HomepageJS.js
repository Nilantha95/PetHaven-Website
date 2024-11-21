document.getElementById('show-search').addEventListener('change', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (this.checked) {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});
