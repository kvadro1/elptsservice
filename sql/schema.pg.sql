DROP DATABASE IF EXISTS eptsservice;
create database eptsservice;
CREATE USER eptsservice WITH PASSWORD 'eptsservice';
GRANT ALL PRIVILEGES ON DATABASE eptsservice to eptsservice;
ALTER USER eptsservice CREATEDB;
