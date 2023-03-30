from django.test import TestCase
from django.forms import ValidationError
from users.models import User


class UserTestCase(TestCase):

    def test_valid_user(self):
        User.objects.create(email='user@example.com', password='password')
        user = User.objects.get(email='user@example.com')
        self.assertEqual(user.email, 'user@example.com')
        self.assertEqual(user.password, 'password')

    def test_invalid_user(self):
        user = User.objects.create()

        with self.assertRaises(ValidationError):
            user.full_clean()
