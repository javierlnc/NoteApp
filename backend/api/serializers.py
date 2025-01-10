from .models import CustomUser, Note
from rest_framework import serializers
from django.contrib.auth import authenticate


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name']
        
        
class UserRegistrationSerializar(serializers.ModelSerializer):
     
    password = serializers.CharField(write_only=True)
    re_password = serializers.CharField(write_only=True)
     
    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'first_name', 'last_name', 'password', 're_password']
        extra_kwargs = {"password": {"write_only": True}}
        
    def validate(self, attrs):
        if attrs['password'] != attrs['re_password']:
            raise serializers.ValidationError({"password": "Password fields didn't match"})
        
        password = attrs.get('password')
        if len(password) < 8:
            raise serializers.ValidationError({"password": "Password must be at least 8 characters"})
        return attrs
    
    def create(self, validated_data):
        username = validated_data.pop('email')
        password = validated_data.pop('password')
        validated_data.pop('re_password')
        
        return CustomUser.objects.create_user(username=username,email=username,password=password, **validated_data)
    
class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, attrs):
        user = authenticate(**attrs)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
    
class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'title', 'content', 'created_at', 'author']
        extra_kwargs = {"author": {"read_only": True}}
        
  
  
   