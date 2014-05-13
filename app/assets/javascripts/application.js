// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require underscore
//= require s3_multipart/lib

$(function() {
  $(".submit-button").click(function() { // The button class passed into multipart_uploader_form (see "Getting Started")
    new window.S3MP({
      bucket: "BUCKET",
      fileInputElement: "#video_file",
      fileList: $("#video_file").get(0).files, // An array of files to be uploaded (see "Getting Started")
      onStart: function(upload) {
        console.log("File %d has started uploading", upload.key)
      },
      onComplete: function(upload) {
        console.log("File %d successfully uploaded", upload.key)
      },
      onPause: function(key) {
        console.log("File %d has been paused", key)
      },
      onCancel: function(key) {
        console.log("File upload %d was canceled", key)
      },
      onError: function(err) {
        console.log("There was an error")
      },
      onProgress: function(num, size, done, percent, speed) {
        console.log("File %d is %f percent done (%f of %f total) and uploading at %s", num, percent, done, size, speed);
      }
    });
  });
});
