@echo off

:: Restart Docker Compose services
cd .\backend
:: Restart Docker Compose services
echo running docker-compose.yaml file 
    docker compose -f docker-compose.yaml up -d --build 

:: Change directory to \backend and run mvn spring-boot:run
cd  ..\backend
start mvn spring-boot:run

:: Change directory to \frontend and run ng serve
cd  ..\frontend
start ng serve