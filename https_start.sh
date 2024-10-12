#!/bin/bash
# >>> For installing mkcert
# sudo apt install mkcert
# mkcert -install
# mkcert localhost
# npm install -g local-ssl-proxy
#
# For starting https 

local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
