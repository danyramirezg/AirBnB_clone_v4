$(document).ready(function () {
  /* List for store amenities names */
  const amenities = [];
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      amenities.push($(this).data('name'));
    } else if ($(this).prop('checked') === false) {
      const index = amenities.indexOf($(this).data('name'));
      amenities.splice(index, 1);
    }
    console.log(amenities.length);
    /* if amenities has values update h4 tag else put whitespace on h4 */
    if (amenities.length > 0) {
      $('div.amenities > h4').text(amenities.join(', '));
    } else {
      $('div.amenities > h4').text('');
    }
  });

  /* check  api status */
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response, apiStatus) {
    if (apiStatus === 'success') {
      if (response.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  });
});
