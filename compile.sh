cat lilychat.tar.gz* > lilychat.tar.gz
tar xzvf lilychat.tar.gz
cd ./bundle/programs/server
npm install
npm update
npm cache clean
cd ../..
node main.js
