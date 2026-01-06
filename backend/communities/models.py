from django.db import models

# Create your models here.
class Community(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(unique=True)
    image = models.ImageField(upload_to="communities/")
    is_featured = models.BooleanField(default=True)

    def __str__(self):
        return self.name
