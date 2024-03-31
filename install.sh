# Código creado por @gata_dios      

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución      

echo -e "\e[35m
　╭━━━━━━╮
 ╭┃ ╭━━━━╮
 ┃┃ ╰━━━━╯
 ┃┃ ┈👉🎮⌨️👍
 ╰┃ ┈┃ ─┌ ┈┃
　╰━╯ ┈ ╰━╯
├┬┴┬┴ ιηι¢ιαη∂σ ιηѕтαℓα¢ισ́η αυтσмάтι ┬┴┬┴┤ \n\e[0m" 

: <<'COMMENT'
...
COMMENT

echo -e "\033[01;93m ＰＲＥＰＡＲＡＮＤＯ ＩＮＳＴＡＬＡＣＩＯＮ...\n\033[0m"
mp3_array=("install_automatic1.mp3" "install_automatic2.mp3" "install_automatic3.mp3" "install_automatic4.mp3" "install_automatic5.mp3" "install_automatic6.mp3" "install_automatic7.mp3" "install_automatic8.mp3" "install_automatic9.mp3" "install_automatic10.mp3" "install_automatic11.mp3" "install_automatic12.mp3")
random_mp3=${mp3_array[$RANDOM % ${#mp3_array[@]}]}
if wget -q https://github.com/GataNina-Li/GataBot-MD/raw/master/musicSH/"$random_mp3"; then
echo -e ""
while true; do
mpv --no-terminal "$random_mp3" &
sleep 2
wait
done &
else
echo -e ""
fi
 
echo -e "\033[01;32m\033[01m𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙽𝙳𝙾 𝙳𝙴𝙿𝙴𝙽𝙳𝙴𝙽𝙲𝙸𝙰𝚂!!\n\033[0m" 
echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▀▀ █ ▀█▀
█▄█ █ ░█░\n\e[0m"

if command -v git >/dev/null 2>&1; then
echo -e "\033[01;33mGit ya estaba instalado anteriormente.\033[0m"
else
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Git. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/andr1c/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mGit se ha instalado correctamente.\n\033[0m" 
fi
fi
 
echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▄░█ █▀█ █▀▄ █▀▀ ░█ █▀
█░▀█ █▄█ █▄▀ ██▄ ▄█ ▄█\n\e[0m"

if command -v node >/dev/null 2>&1; then
echo -e "\033[01;33mNodejs ya estaba instalado anteriormente.\033[0m"
else
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/andr1c/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mNode.js se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▀ █▀ █▀▄▀█ █▀█ █▀▀ █▀▀
█▀ █▀ █░▀░█ █▀▀ ██▄ █▄█\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
echo -e ""
else
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar FFmpeg. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/andric/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "" 
fi
fi

echo -e ""

if command -v convert >/dev/null 2>&1; then
echo -e ""
else
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar ImageMagick. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/andr1c/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mImageMagick se ha instalado correctamente.\n\033[0m" 
fi
fi

echo -e ""

if command -v yarn >/dev/null 2>&1; then
echo -e "\033[01;33m𝙻𝙾𝚂 𝙿𝙰𝚀𝚄𝙴𝚃𝙴𝚂 𝙳𝙴 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾́𝙽 𝚈𝙰 𝙵𝚄𝙴𝚁𝙾𝙽 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙽𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴\033[0m"
else
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/andr1c/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;33m𝙻𝙾𝚂 𝙿𝙰𝚀𝚄𝙴𝚃𝙴𝚂 𝙳𝙴 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾́𝙽 𝚈𝙰 𝙵𝚄𝙴𝚁𝙾𝙽 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙽𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴\033[0m"
fi
fi

echo -e "\e[36m🇹 🇴 🇩 🇴  🇨 🇴 🇷 🇷 🇪 🇨 🇹 🇴\n\e[0m"
echo -e "\033[01;32m\033[01m\nTodas las dependencias se han instalado correctamente.\n\033[0m" 

echo -e "\e[35mＩＮＳＴＡＬＡＮＤＯ ＧＩＴ ＣＬＯＮＥ\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/andr1c/NovaBot-MD.git
echo -e "\033[01;32m\033[01mLa clonación se ha descargado e instalado correctamente.\n\033[0m"

echo -e "\033[01;32m\033[01mCambiando al directorio del repositorio!!\n\033[0m" 
cd NovaBot-MD

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▄█ ▄▀█ █▀█ █▄░█
░█░ █▀█ █▀▄ █░▀█\n\e[0m"

echo -e "\033[0;34mSe actualizará yarn automáticamente. Aguarde momento por favor...\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "" 
else
echo -e "\033[01;32m\033[01mYarn se ha actualizado correctamente.\n\033[0m" 
fi

echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▄░█ █▀█ █▀▄▀█
█░▀█ █▀▀ █░▀░█\n\e[0m"

echo -e "\033[0;34mSe esta instalando NPM (los módulos) automáticamente. estos puede demorar entre 10 a 20 minutos depende a tu conexión a Internet, Aguarde un momento por favor.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "" 
else
echo -e "\033[01;32m\033[01mNPM se ha instalado correctamente..\n\033[0m" 
fi


: <<'COMMENT'
v="${b}\033[1;32m"
v1="${b}\033[32m"
b="\033[0m"

menu() {
	#NovaBot-MD
	echo -e "${v1} MENÚ DE CONFIGURACIÓN"
	printf "\n"
	printf "${v1}[${b}01${v1}]${v} Visistar Grupo de Actualizaciones\n"
	printf "\n"
	printf "${v1}[${b}02${v1}]${v} Elegir idioma español\n"
	printf "\n"
	printf "${v1}[${b}03${v1}]${v} Elegir idioma inglés\n"
	printf "\n"
	printf "${v1}[${b}04${v1}]${v} Continuar\n"
	printf "\n"
}

menu_ayuda() {
    #printf "${v1}[${b}++${v1}]${v} GataBot-MD${b}: "
	read opcion
	case $opcion in
            01|1)
                am start -a android.intent.action.VIEW https://chat.whatsapp.com/DVhu9S9Zr7cBFFl26N61U3 &>> /dev/null
                echo -e "${b}[${v1}++${b}]${v} Accediendo al Grupo Oficial\n"
                
                ;;
            02|2)
                echo -e "${b}[${v1}++${b}]${v} Seleccionado idioma español\n"
                
                ;;
            03|3)
                echo -e "${b}[${v1}++${b}]${v} Seleccionado idioma inglés\n"
                
                ;;
	    04|4)
	        iniciar
                echo -e "${b}[${v1}++${b}]${v} Continuando...\n"
                
                ;;
            *)
                echo -e "${v1}Comando: '"${r1}${opcion}${v1}"' invalido."
		echo ""
		inicio
                ;;
        esac
}

menu
menu_ayuda
COMMENT

clear
echo -e ""

echo -e "\e[31m
┏╍┅┅┅╍⪻ 𝐍𝐨𝐯𝐚𝐁𝐨𝐭-𝐌𝐃 ⪼┅┅┅┅┅┓
┋❥ 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 : andr1c
┋❥ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 : w
┋❥ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 
┋❥ 𝐆𝐢𝐭𝐇𝐮𝐛 : github.com/andr1c
┋❥ 𝐌𝐞𝐫𝐜𝐚𝐝𝐨 𝐩𝐚𝐠𝐨 : 0000003100059201491917
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋❥ 𝐍𝐨𝐬 𝐨𝐥𝐯𝐢𝐝𝐞𝐧 𝐝𝐞 𝐚𝐩𝐨𝐲𝐚𝐫 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐫𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐨𝐟𝐢𝐜𝐢𝐚𝐥 
┋❥ 𝐜𝐨𝐧 𝐮𝐧𝐚 𝐞𝐬𝐭𝐫𝐞𝐥𝐥𝐢𝐭𝐚𝐬 🌟, 𝐨 𝐬𝐢 𝐝𝐞𝐬𝐞𝐚 𝐡𝐚𝐜𝐞𝐫 𝐮𝐧𝐚 𝐝𝐨𝐧𝐚𝐜𝐢𝐨𝐧 
┋❥ 𝐯𝐨𝐥𝐮𝐧𝐭𝐚𝐫𝐢𝐚 𝐩𝐚𝐫𝐚 𝐚𝐲𝐮𝐝𝐚𝐫 𝐚 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐚𝐫 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐩𝐫𝐨𝐲𝐞𝐜𝐭𝐨
┋❥ 𝐥𝐨𝐬 𝐩𝐮𝐞𝐝𝐞 𝐡𝐚𝐜𝐞𝐫 𝐩𝐨𝐫 𝐧𝐮𝐞𝐬𝐭𝐫𝐨 𝐦𝐞𝐫𝐜𝐚𝐝𝐨 𝐩𝐚𝐠𝐨 ☺. 
┋┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅
┋❥ 𝐍𝐎𝐓𝐀 : 𝐄𝐥 𝐛𝐨𝐭 𝐬𝐞 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜𝐚𝐦𝐞𝐧𝐭𝐞 𝐚𝐥 𝐠𝐫𝐮𝐩𝐨 𝐭𝐞𝐬𝐭 𝐝𝐨𝐧𝐝𝐞 𝐚𝐡𝐲 𝐬𝐞 𝐝𝐚𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 𝐬𝐨𝐛𝐫𝐞 𝐞𝐥 𝐛𝐨𝐭 𝐲 𝐬𝐞 𝐡𝐚𝐜𝐞𝐫 𝐩𝐫𝐮𝐞𝐛𝐚 𝐞𝐭𝐜.
┗┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┛

　　｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶ 
ＧＲＡＣＩＡＳ ＰＯＲ ＳＵＳ ＰＲＥＦＥＲＥＮＣＩＡＳ 💞
\n\e[0m"
    
sleep 15 && pkill mpv > /dev/null 2>&1 && sleep 2 && rm -f /data/data/com.termux/files/home/"$random_mp3" &
echo -e "\033[01;32m\033[01mＩＮＩＣＩＡＮＤＯ ＮＯＶＡＢＯＴ-ＭＤ 🚀\n\033[0m"
npm start
