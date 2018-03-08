
// lazy load images
window.addEventListener('load', function () {
  var allimages = document.getElementsByTagName('img');
  for (var i = 0; i < allimages.length; i++) {
    if (allimages[i].getAttribute('data-src')) {
      allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
    }
  }
}, false)
//end lazy load images


   function show(id){
     var element =document.getElementById(id);
     if(element.style.display=='none')
       element.style.display='block';
     else
       element.style.display='none';
}
$(function(){
  var $gallery = $('.gallery a').simpleLightbox();

  $gallery.on('show.simplelightbox', function(){
    console.log('Requested for showing');
  })
  .on('shown.simplelightbox', function(){
    console.log('Shown');
  })
  .on('close.simplelightbox', function(){
    console.log('Requested for closing');
  })
  .on('closed.simplelightbox', function(){
    console.log('Closed');
  })
  .on('change.simplelightbox', function(){
    console.log('Requested for change');
  })
  .on('next.simplelightbox', function(){
    console.log('Requested for next');
  })
  .on('prev.simplelightbox', function(){
    console.log('Requested for prev');
  })
  .on('nextImageLoaded.simplelightbox', function(){
    console.log('Next image loaded');
  })
  .on('prevImageLoaded.simplelightbox', function(){
    console.log('Prev image loaded');
  })
  .on('changed.simplelightbox', function(){
    console.log('Image changed');
  })
  .on('nextDone.simplelightbox', function(){
    console.log('Image changed to next');
  })
  .on('prevDone.simplelightbox', function(){
    console.log('Image changed to prev');
  })
  .on('error.simplelightbox', function(e){
    console.log('No image found, go to the next/prev');
    console.log(e);
  });
});
