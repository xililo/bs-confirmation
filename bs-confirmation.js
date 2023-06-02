$.fn.confirmation = function (options) {
    var title = options.title || 'Confirmation';
    var onConfirm = options.onConfirm || function () { };

    $(this).click(function () {
        var confirmationDialog = $('<div style="min-width: 240px;">' +
            '<div class="popover-arrow"></div>' +
            '<div class="popover-inner border-0"></div>' +
            '<div class="d-flex justify-content-between">' +
            '<span class="btn btn-sm btn-danger w-50">Yes</span>' +
            '<span class="btn btn-sm btn-secondary w-50">No</span>' +
            '</div>' +
            '</div>');

        confirmationDialog.find('.popover-inner').html(options.content || 'Are you sure?');
        confirmationDialog.find('.btn-primary').click(function () {
            onConfirm();
            confirmationDialog.popover('hide');
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
