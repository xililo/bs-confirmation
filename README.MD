# bs-comfirmation.js

`bs-comfirmation.js` is a jQuery plugin that provides a confirmation dialog popover for Bootstrap-based applications. It allows you to easily add confirmation functionality to buttons or any other elements in your web application.

## Requirements

- jQuery library (version 3.x or later)
- Bootstrap (version 5.x or later) with poop
- Popper

* `bs-comfirmation.js` rely on the third party library Popper for positioning. You must include `popper.min.js` before `bootstrap.js`, or use one `bootstrap.bundle.min.js` which contains Popper.

## Installation

1. Download the `bs-comfirmation.js` plugin file.
2. Include the jQuery library and Bootstrap CSS and JS files in your HTML file.
3. Include the `bs-comfirmation.js` plugin file after the jQuery and Bootstrap files.

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Include jQuery library -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- Include Bootstrap CSS -->
  <link rel="stylesheet" href="path/to/bootstrap.css">
</head>
<body>
  <!-- Your HTML content here -->

  <!-- Include Bootstrap JS -->
  <script src="path/to/bootstrap.js"></script>
  <!-- Include bs-comfirmation.js plugin -->
  <script src="path/to/bs-comfirmation.js"></script>
</body>
</html>
```

## Usage
To use the `bs-comfirmation.js` plugin, follow these steps:

1. Add the confirmation-btn class to the element(s) that you want to trigger the confirmation dialog.
```html
<button class="confirmation-btn">Delete</button>
```
2. Initialize the plugin by calling the confirmation() method on the selected element(s).
```js
$(document).ready(function() {
  $('.confirmation-btn').confirmation({
    title: 'Confirmation',
    content: 'Are you sure you want to proceed?',
    onConfirm: function() {
      // This function will be executed when the confirmation is confirmed
      console.log('Confirmation confirmed!');
    }
  });
});
```
The `confirmation()` method accepts an options object with the following properties:

- `title` (optional): The title of the confirmation dialog. Default is "Confirmation".
- `content` (optional): The content of the confirmation dialog. Default is "Are you sure?".
- `onConfirm` (optional): A callback function to be executed when the confirmation is confirmed. Default is an empty function.

## Customization
The `bs-comfirmation.js` plugin can be customized to fit your specific needs. You can modify the default options and event handling based on your requirements.

## Changing the Title and Content
You can customize the title and content of the confirmation dialog by providing values for the `title` and `content` options when initializing the plugin.
```js
$('.confirmation-btn').confirmation({
  title: 'Delete Confirmation',
  content: 'Are you sure you want to delete this item?'
});
```
## Handling the Confirmation
To perform specific actions when the confirmation is confirmed, you can provide a callback function for the `onConfirm` option.
```js
$('.confirmation-btn').confirmation({
  onConfirm: function() {
    // Perform the desired action here
    console.log('Confirmation confirmed!');
  }
});
```
Inside the onConfirm function, you can execute any custom logic or trigger any necessary operations.

## Styling
comming soon.