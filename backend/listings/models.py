from django.db import models

# Create your models here.
class Property(models.Model):
    PROPERTY_STATUS = (
        ("FOR SELL", "For Sell"),
        ("FOR RENT", "For Rent"),
    )

    PROPERTY_TYPE =(
        ("VILLA", "Villa"),
        ("PENTHOUSE", "Penthouse"),
    )

    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    price = models.CharField(max_length=100)
    type = models.CharField(max_length=50, choices=PROPERTY_TYPE)
    status = models.CharField(max_length=50, choices=PROPERTY_STATUS)
    beds = models.IntegerField()
    baths = models.IntegerField()
    size = models.CharField(max_length = 100)
    image = models.ImageField(upload_to="properties/")
    is_off_plan = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title