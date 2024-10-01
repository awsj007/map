jQuery(document).ready(function($) {
    // Object to hold states and their corresponding cities
    var cities = {
        'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'],
        'Texas': ['Houston', 'Dallas', 'Austin', 'San Antonio'],
        'Florida': ['Miami', 'Orlando', 'Tampa', 'Jacksonville'],
        'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Bellevue'],
        // Add more states and cities as needed
    };
    // Listen for changes on the state dropdown
    $('#state-dropdown').change(function() {
        var selectedState = $(this).val();
        var cityDropdown = $('#city-dropdown');
        // Clear existing city options
        cityDropdown.empty();
        cityDropdown.append(new Option("Select a city", ""));
        // Populate the city dropdown based on the selected state
        if (cities[selectedState]) {
            $.each(cities[selectedState], function(index, city) {
                cityDropdown.append(new Option(city, city));
            });
        }
    });
});