from django.urls import path
from rest_framework import routers
import users.views as views

router = routers.SimpleRouter()

urlpatterns = router.urls + [
    path('', views.UserList.as_view(), name='user-list' ),
    path('<int:pk>', views.UserDetail.as_view(), name='user-detail' )
]