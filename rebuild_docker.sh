#!/usr/bin/env bash
docker stop my_node_app
docker rm my_node_app
docker rmi gb-demo
docker build -t gb-demo .
docker run -d -p 127.0.0.1:80:3000 --name my_node_app gb-demo
# docker run --rm -ti -p 80:3001 --name my_node_app gb-demo-app