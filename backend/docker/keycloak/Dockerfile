FROM quay.io/keycloak/keycloak:22.0.0
ENV TZ=Europe/Brussels
USER root
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime\
 && echo $TZ > /etc/timezone
USER 1000

