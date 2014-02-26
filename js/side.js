(function() {
  $(function() {
    var rArray, rArrayLen;
    rArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    rArrayLen = rArray.length;
    $(".split").each(function(i) {
      var orginalText, originalLen, _self;
      _self = $(this);
      orginalText = [];
      originalLen = 0;
      orginalText = $.trim($(this).text()).split("");
      _self.empty();
      originalLen = orginalText.length;
      return $.each(orginalText, function(k, v) {
        var className, rIndex, rNumber;
        className = k % 2 ? "even" : "odd";
        rNumber = rArray[Math.floor(Math.random() * rArray.length)];
        rIndex = rArray.indexOf(rNumber);
        rArray.splice(rIndex, 1);
        return $("<div>").attr({
          "class": "alpha " + className + " pop" + rNumber,
          id: "id" + i + k
        }).text(v).appendTo(_self);
      });
    });
    $(".pop" + rArrayLen).on("webkitAnimationEnd animationend", function() {
      return $(".black").addClass("tada");
    });
  });

}).call(this);
