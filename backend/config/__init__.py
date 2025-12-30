import pymysql

# Installer PyMySQL comme MySQLdb
pymysql.install_as_MySQLdb()

# Forcer la version pour Django
pymysql.version_info = (2, 2, 1, "final", 0)