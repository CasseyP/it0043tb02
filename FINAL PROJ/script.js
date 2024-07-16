document.addEventListener('DOMContentLoaded', () => {
    // PORTFOLIO
    const portfolioItems = document.querySelectorAll('.slider-img');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            portfolioItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // SERVICES
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    
    next.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    });
    
    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item');
        let lastItem = items[items.length - 1];
        document.querySelector('.slide').prepend(lastItem);
    });
});

// WORKS
document.addEventListener('DOMContentLoaded', () => {
    // WORK
    let nextWork = document.querySelector('.next-work');
    let prevWork = document.querySelector('.prev-work');

    nextWork.addEventListener('click', function() {
        let workItems = document.querySelectorAll('.work-item');
        document.querySelector('.work-slide').appendChild(workItems[0]);
    });

    prevWork.addEventListener('click', function() {
        let workItems = document.querySelectorAll('.work-item');
        let lastWorkItem = workItems[workItems.length - 1];
        document.querySelector('.work-slide').prepend(lastWorkItem);
    });
});
