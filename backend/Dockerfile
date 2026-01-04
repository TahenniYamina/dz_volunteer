# === Dockerfile ===
FROM python:3.12-slim

# Répertoire de travail
WORKDIR /app

# Variables d'environnement Python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Dépendances système pour MySQL et compilation Python
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    gcc \
    default-mysql-client \
    && rm -rf /var/lib/apt/lists/*

# Copier les dépendances Python
COPY requirements.txt .

# Installer Python
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copier le projet
COPY . .

# Collecter les fichiers statiques (ignore les erreurs)
RUN python manage.py collectstatic --noinput || true

# Exposer le port
EXPOSE 8000

# CMD par défaut : Gunicorn pour prod
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "dz_volunteer.wsgi:application"]
