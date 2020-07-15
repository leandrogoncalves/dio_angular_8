#! /bin/bash

echo "=============== Bem vindo ao Download Stream =================="

{ #try
    COMAND_EXIST=`which ffmpeg`
} || { #catch
    echo "Você precisa instalar o ffmpeg, utilize o comand 'choco install ffmpeg' "
    exit
}
#  echo $COMAND_EXIST
# echo $COMAND_EXIST | grep -c "which:"

# if [ `echo $COMAND_EXIST | grep -c "which: no" ` -gt 0 ]
# then
#     echo "Você precisa instalar o ffmpeg, utilize o comand 'choco install ffmpeg' "
#     exit
# fi
echo "Informe a url .m3u8 do video"
read video_url

echo "informe o nome do arquivo de saida .mp4"
read video_name

# echo $COMAND_EXIST
ffmpeg -i $video_url \
    -c copy \
    -bsf:a aac_adtstoasc "${video_name}.mp4"

echo " "
echo "=============== Downlaod concluido com sucesso =================="