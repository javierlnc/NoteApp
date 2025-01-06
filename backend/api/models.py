from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    numberid = models.CharField(max_length=100, unique=True)
    username = models.CharField(max_length=100, unique=True)
    REQUIRED_FIELDS = ['email', 'username', 'first_name', 'last_name']
    USERNAME_FIELD = 'numberid'
    
    def __str__(self):
        return self.numberid
    
class Notes(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='notes')
    
    def __str__(self):
        return self.title