
const editAbom = document.getElementById('edit_abom');
const editAnti = document.getElementById('edit_anti');
const editArb = document.getElementById('edit_arb');
const editBH = document.getElementById('edit_bh');
const editCrus = document.getElementById('edit_crus');
const editFlag = document.getElementById('edit_flag');
const editGR = document.getElementById('edit_gr');
const editHell = document.getElementById('edit_hell');
const editHWM = document.getElementById('edit_hwm');
const editHM = document.getElementById('edit_hm');
const editJes = document.getElementById('edit_jes');
const editLep = document.getElementById('edit_lep');
const editMAA = document.getElementById('edit_maa');
const editMusk = document.getElementById('edit_musk');
const editOcc = document.getElementById('edit_occ');
const editPD = document.getElementById('edit_pd');
const editSB = document.getElementById('edit_sb');
const editVes = document.getElementById('edit_ves');

const renameAbom = document.getElementById('rename_abom');
const renameAnti = document.getElementById('rename_anti');
const renameArb = document.getElementById('rename_arb');
const renameBH = document.getElementById('rename_bh');
const renameCrus = document.getElementById('rename_crus');
const renameFlag = document.getElementById('rename_flag');
const renameGR = document.getElementById('rename_gr');
const renameHell = document.getElementById('rename_hell');
const renameHWM = document.getElementById('rename_hwm');
const renameHM = document.getElementById('rename_hm');
const renameJes = document.getElementById('rename_jes');
const renameLep = document.getElementById('rename_lep');
const renameMAA = document.getElementById('rename_maa');
const renameMusk = document.getElementById('rename_musk');
const renameOcc = document.getElementById('rename_occ');
const renamePD = document.getElementById('rename_pd');
const renameSB = document.getElementById('rename_sb');
const renameVes = document.getElementById('rename_ves');


renameAbom.addEventListener('click', function() {
    const isEditable = editAbom.getAttribute('contenteditable') === 'true';
    editAbom.setAttribute('contenteditable', !isEditable);
    editAbom.focus();
    if (isEditable) {
        renameAbom.textContent = 'Edit';
    } else {
        renameAbom.textContent = 'Save';
    }
});

editAbom.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editAbom.blur(); // Remove focus from the element to make it uneditable
    }
});

editAbom.addEventListener('blur', function() {
    editAbom.setAttribute('contenteditable', false);
    renameAbom.textContent = 'Edit';
});


renameAnti.addEventListener('click', function() {
    const isEditable = editAnti.getAttribute('contenteditable') === 'true';
    editAnti.setAttribute('contenteditable', !isEditable);
    editAnti.focus();
    if (isEditable) {
        renameAnti.textContent = 'Edit';
    } else {
        renameAnti.textContent = 'Save';
    }
});

editAnti.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editAnti.blur(); // Remove focus from the element to make it uneditable
    }
});

editAnti.addEventListener('blur', function() {
    editAnti.setAttribute('contenteditable', false);
    renameAnti.textContent = 'Edit';
});


renameArb.addEventListener('click', function() {
    const isEditable = editArb.getAttribute('contenteditable') === 'true';
    editArb.setAttribute('contenteditable', !isEditable);
    editArb.focus();
    if (isEditable) {
        renameArb.textContent = 'Edit';
    } else {
        renameArb.textContent = 'Save';
    }
});

editArb.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editArb.blur(); // Remove focus from the element to make it uneditable
    }
});

editArb.addEventListener('blur', function() {
    editArb.setAttribute('contenteditable', false);
    renameArb.textContent = 'Edit';})



renameBH.addEventListener('click', function() {
    const isEditable = editBH.getAttribute('contenteditable') === 'true';
    editBH.setAttribute('contenteditable', !isEditable);
    editBH.focus();
    if (isEditable) {
        renameBH.textContent = 'Edit';
    } else {
        renameBH.textContent = 'Save';
    }
});

editBH.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editBH.blur(); // Remove focus from the element to make it uneditable
    }
});

editBH.addEventListener('blur', function() {
    editBH.setAttribute('contenteditable', false);
    renameBH.textContent = 'Edit';})

renameCrus.addEventListener('click', function() {
    const isEditable = editCrus.getAttribute('contenteditable') === 'true';
    editCrus.setAttribute('contenteditable', !isEditable);
    editCrus.focus();
    if (isEditable) {
        renameCrus.textContent = 'Edit';
    } else {
        renameCrus.textContent = 'Save';
    }
});

editCrus.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editCrus.blur(); // Remove focus from the element to make it uneditable
    }
});

editCrus.addEventListener('blur', function() {
    editCrus.setAttribute('contenteditable', false);
    renameCrus.textContent = 'Edit';})   


renameFlag.addEventListener('click', function() {
    const isEditable = editFlag.getAttribute('contenteditable') === 'true';
    editFlag.setAttribute('contenteditable', !isEditable);
    editFlag.focus();
    if (isEditable) {
        renameFlag.textContent = 'Edit';
    } else {
        renameFlag.textContent = 'Save';
    }
});

editFlag.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editFlag.blur(); // Remove focus from the element to make it uneditable
    }
});

editFlag.addEventListener('blur', function() {
    editFlag.setAttribute('contenteditable', false);
    renameFlag.textContent = 'Edit';})    



renameGR.addEventListener('click', function() {
    const isEditable = editGR.getAttribute('contenteditable') === 'true';
    editGR.setAttribute('contenteditable', !isEditable);
    editGR.focus();
    if (isEditable) {
        renameGR.textContent = 'Edit';
    } else {
        renameGR.textContent = 'Save';
    }
});

editGR.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editGR.blur(); // Remove focus from the element to make it uneditable
    }
});

editGR.addEventListener('blur', function() {
    editGR.setAttribute('contenteditable', false);
    renameGR.textContent = 'Edit';})   

    
renameHell.addEventListener('click', function() {
    const isEditable = editHell.getAttribute('contenteditable') === 'true';
    editHell.setAttribute('contenteditable', !isEditable);
    editHell.focus();
    if (isEditable) {
        renameHell.textContent = 'Edit';
    } else {
        renameHell.textContent = 'Save';
    }
});

editHell.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editHell.blur(); // Remove focus from the element to make it uneditable
    }
});

editHell.addEventListener('blur', function() {
    editHell.setAttribute('contenteditable', false);
    renameHell.textContent = 'Edit';})    


renameHWM.addEventListener('click', function() {
    const isEditable = editHWM.getAttribute('contenteditable') === 'true';
    editHWM.setAttribute('contenteditable', !isEditable);
    editHWM.focus();
    if (isEditable) {
        renameHWM.textContent = 'Edit';
    } else {
        renameHWM.textContent = 'Save';
    }
});

editHWM.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editHWM.blur(); // Remove focus from the element to make it uneditable
    }
});

editHWM.addEventListener('blur', function() {
    editHWM.setAttribute('contenteditable', false);
    renameHWM.textContent = 'Edit';})    

renameHM.addEventListener('click', function() {
    const isEditable = editHM.getAttribute('contenteditable') === 'true';
    editHM.setAttribute('contenteditable', !isEditable);
    editHM.focus();
    if (isEditable) {
        renameHM.textContent = 'Edit';
    } else {
        renameHM.textContent = 'Save';
    }
});

editHM.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editHM.blur(); // Remove focus from the element to make it uneditable
    }
});

editHM.addEventListener('blur', function() {
    editHM.setAttribute('contenteditable', false);
    renameHM.textContent = 'Edit';})    

renameJes.addEventListener('click', function() {
    const isEditable = editJes.getAttribute('contenteditable') === 'true';
    editJes.setAttribute('contenteditable', !isEditable);
    editJes.focus();
    if (isEditable) {
        renameJes.textContent = 'Edit';
    } else {
        renameJes.textContent = 'Save';
    }
});

editJes.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editJes.blur(); // Remove focus from the element to make it uneditable
    }
});

editJes.addEventListener('blur', function() {
    editJes.setAttribute('contenteditable', false);
    renameJes.textContent = 'Edit';})    

renameLep.addEventListener('click', function() {
    const isEditable = editLep.getAttribute('contenteditable') === 'true';
    editLep.setAttribute('contenteditable', !isEditable);
    editLep.focus();
    if (isEditable) {
        renameLep.textContent = 'Edit';
    } else {
        renameLep.textContent = 'Save';
    }
});

editLep.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editLep.blur(); // Remove focus from the element to make it uneditable
    }
});

editLep.addEventListener('blur', function() {
    editLep.setAttribute('contenteditable', false);
    renameLep.textContent = 'Edit';})    

renameMAA.addEventListener('click', function() {
    const isEditable = editMAA.getAttribute('contenteditable') === 'true';
    editMAA.setAttribute('contenteditable', !isEditable);
    editMAA.focus();
    if (isEditable) {
        renameMAA.textContent = 'Edit';
    } else {
        renameMAA.textContent = 'Save';
    }
});

editMAA.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editMAA.blur(); // Remove focus from the element to make it uneditable
    }
});

editMAA.addEventListener('blur', function() {
    editMAA.setAttribute('contenteditable', false);
    renameMAA.textContent = 'Edit';})    

renameMusk.addEventListener('click', function() {
    const isEditable = editMusk.getAttribute('contenteditable') === 'true';
    editMusk.setAttribute('contenteditable', !isEditable);
    editMusk.focus();
    if (isEditable) {
        renameMusk.textContent = 'Edit';
    } else {
        renameMusk.textContent = 'Save';
    }
});

editMusk.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editMusk.blur(); // Remove focus from the element to make it uneditable
    }
});

editMusk.addEventListener('blur', function() {
    editMusk.setAttribute('contenteditable', false);
    renameMusk.textContent = 'Edit';})    

renameOcc.addEventListener('click', function() {
    const isEditable = editOcc.getAttribute('contenteditable') === 'true';
    editOcc.setAttribute('contenteditable', !isEditable);
    editOcc.focus();
    if (isEditable) {
        renameOcc.textContent = 'Edit';
    } else {
        renameOcc.textContent = 'Save';
    }
});

editOcc.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editOcc.blur(); // Remove focus from the element to make it uneditable
    }
});

editOcc.addEventListener('blur', function() {
    editOcc.setAttribute('contenteditable', false);
    renameOcc.textContent = 'Edit';})    

renamePD.addEventListener('click', function() {
    const isEditable = editPD.getAttribute('contenteditable') === 'true';
    editPD.setAttribute('contenteditable', !isEditable);
    editPD.focus();
    if (isEditable) {
        renamePD.textContent = 'Edit';
    } else {
        renamePD.textContent = 'Save';
    }
});

editPD.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editPD.blur(); // Remove focus from the element to make it uneditable
    }
});

editPD.addEventListener('blur', function() {
    editPD.setAttribute('contenteditable', false);
    renamePD.textContent = 'Edit';})    

renameSB.addEventListener('click', function() {
    const isEditable = editSB.getAttribute('contenteditable') === 'true';
    editSB.setAttribute('contenteditable', !isEditable);
    editSB.focus();
    if (isEditable) {
        renameSB.textContent = 'Edit';
    } else {
        renameSB.textContent = 'Save';
    }
});

editSB.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editSB.blur(); // Remove focus from the element to make it uneditable
    }
});

editSB.addEventListener('blur', function() {
    editSB.setAttribute('contenteditable', false);
    renameSB.textContent = 'Edit';})    

renameVes.addEventListener('click', function() {
    const isEditable = editVes.getAttribute('contenteditable') === 'true';
    editVes.setAttribute('contenteditable', !isEditable);
    editVes.focus();
    if (isEditable) {
        renameVes.textContent = 'Edit';
    } else {
        renameVes.textContent = 'Save';
    }
});

editVes.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (new line)
        editVes.blur(); // Remove focus from the element to make it uneditable
    }
});

editVes.addEventListener('blur', function() {
    editVes.setAttribute('contenteditable', false);
    renameVes.textContent = 'Edit';})    

