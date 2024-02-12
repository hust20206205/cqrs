#!/bin/bash
echo "Tải offline"

echo "Tải image mysql"
docker pull mysql
docker save -o mysql_image.tar mysql
docker load -i mysql_image.tar
echo "mysql Done!"



echo "Tải image node"
docker pull node
docker save -o node_image.tar node
docker load -i node_image.tar
echo "node Done!"




