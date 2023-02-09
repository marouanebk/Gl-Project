
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_swagger.views import get_swagger_view
from rest_framework.schemas import get_schema_view


schema_view = get_swagger_view(title='Your API Title')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('annonce.urls')),
    path('authApi/', include('base.api.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
    path('accounts/', include('allauth.urls')),
    # path('api-docs/', schema_view),
    

    path('api-docs/', get_schema_view(
        title="Your Project",
        description="API for all things …"
    ), name='api-docs'),
    
    ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
