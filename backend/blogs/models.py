from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name
    
class Blog(models.Model):
        STATUS_CHOICES = (
            ("DRAFT", "Draft"),
            ("PUBLISHED", "Published"),
        )

        title = models.CharField(max_length=255)
        slug = models.SlugField(unique=True)
        excerpt = models.TextField()
        content = models.TextField()
        conclusion = models.TextField(blank=True)
        image = models.ImageField(upload_to="blogs/")

        category = models.ForeignKey(
            Category,
            on_delete=models.SET_NULL,
            null=True,
            related_name="blogs"
        )

        status = models.CharField(
            max_length=20,
            choices=STATUS_CHOICES,
            default="DRAFT"
        )

        is_featured = models.BooleanField(default=False)
        created_at =models.DateTimeField(auto_now_add=True)

        def __str__(self):
            return self.title
        

class BlogSection(models.Model):
    blog = models.ForeignKey(
        Blog,
        on_delete=models.CASCADE,
        related_name="sections"
    )
    title = models.CharField(max_length=255)
    content = models.TextField()
    order = models.PositiveIntegerField(default=1)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title
