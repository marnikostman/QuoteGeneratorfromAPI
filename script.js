$("#new-quote").on("click", function(t) {
  t.preventDefault();
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(response) {
      e = response[0];
      console.log(e);
      $("#author").text(e.title);
      $("#text").html(e.content);
      var o = "http://twitter.com/home?status=";
      var n = e.content.replace(/(<([^>]+)>)/gi, "");
      var u = n.substring(0, 108);
      o += u + "...";
      o += " " + e.title;
      $("#tweet-quote").attr("href", o);
    },
    cache: !1
  });
});
