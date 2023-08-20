### Node JS Binary Encoding

```sh
git clone https://github.com/haxandev/binary-message-encoding.git
```

Then install the dependencies **RUN** command:

```sh
make install
```

Make sure Docker is installed and running on your system and after that just run **make up** to run the container.


Here is the Postman collection:
```sh
https://github.com/haxandev/binary-message-encoding/blob/master/Encoding.postman_collection.json
```


I have created separate functions for encode and decode, so we can use it anywhere we need to encode/decode the request, also if we have any image as a binary then I have created a separate function for it. It can be improved more by keeping the image or any file in the same function. 
I have try to make the code in a way that it can be reusable and easy to understand.

Used Docker, so it is easy to deploy locally and for collaboration. I have also uploaded one Postman collection so you can test it, and create three endpoints.

```sh
http://localhost:8080/api/encode
```

```sh
http://localhost:8080/api/decode
```

```sh
http://localhost:8080/api/store-image
```

