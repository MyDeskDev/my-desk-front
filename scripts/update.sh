echo "> 새로운 이미지 빌드"
date=$(date '+%Y%m%d%H%M%S')
docker build -t mydesk-front:$date .

echo "> 기존 container 찾기"
CONTAINER_ID=$(docker ps | awk '{ if ($2 == "mydesk-front") print ($1)}')

echo "> stop & remove"
docker stop $CONTAINER_ID && docker rm $CONTAINER_ID

echo "> 새로운 container 띄우기"
NEW_CONTAINER_ID=$(docker container run -d -p 3000:3000 mydesk-front)

echo "> 성공적으로 띄워졌는지 확인"
sleep 5
RESPONSE_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)

if [ $RESPONSE_CODE -lt 400 ]; then
        echo "> Success"
        echo $NEW_CONTAINER_ID
else
        echo "> Fail"
fi