# wait_for_db.py
import time
import pymysql
import os

db_host = os.environ.get("DB_HOST")
db_user = os.environ.get("DB_USER")
db_pass = os.environ.get("DB_PASSWORD")
db_name = os.environ.get("DB_NAME")

while True:
    try:
        conn = pymysql.connect(
            host=db_host,
            user=db_user,
            password=db_pass,
            database=db_name,
        )
        conn.close()
        print("=== MySQL est prêt ! ===")
        break
    except Exception:
        print("MySQL pas encore prêt, nouvelle tentative dans 3s...")
        time.sleep(3)
  