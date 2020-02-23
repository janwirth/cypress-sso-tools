
Feature: Image Upload for used vehicles

    I want to upload images for a car

    Scenario: Stock Controller uploads an image for a used vehicle
        Given Stock Controller is logged in
        And on a used vehicle detail page
        When I drop the front view of the used Nissan on the page main section
        Then the page shows a the image and an upload progress bar
        Then the page shows that that specific image is uploaded
        When I click "Front view" button on the image
        Then that image is marked as "front view"
        When I reload the page
        Then I see that specific image and it is marked as "front view"
