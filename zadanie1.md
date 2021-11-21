docker build . -t mazurspraw1 docker run -p 4000:4000 -d mazurspraw1

Aby zbudować obraz trzeba użyć komendy docker images, a potem skopiowac id obrazu, który jest w poleceniu wyżej, potem uzywamy komendy: 

docker run -p 4000:4000 -d

informacje z punktu 1a: komenda ps, skopiować id kontenera i użyć komendy docker logs 
liczba warstw - docker inspect
