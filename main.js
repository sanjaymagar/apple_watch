$('#range').on("change", function () {
    $('.wrapper').css('font-size', this.value + "px");
}).trigger("change");