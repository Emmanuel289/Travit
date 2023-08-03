from djoser.views import UserViewSet
from rest_framework import status
from rest_framework.response import Response

from .models import User


class ActivateUserViewSet(UserViewSet):
    queryset = User.objects.all()

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        print("serializer class is", serializer_class)
        kwargs.setdefault("context", self.get_serializer_context())

        # this line is the only change from the base implementation
        kwargs["data"] = {"uid": self.kwargs["uid"], "token": self.kwargs["token"]}

        return serializer_class(*args, **kwargs)

    def activation(self, request, uid, token, *args, **kwargs):
        try:
            super().activation(request, *args, **kwargs)
        except Exception as e:
            return Response({"Error in activation": e})
        return Response(status=status.HTTP_204_NO_CONTENT)
