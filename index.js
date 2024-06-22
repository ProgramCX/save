function preloadImages(sources) {  
    var images = {};  
    var image;  
  
    $.each(sources, function(index, src) {  
        image = new Image();  
        images[src] = image;  
        $(image).on('load', function() {  
            console.log('图片已预加载: ' + src);  
        }).on('error', function() {  
            console.log('图片预加载失败: ' + src);  
        });  
  
        image.src = src;  
    });  
  
    return images; // 返回预加载的图片对象（可选）  
}  
  
// 使用方法  
var imageSources = ['background.jpg'];  
preloadImages(imageSources);