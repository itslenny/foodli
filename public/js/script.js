$(function() {
  console.log('page ready');

  $('.delete-button').on('click', function(e){
    e.preventDefault();
    var delBtn= $(this);
    if(confirm('Are you sure you want to delete this recipe from My Recipes?')){
      var myUrl=$(this).parent().attr('href');
      console.log("THIS BE URL:", myUrl)
      $.ajax({
        method:'DELETE',
        url:myUrl
      }).done(function(data){
        // console.log("HERRRRR"data)
        })
        $(delBtn).closest('.favoriteRecipe').fadeOut('slow', function(){

          $(this).remove();
      })
    }
  })

  $('.delete-item').on('click', function(e){
    e.preventDefault();
    var delBtn= $(this);
    if(confirm('Are you sure you want to delete this item from My Shopping List?')){
      var myUrl=$(this).parent().attr('href');
      console.log("THIS BE URL:", myUrl)
      $.ajax({
        method:'DELETE',
        url:myUrl
      }).done(function(data){
        // console.log("HERRRRR"data)
        })
        $(delBtn).closest('tr').fadeOut('slow', function(){

          $(this).remove();
      })
    }
  })











})
