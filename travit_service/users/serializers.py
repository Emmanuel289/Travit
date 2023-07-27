# from rest_framework import serializers
from djoser.serializers import \
  UserCreatePasswordRetypeSerializer as BaseUserCreatePasswordRetypeSerializer

from .models import User


class UserCreatePasswordRetypeSerializer(BaseUserCreatePasswordRetypeSerializer):
    class Meta(BaseUserCreatePasswordRetypeSerializer.Meta):
        fields = [
            "id",
            "first_name",
            "last_name",
            "username",
            "email",
            "password",
            "re_password",
        ]
