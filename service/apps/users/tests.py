from django.forms import ValidationError
from django.test import TestCase
from apps.users.models import User


class UserTestCase(TestCase):
    def test_valid_user(self):
        User.objects.create(
            first_name="user first",
            last_name="user last",
            email="user@example.com",
            password="password",
        )
        user = User.objects.get(email="user@example.com")
        self.assertEqual(user.first_name, "user first")
        self.assertEqual(user.last_name, "user last")
        self.assertEqual(user.email, "user@example.com")
        self.assertEqual(user.password, "password")

    def test_invalid_user(self):
        user = User.objects.create()

        with self.assertRaises(ValidationError):
            user.full_clean()
