// console.log shorthand // use just log();
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};



$(function(){
	$(".split").each(function(i){
		
		var _self = $(this), orginalText = [],originalLen; //init
		orginalText = $.trim($(this).text()).split("");//split the characters
		_self.empty(); // empty the original div
		originalLen = orginalText.length; // length of trim text
		
		// foreach character
		$.each(orginalText,function(k,v){
			$("<div>")
			.attr({
				class:"alpha "+((k%2) ? "even":"odd"),
				id: "id"+i+k
			})
			.text(v)
			.appendTo(_self)
		})
	})
})