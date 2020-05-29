FROM node:12.17.0-stretch-slim

# RUN apt-get install -y apt-utils

# Create the App folder, set it as the working folder and
# use ADD to copy source code to the working folder from the current location. 
RUN mkdir -p /app 
WORKDIR /app
ADD . /app
RUN npm install

# Open a public facing port to the API on the image.
EXPOSE 3000

# Create a batch file. 
RUN echo "#!/usr/bin/env sh \n \
node /app/src/app.js" > go.sh
RUN chmod 0755 go.sh

CMD ["./go.sh"]

# To run locally use docker build -t LEARN_API:VER_1 . This will create an image with the tag Latest
# Build Syntax - docker build -t IAMGE_NAMGE:TAG.
# docker run --rm -p 3000:3000 IMAGE_NAME:TAG
# Try pushing Docket Hub to learn

# Build and push to a different registry that is not Local
# docker build -t docker.moveaws.com:443/datapipeline/parcel_heatmaps_base_image:latest .
# docker push docker.moveaws.com:443/datapipeline/parcel_heatmaps_base_image:latest

# docker exec -it <container name> /bin/bash
