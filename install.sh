#!/usr/bin/bash

echo -e "
　╭━━━━━━╮
 ╭┃ ╭━━━━╮
 ┃┃ ╰━━━━╯
 ┃┃ ┈👉🎮⌨️👍
 ╰┃ ┈┃ ─┌ ┈┃
　╰━╯ ┈ ╰━╯
├┬┴┬┴ ιηι¢ιαη∂σ ιηѕтαℓα¢ισ́η αυтσмάтι ┬┴┬┴┤ " 

apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
echo -e "\033[1;35m"
git clone https://github.com/elrebelde21/NovaBot-MD.git
echo -e "\033[01;32m\033[01mLa clonación se ha descargado e instalado correctamente..\n\033[0m"

echo -e "\033[01;32m\033[01mCambiando al directorio del repositorio!!\n\033[0m" 
cd NovaBot-MD
echo -e "\033[01;32m\033[01mInstalado los modulos (YARN)\nEstos puede demorar depende de tu conexión a Internet, entre 5, 10 minutos.\n\033[0m"
npm audit fix && npm i imgbb-uploader && npm cache clean -f && npm install --dev && npm i got && yarn install

echo -e '\e[1;32m
Descarga Completada al 100%
Creador: elrebelde
Youtube: https://www.youtube.com/elrebelde.21

Escribe npm start para iniciar el bot
En caso que el bot presente algun problema, comunicate con el creador su numero esta mas arriba'
