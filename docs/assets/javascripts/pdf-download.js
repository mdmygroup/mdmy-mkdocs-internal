document.addEventListener('DOMContentLoaded', function() {
  // Create PDF download button
  const downloadButton = document.createElement('a');
  downloadButton.className = 'md-button md-button--primary pdf-download-button';
  downloadButton.innerHTML = '<span class="pdf-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 16L6 10H9V4H15V10H18L12 16ZM18 18H6V20H18V18Z" fill="currentColor"/></svg></span> Télécharger PDF';
  
  downloadButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add print class to body to apply print-specific styles
    document.body.classList.add('pdf-printing');
    
    // Add the site logo to the document for printing
    const articleContent = document.querySelector('.md-content__inner');
    if (articleContent) {
      const logoContainer = document.createElement('div');
      logoContainer.className = 'pdf-logo-container';
      logoContainer.innerHTML = '<img src="/public/logo/logo.png" alt="MDMY GROUP Logo" class="pdf-logo">';
      articleContent.prepend(logoContainer);
    }
    
    // Trigger print dialog
    window.print();
    
    // Small delay to remove the print class and logo after printing dialog closes
    setTimeout(function() {
      document.body.classList.remove('pdf-printing');
      const logoContainer = document.querySelector('.pdf-logo-container');
      if (logoContainer) {
        logoContainer.remove();
      }
    }, 1000);
  });
  
  // Append button to header actions
  const headerRight = document.querySelector('.md-header__inner .md-header__source');
  if (headerRight) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'md-header-button-container';
    buttonContainer.appendChild(downloadButton);
    headerRight.parentNode.insertBefore(buttonContainer, headerRight);
  }
});