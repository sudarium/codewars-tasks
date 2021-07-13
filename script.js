function accum(s) {
    return s.split('').map(function(item, index){
        return item.toUpperCase() + item.toLowerCase().repeat(index)
    }).join('-'); 
}