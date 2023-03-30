from django.test import TestCase
from django.forms import ValidationError
from destinations.models import Destination


class DestinationTestCase(TestCase):

    def test_valid_destination(self):
        Destination.objects.create(name="test destination", description="test description",
                                   image="test image.jpg", weather="test weather", currency="test currency", timezone="test timezone")
        Destination.objects.create(
            name="second test destination", description="second test description")

        first_destination = Destination.objects.get(name="test destination")
        second_destination = Destination.objects.get(
            name="second test destination")

        self.assertEqual(len(Destination.objects.all()), 2)
        self.assertEqual(Destination.objects.first(), first_destination)
        self.assertEqual(Destination.objects.get_queryset()
                         [1], second_destination)

        self.assertEqual(first_destination.name, "test destination")
        self.assertEqual(first_destination.description, "test description")
        self.assertEqual(first_destination.image, "test image.jpg")
        self.assertEqual(first_destination.weather, "test weather")
        self.assertEqual(first_destination.currency, "test currency")
        self.assertEqual(first_destination.timezone, "test timezone")

    def test_invalid_destination(self):
        destination = Destination.objects.create(
            name="test destination")

        with self.assertRaises(ValidationError):
            destination.full_clean()
