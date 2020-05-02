document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('.hidden-btn')
    btn.addEventListener('click', function (e) {
        const container = document.querySelector('.header-section')
        if (container.classList.contains('expanded')) {
            container.classList.remove('expanded')
        } else {
            container.classList.add('expanded')
        }
    })
})
