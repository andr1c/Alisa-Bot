#!/usr/bin/bash

echo -e "ＩＮＩＣＩＡＮＤＯ ＩＮＳＴＡＬＡＣＩＯ́Ｎ"
apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
git clone https://github.com/elrebelde21/NovaBot-MD
cd NovaBot-MD 
yarn install
npm install
echo -e "Ｇｒａｃｉａｓ ｐｏｒ ｓｕｓ ｐｒｅｆｅｒｅｎｃｉａｓ ｅｌ ＮｏｖａＢｏｔ-ＭＤ"
npm start
