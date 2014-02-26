$ ->
################################################################################################
#split the characters and append it back to Parent
################################################################################################

  rArray = [1..16]
  rArrayLen = rArray.length
  $(".split").each (i) ->
    _self = $(this) #init
    orginalText = []
    originalLen = 0
    orginalText = $.trim($(this).text()).split("") #split the characters
    _self.empty() # empty the original div
    originalLen = orginalText.length # length of trim text

    # foreach character
    $.each orginalText, (k, v) ->
      #className = if (k % 2) and not (i % 2) or not (k % 2) and (i % 2) then "even" else "odd"
      className = if (k % 2) then "even" else "odd"

      #get a random elem from array
      rNumber = rArray[Math.floor(Math.random()*rArray.length)]

      #find the index of that
      rIndex = rArray.indexOf rNumber;

      #remove that from array
      rArray.splice rIndex,1


      $("<div>").attr(
        class: "alpha " + className+" pop"+rNumber
        id: "id" + i + k
      ).text(v).appendTo _self

################################################################################################
# add tada to black when last character is visible
################################################################################################

  $(".pop"+rArrayLen).on "webkitAnimationEnd animationend", ->
    $(".black").addClass "tada"



  return
