# HTTP Basic Authentication - Demo

In this repository, you find some files to illustrate the *HTTP Basic Authentication* algorithm.

## Requirements

To run this small demo application, you need **Docker** and **Docker Compose**. See the [Download and Install](https://docs.docker.com/desktop/#download-and-install) section for *Docker Desktop* for installing Docker (along with Docker Compose) on either Windows or macOS.

## Running the Demo

On the command line, navigate to the local clone of this repository and fire up docker compose:

```bash
# From within your local clone of this repository:
docker-compose up
```

This command will fire up an Apache webserver in a docker container. While running, you can access the demo website in any browser at [http://localhost:8080](http://localhost:8080).

Incase you made changes to the apache configuration or in `.htaccess` and `.htpasswd` files respectively, you need to rebuild the docker container before starting. You can do this using the `--build` flag:

```bash
# Using the --build flag for rebuilding the container
docker-compose up --build
```