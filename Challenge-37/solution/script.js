 function startProgress() {
    const progressBar = document.getElementById('file-progress');
    let progress = 0;
    
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        progressBar.value = progress;
      } else {
        clearInterval(interval);
      }
    }, 500); // Updates every 500ms
  }
