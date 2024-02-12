#!/bin/bash
echo "Tải offline"

echo "Tải image mysql"
# docker pull mysql
# docker save -o mysql_image.tar mysql
docker load -i mysql_image.tar
echo "mysql Done!"



# echo "Tải image node"
# docker pull node
# docker save -o node_image.tar node
# docker load -i node_image.tar
# echo "node Done!"






# echo "Tải image nats"
# docker pull nats
# docker save -o nats_image.tar nats
# docker load -i nats_image.tar
# echo "nats Done!"



