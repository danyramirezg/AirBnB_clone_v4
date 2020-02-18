$(document).ready(function () {
  /* List for store amenities names */
  const amenities = [];
  const amenitiesId = [];
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      amenities.push($(this).data('name'));
      amenitiesId.push($(this).data('id'));
    } else if ($(this).prop('checked') === false) {
      const index = amenities.indexOf($(this).data('name'));
      amenities.splice(index, 1);
      amenitiesId.splice(index, 1);
    }

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


  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){

        for (place of data){

            $(".places").append(`<article>

						<div class="title">

							<h2>${ place.name }</h2>

							<div class="price_by_night">

								${ place.price_by_night }

							</div>
						</div>
						<div class="information">
							<div class="max_guest">
								<i class="fa fa-users fa-3x" aria-hidden="true"></i>

								<br />

								${ place.max_guest } Guests

							</div>
							<div class="number_rooms">
								<i class="fa fa-bed fa-3x" aria-hidden="true"></i>

								<br />

								${ place.number_rooms } Bedrooms
							</div>
							<div class="number_bathrooms">
								<i class="fa fa-bath fa-3x" aria-hidden="true"></i>

								<br />

								${ place.number_bathrooms } Bathroom

							</div>
						</div>

						<!-- **********************
		 USER
		 **********************  -->

						<div class="user">

							<strong>Owner: </strong>

						</div>
						<div class="description">

							${ place.description }

						</div>

					</article> <!-- End 1 PLACE Article -->`

)
        }

    }
 });

 //When the BUTTON tag is clicked, a new POST request to places_search

 $(":button").click(function(){
   $("article").remove()
   send_data = {"amenities": amenitiesId}
    $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    data: JSON.stringify(send_data),
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){

        for (place of data){

            $(".places").append(`<article>

						<div class="title">

							<h2>${ place.name }</h2>

							<div class="price_by_night">

								${ place.price_by_night }

							</div>
						</div>
						<div class="information">
							<div class="max_guest">
								<i class="fa fa-users fa-3x" aria-hidden="true"></i>

								<br />

								${ place.max_guest } Guests

							</div>
							<div class="number_rooms">
								<i class="fa fa-bed fa-3x" aria-hidden="true"></i>

								<br />

								${ place.number_rooms } Bedrooms
							</div>
							<div class="number_bathrooms">
								<i class="fa fa-bath fa-3x" aria-hidden="true"></i>

								<br />

								${ place.number_bathrooms } Bathroom

							</div>
						</div>

						<!-- **********************
		 USER
		 **********************  -->

						<div class="user">

							<strong>Owner: </strong>

						</div>
						<div class="description">

							${ place.description }

						</div>

					</article> <!-- End 1 PLACE Article -->`

)
        }

    }
 });

 })

}); //End document ready




