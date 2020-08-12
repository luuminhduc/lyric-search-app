function showProgress() {
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.classList.add('active');
}

function hideProgress() {
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.classList.remove('active');
}

export {showProgress, hideProgress}