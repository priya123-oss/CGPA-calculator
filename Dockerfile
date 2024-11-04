FROM httpd:latest

#copy the files into container
COPY . ./htdocs

EXPOSE 5505

WORKDIR /usr/src/app