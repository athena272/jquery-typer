$('li').dblclick(function () {
    const $this = $(this);

    $this.fadeOut(function () {
        $this.remove()
    });
})

