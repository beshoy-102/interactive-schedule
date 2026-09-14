document.addEventListener('DOMContentLoaded', () => {
    // Valid options dictionary
    const validOptions = {
        "csai201-lec": [{ slotId: "tue-12", label: "Dr. Mayada Mansour\nSec 01" }, { slotId: "tue-14", label: "Dr. Mohamed Elhalaby\nSec 02" }, { slotId: "wed-10", label: "Dr. Mohamed Elhalaby\nSec 03" }],
        "csai201-lab": [{ slotId: "wed-14", label: "Sec 01" }, { slotId: "wed-10", label: "Sec 02" }, { slotId: "wed-14", label: "Sec 03" }, { slotId: "wed-10", label: "Sec 04" }, { slotId: "wed-16", label: "Sec 05" }, { slotId: "wed-14", label: "Sec 06" }, { slotId: "sun-12", label: "Sec 07" }, { slotId: "sun-8", label: "Sec 08" }, { slotId: "mon-14", label: "Sec 09" }, { slotId: "tue-10", label: "Sec 10" }, { slotId: "sun-8", label: "Sec 11" }, { slotId: "sun-12", label: "Sec 12" }],
        "csai202-lec": [{ slotId: "mon-10", label: "Dr. Yousry Abdelazeem\nSec 01" }, { slotId: "mon-16", label: "Dr. Yousry Abdelazeem\nSec 02" }, { slotId: "sun-10", label: "Dr. Ashraf Hendam\nSec 03" }],
        "csai202-lab": [{ slotId: "tue-14", label: "Sec 01" }, { slotId: "tue-10", label: "Sec 02" }, { slotId: "tue-10", label: "Sec 03" }, { slotId: "tue-10", label: "Sec 04" }, { slotId: "tue-12", label: "Sec 05" }, { slotId: "wed-10", label: "Sec 06" }, { slotId: "wed-16", label: "Sec 07" }, { slotId: "wed-8", label: "Sec 08" }],
        "math105-lec": [{ slotId: "tue-8", label: "Dr. Walaa El-Sharkawy\nSec 01" }, { slotId: "wed-14", label: "Dr. Mohamed Fawzy\nSec 02" }],
        "math105-tut": [{ slotId: "tue-12", label: "Sec 01" }, { slotId: "wed-16", label: "Sec 02" }, { slotId: "tue-14", label: "Sec 03" }, { slotId: "sun-8", label: "Sec 04" }, { slotId: "tue-8", label: "Sec 05" }, { slotId: "sun-12", label: "Sec 06" }],
        "csai205-lec": [{ slotId: "mon-8", label: "Dr. Mohamed Maher Ata\nSec 01" }, { slotId: "mon-14", label: "Dr. Mohamed Maher Ata\nSec 02" }, { slotId: "tue-10", label: "Dr. Mohamed Maher Ata\nSec 03" }],
        "csai205-lab": [{ slotId: "tue-8", label: "Sec 01" }, { slotId: "tue-10", label: "Sec 02" }, { slotId: "tue-16", label: "Sec 03" }, { slotId: "wed-10", label: "Sec 04" }, { slotId: "sun-10", label: "Sec 05" }, { slotId: "sun-12", label: "Sec 06" }, { slotId: "sun-8", label: "Sec 07" }, { slotId: "sun-10", label: "Sec 08" }, { slotId: "sun-12", label: "Sec 09" }, { slotId: "sun-14", label: "Sec 10" }, { slotId: "mon-14", label: "Sec 11" }, { slotId: "mon-16", label: "Sec 12" }],
        "dsai203-lec": [{ slotId: "tue-8", label: "Dr. Saeed Mohsen\nSec 01" }, { slotId: "mon-10", label: "Dr. Mohamed Elhalaby\nSec 02" }, { slotId: "mon-8", label: "Dr. Mohamed Elhalaby\nSec 03" }],
        "dsai203-lab": [{ slotId: "wed-8", label: "Sec 01" }, { slotId: "wed-8", label: "Sec 02" }, { slotId: "wed-10", label: "Sec 03" }, { slotId: "wed-14", label: "Sec 04" }, { slotId: "wed-16", label: "Sec 05" }, { slotId: "tue-8", label: "Sec 06" }, { slotId: "tue-12", label: "Sec 07" }, { slotId: "tue-10", label: "Sec 08" }, { slotId: "wed-10", label: "Sec 09" }, { slotId: "wed-8", label: "Sec 10" }, { slotId: "wed-14", label: "Sec 11" }, { slotId: "wed-16", label: "Sec 12" }],
        "sch105": [{ slotId: "wed-8", label: "Ahmed Hamdy\nSec 01" }, { slotId: "wed-10", label: "Ahmed Hamdy\nSec 02" }],
        "sch110": [{ slotId: "tue-8", label: "Ahmed Hamdy\nSec 01" }],
        "sch163": [{ slotId: "thu-10", label: "Sherif Hamdy ElGohary\nSec 01" }],
        "sch201": [{ slotId: "sun-8", label: "Loubna Abdeltawab\nSec 01" }],
        "sch244": [{ slotId: "wed-14", label: "Hassan Darwish\nSec 01" }],
        "sch258": [{ slotId: "tue-18", label: "Samy Ahmed\nSec 01" }],
        "sch260": [{ slotId: "tue-10", label: "Ahmed Hamdy\nSec 01" }, { slotId: "tue-12", label: "Ahmed Hamdy\nSec 02" }],
        "sch261": [{ slotId: "wed-10", label: "Hassan Darwish\nSec 01" }],
        "sch262": [{ slotId: "tue-10", label: "Sherif Hamdy ElGohary\nSec 01" }],
        "sch263": [{ slotId: "mon-8", label: "TBA\nSec 01" }],
        "sch264": [{ slotId: "tue-12", label: "Sherif Hamdy ElGohary\nSec 01" }],
        "sch266": [{ slotId: "thu-10", label: "Ahmed Hamdy\nSec 01" }],
        "sch273": [{ slotId: "tue-10", label: "Nashwa Abdel Tawab\nSec 01" }],
        "sch275": [{ slotId: "sun-10", label: "Hassan Darwish\nSec 01" }],
        "sch277": [{ slotId: "tue-12", label: "Nashwa Abdel Tawab\nSec 01" }],
        "sch299": [{ slotId: "mon-14", label: "Elhassan Elsabry\nSec 01" }]
    };

    const slots = document.querySelectorAll('.time-slot');
    let customIdCounter = 1;
    let draggedCard = null;
    let activeCardId = null;

    function bindCardEvents(card) {
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-btn';
        removeBtn.innerHTML = '&times;';
        removeBtn.title = 'Remove from schedule';
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            returnCardToPool(card);
        };
        card.appendChild(removeBtn);

        card.addEventListener('click', function (e) {
            if (activeCardId === this.id) clearHighlights();
            else highlightValidSlots(this.id);
        });

        card.addEventListener('dragstart', function (e) {
            draggedCard = this;
            setTimeout(() => this.classList.add('dragging'), 0);
            highlightValidSlots(this.id);
        });

        card.addEventListener('dragend', function () {
            this.classList.remove('dragging');
            draggedCard = null;
            clearHighlights();
            document.querySelectorAll('.pool-container').forEach(p => p.classList.remove('drag-over-pool'));
            slots.forEach(slot => slot.classList.remove('drag-over'));
        });
    }

    document.querySelectorAll('.subject-card').forEach(card => bindCardEvents(card));

    function returnCardToPool(card) {
        const instDiv = card.querySelector('.instructor');
        if (instDiv && card.dataset.default) {
            instDiv.textContent = card.dataset.default;
        }

        if (card.id.startsWith('custom-')) {
            document.getElementById('custom-pool').appendChild(card);
        } else if (card.id.startsWith('sch')) {
            if (card.classList.contains('req-course')) document.getElementById('sch-req-pool').appendChild(card);
            else document.getElementById('sch-elec-pool').appendChild(card);
        } else if (card.id.includes('lec')) {
            document.getElementById('lectures-pool').appendChild(card);
        } else {
            document.getElementById('labs-pool').appendChild(card);
        }
        clearHighlights();
    }

    document.getElementById('reset-btn').addEventListener('click', () => {
        document.querySelectorAll('.time-slot .subject-card').forEach(card => returnCardToPool(card));
    });

    // --- Export as Image Logic ---
    document.getElementById('export-btn').addEventListener('click', () => {
        const captureArea = document.getElementById('schedule-capture-area');

        // Hide remove buttons temporally so they don't appear in the image
        const removeBtns = document.querySelectorAll('.remove-btn');
        removeBtns.forEach(btn => btn.style.display = 'none');

        // Save the original box-shadow to remove it during capture for a cleaner image edge
        const originalShadow = captureArea.style.boxShadow;
        captureArea.style.boxShadow = 'none';

        html2canvas(captureArea, {
            scale: 2, // High resolution
            backgroundColor: '#ffffff'
        }).then(canvas => {
            captureArea.style.boxShadow = originalShadow;
            removeBtns.forEach(btn => btn.style.display = ''); // Restore buttons

            const link = document.createElement('a');
            link.download = 'My_Semester_Schedule.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    function clearHighlights() {
        slots.forEach(slot => slot.classList.remove('allowed-empty', 'allowed-taken'));
        document.querySelectorAll('.slot-preview').forEach(el => el.remove());
        document.querySelectorAll('.subject-card').forEach(card => card.classList.remove('active-card'));
        activeCardId = null;
    }

    function highlightValidSlots(cardId) {
        clearHighlights();
        activeCardId = cardId;

        const currentCard = document.getElementById(cardId);
        if (currentCard) currentCard.classList.add('active-card');

        const options = validOptions[cardId] || [];
        const groupedOptions = {};

        options.forEach(opt => {
            if (!groupedOptions[opt.slotId]) groupedOptions[opt.slotId] = [];
            groupedOptions[opt.slotId].push(opt.label);
        });

        for (const [slotId, labels] of Object.entries(groupedOptions)) {
            const slot = document.querySelector(`.time-slot[data-slot-id="${slotId}"]`);
            if (slot) {
                const previewEl = document.createElement('div');
                previewEl.className = 'slot-preview';

                if (labels.length > 2) {
                    previewEl.textContent = labels[0] + `\n(+${labels.length - 1} More)`;
                } else {
                    previewEl.textContent = labels.join('\n---\n');
                }

                const hasCard = Array.from(slot.children).some(child => child.classList.contains('subject-card') && child.id !== cardId);

                if (!hasCard) slot.classList.add('allowed-empty');
                else slot.classList.add('allowed-taken');

                slot.appendChild(previewEl);
            }
        }
    }

    slots.forEach(slot => {
        slot.addEventListener('dragover', function (e) {
            if (!draggedCard) return;
            const options = validOptions[draggedCard.id] || [];
            const isAllowed = options.some(opt => opt.slotId === this.dataset.slotId);
            const hasCard = Array.from(this.children).some(child => child.classList.contains('subject-card'));

            if (isAllowed && !hasCard) {
                e.preventDefault();
                this.classList.add('drag-over');
            }
        });

        slot.addEventListener('dragleave', function () {
            this.classList.remove('drag-over');
        });

        slot.addEventListener('drop', function (e) {
            this.classList.remove('drag-over');
            const hasCard = Array.from(this.children).some(child => child.classList.contains('subject-card'));

            if (draggedCard && !hasCard) {
                const options = validOptions[draggedCard.id] || [];
                const chosenOpt = options.find(opt => opt.slotId === this.dataset.slotId);
                if (chosenOpt) {
                    const instDiv = draggedCard.querySelector('.instructor');
                    if (instDiv) instDiv.textContent = chosenOpt.label.split('\n')[0];
                }

                this.appendChild(draggedCard);
                clearHighlights();
            }
        });
    });

    document.addEventListener('dragover', function (e) {
        if (e.target.closest('.pool-container')) {
            e.preventDefault();
            e.target.closest('.pool-container').classList.add('drag-over-pool');
        }
    });

    document.addEventListener('dragleave', function (e) {
        if (e.target.closest('.pool-container')) {
            e.target.closest('.pool-container').classList.remove('drag-over-pool');
        }
    });

    document.addEventListener('drop', function (e) {
        const pool = e.target.closest('.pool-container');
        if (pool) {
            pool.classList.remove('drag-over-pool');
            if (draggedCard) returnCardToPool(draggedCard);
        }
    });

    document.addEventListener('click', function (e) {
        if (!e.target.closest('.subject-card') && !e.target.closest('.time-slot') && !e.target.closest('.remove-btn') && !e.target.closest('.pool-header')) {
            clearHighlights();
        }
    });

    // Modal Logic
    const customModal = document.getElementById('custom-modal');
    document.getElementById('add-custom-btn').addEventListener('click', () => customModal.style.display = 'flex');

    document.getElementById('cc-cancel').addEventListener('click', () => {
        customModal.style.display = 'none';
        document.getElementById('custom-form').reset();
    });

    document.getElementById('custom-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('cc-name').value;
        const code = document.getElementById('cc-code').value || 'CUSTOM';
        const instructor = document.getElementById('cc-instructor').value || 'TBA';
        const slotsSelect = document.getElementById('cc-slots');
        const selectedSlots = Array.from(slotsSelect.selectedOptions).map(opt => opt.value);

        if (!name || selectedSlots.length === 0) return;

        const newId = 'custom-' + customIdCounter++;

        validOptions[newId] = selectedSlots.map(slotId => ({
            slotId: slotId,
            label: `${instructor}`
        }));

        const card = document.createElement('div');
        card.className = 'subject-card custom-card';
        card.draggable = true;
        card.id = newId;
        card.dataset.default = instructor;

        card.innerHTML = `
            <div class="card-header"><span class="code">${code}</span><span class="type">Custom</span></div>
            <div class="title">${name}</div>
            <div class="instructor">${instructor}</div>
        `;

        bindCardEvents(card);
        document.getElementById('custom-pool').appendChild(card);

        // Auto-expand Custom Courses column if it's currently collapsed
        const customCol = document.getElementById('custom-pool').closest('.pool-category');
        if (customCol.classList.contains('collapsed')) {
            customCol.classList.remove('collapsed');
        }

        document.getElementById('custom-form').reset();
        customModal.style.display = 'none';
    });
});