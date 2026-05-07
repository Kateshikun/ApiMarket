import{config} from 'dotenv'
config()

export const MYSQL_DATABASE="railway"
export const MYSQL_PUBLIC_URL="mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_TCP_PROXY_DOMAIN}}:${{RAILWAY_TCP_PROXY_PORT}}/${{MYSQL_DATABASE}}"
export const MYSQL_ROOT_PASSWORD="wMiuGpYKDGDDTuVZsMTJPIoXBdZfejOo"
export const MYSQL_URL="mysql://${{MYSQLUSER}}:${{MYSQL_ROOT_PASSWORD}}@${{RAILWAY_PRIVATE_DOMAIN}}:3306/${{MYSQL_DATABASE}}"
export const MYSQLDATABASE="${{MYSQL_DATABASE}}"
export const MYSQLHOST="${{RAILWAY_PRIVATE_DOMAIN}}"
export const MYSQLPASSWORD="${{MYSQL_ROOT_PASSWORD}}"
export const MYSQLPORT="3306"
export const MYSQLUSER="root"
