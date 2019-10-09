dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t droppinhero ./bin/release/netcoreapp2.2/publish

docker tag droppinhero registry.heroku.com/droppinhero/web

docker push registry.heroku.com/droppinhero/web

heroku container:release web -a droppinhero

# sudo chmod 755 deploy.shsudo chmod 755 deploy.sh
# ./deploy.sh