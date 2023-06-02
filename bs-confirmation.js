$.fn.confirmation = function (options) {
    var selector = this;
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }

        return randomString;
    }

    var btnID1 = 'btn-' + generateRandomString(10);
    var btnID2 = 'btn-' + generateRandomString(9);
    var title = options.title || 'Confirmation';
    var onConfirm = options.onConfirm || function () { };

    $(this).click(function () {
        var confirmationDialog = $('<div style="min-width: 240px;">' +
            '<div class="popover-arrow"></div>' +
            '<div class="popover-inner mb-1">' +
            '<span class="popover-inner-content fw-bold"></span>' +
            '</div>' +
            '<div class="d-flex justify-content-between">' +
            '<span id="' + btnID1 + '" class="btn btn-sm btn-danger w-50">Yes</span>' +
            '<span id="' + btnID2 + '" class="btn btn-sm btn-secondary w-50">No</span>' +
            '</div>' +
            '</div>');

        confirmationDialog.find('.popover-inner-content').html(options.content || 'Are you sure?');
        confirmationDialog.find('#' + btnID1).click(function () {
            //console.log('yes clicked');
            onConfirm();
            $(selector).popover('hide');

        });
        confirmationDialog.find('#' + btnID2).click(function () {
            //console.log('No clicked');
            $(selector).popover('hide');
        });

        $(this).popover({
            title: title,
            content: confirmationDialog,
            html: true,
            placement: "top",
        });

        $(this).popover('show');
    });


    return this;
};
