document.addEventListener("scroll", function() {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const scrollLine = document.querySelector(".scroll-line");
    
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = window.scrollY / maxScroll;
    const lineHeight = scrollLine.offsetHeight;
    
    const newTop = scrollFraction * lineHeight;
    scrollIndicator.style.top = `${newTop}px`;
});
