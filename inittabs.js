$(document).ready(function() {
  $(".search-sort-button").on("click", function() {
    $(".sorter").toggleClass("active-sorter");
  });
  $(".searchon-trigger").click(function() {
    $(".searchcomponent").toggleClass("searchcomponent-active");
  })

  $(".searchoff-trigger").click(function() {
    $(".searchcomponent").toggleClass("searchcomponent-active");
  })
});