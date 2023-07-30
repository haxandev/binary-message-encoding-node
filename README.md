### Node JS Binary Encoding

```sh
git clone https://github.com/haxandev/binary-message-encoding.git
```

Then install the dependencies **RUN** command:

```sh
make install
```

Make sure Docker is installed and running on your system and after that just run **make up** to run the container.


Here is the postman collection:
```sh
https://github.com/haxandev/binary-message-encoding/blob/master/Encoding.postman_collection.json
```


I have created separate functions for encode and decode, so we can use it anywhere we need to encode/decode the request, also if we have any image as a binary then i have created a seprate function for it. It can be improve more by keep the image or any file in the same function. 
I have try to make the code in a way that it can be reusable and easy to understand.

Used Docker, so it is easy to deploy locally and for collaboration. I have also uploaded one postman collection so you can test it, create three endpoints.

```sh
http://localhost:8080/api/encode
```

```sh
http://localhost:8080/api/decode
```

```sh
http://localhost:8080/api/store-image
```

