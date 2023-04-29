const pageViewsNum =  document.querySelector('.page-views'),
price = document.querySelector('.price'),
containerBar = document.querySelector('.container-bar'),
range = document.querySelector('.bar'),
icon = document.querySelector('.icon');

const percentage = (value, max, min)=>{
    return Math.round((value - min) / (max - min) * 100);
}

function slider (event){
    const rect = containerBar.getBoundingClientRect();
    
    const min = 0,
    max = rect.width;
    const x =Math.round(event.clientX - rect.left);

    const percentVal = percentage(x, max, min)==0?1:percentage(x, max, min);
    const percentValLeft = percentage(x, max, min)>92?`calc(${percentage(x,max,min)}% - 5rem)`:`${percentage(x,max, min)}%`;


    icon.style.left = percentValLeft;
    range.style.width = percentValLeft;
    price.textContent = '$' + (percentVal).toFixed(2);
    pageViewsNum.textContent = Math.round(percentVal * 6.25);
}

containerBar.addEventListener('mousemove', (event)=>{
    slider(event);
})

containerBar.addEventListener('mouseup', ()=>{
    containerBar.removeEventListener('mousemove', (e)=>{slider(e)})
})

















