// Adtoox Javascript Test

// feel free to add more functions and/or files
// to structure your code as needed.

/**
 * @param {Object} resources - slideshow resources.
 * @param {{mp4:string, webm:string}} resources.video - video resource, webm and mp4 urls provided.
 * @param {string[]} resources.images - image resources, png urls
 * @param {string} resources.targetUrl - target url for slideshow click
 */


function startApp(resources) {
    //debugging
    console.log('resurser: '+ resources);
    console.log('bildresurser: ' + resources.images);
    console.log('videoklipp: ' + resources.video.mp4);
    console.log('länk: ' + resources.targetUrl);
    
    //data
    var link = resources.targetUrl;
    
    //loop content (images)
    Object.keys(resources.images).forEach(function(key) {
    
    document.querySelector('#dt-snurra').innerHTML =   
   
    '<a href="' + link + '" target="_blank">'            
    + '<img src="'            
    + resources.images[key]
    + '" alt="bildspel">'
    + '</a>';
        
    
    });
    
    document.querySelector('#dt-snurra').innerHTML =   
    
    '<a href="' + link + '" target="_blank">'            
    + '<video controls src="'            
    + resources.video.mp4
    + '">'
    + '</a>';
   
    
}
//startApp ends












