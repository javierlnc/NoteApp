from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    numberid = models.CharField(max_length=100, unique=True)
    username = models.CharField(max_length=100, unique=True)
    REQUIRED_FIELDS = ['email']
    USERNAME_FIELD = 'numberid'
    
    def __str__(self):
        return self.numberid