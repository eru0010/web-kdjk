const introText = "Halo! Nama saya Muhammad Khairul Hafidz, biasa dipanggil Arul. Saya mahasiswa Informatika di Universitas Ahmad Dahlan, asli dari Lombok Tengah, NTB.";
let introTyped = false;

function typeIntro() {
    if (introTyped) return;
    introTyped = true;

    const el = document.getElementById('typed-intro');
    if (!el) return;

    let i = 0;
    const speed = 14;

    function step() {
        if (i <= introText.length) {
            el.textContent = introText.slice(0, i);
            i++;
            setTimeout(step, speed);
        }
    }
    step();
}

function setBtnState(btn, isHidden, labelShow, labelHide) {
    btn.innerHTML = isHidden
        ? `<span class="run-icon">&#9654;</span> ${labelShow}`
        : `<span class="run-icon">&#9660;</span> ${labelHide}`;
}

function toggleMore() {
    const moreInfo = document.getElementById('more-info');
    const btn = document.getElementById('toggleBtn');
    const isHidden = moreInfo.classList.toggle('hidden');

    setBtnState(btn, isHidden, 'Tentang Saya', 'Sembunyikan');

    if (!isHidden) {
        moreInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        typeIntro();
    }
}

function toggleProjects() {
    const projectsPanel = document.getElementById('projects-panel');
    const btn = document.getElementById('toggleProjectsBtn');
    const isHidden = projectsPanel.classList.toggle('hidden');

    setBtnState(btn, isHidden, 'Proyek', 'Sembunyikan');

    if (!isHidden) {
        projectsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function toggleSkills() {
    const skillsPanel = document.getElementById('skills-panel');
    const btn = document.getElementById('toggleSkillsBtn');
    const isHidden = skillsPanel.classList.toggle('hidden');

    setBtnState(btn, isHidden, 'Skill & Tools', 'Sembunyikan');

    if (!isHidden) {
        skillsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function toggleContact() {
    const contactPanel = document.getElementById('contact-panel');
    const btn = document.getElementById('toggleContactBtn');
    const isHidden = contactPanel.classList.toggle('hidden');

    setBtnState(btn, isHidden, 'Kontak', 'Sembunyikan');

    if (!isHidden) {
        contactPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
