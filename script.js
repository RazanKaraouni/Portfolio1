document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll('.skills p');
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            alert(`You clicked on ${skill.innerText}`);
        });
    });
});