#! /bin/bash

dir="${1}"
$(sleep 0.3; open -a 'Google Chrome' "http://localhost/${dir}/index.html")&
node src/server.js
