# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'qulc#%=e@721qyz==jn#6n)#4v+rcxv)v-p7fc!ey29$5#pi1c'

DEBUG = True
ALLOWED_HOSTS = ['*']

# settings_local.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'volunteer_db',
        'USER': 'root',
        'PASSWORD': 'projetGL12@',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
