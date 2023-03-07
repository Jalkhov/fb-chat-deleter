@echo off
set VER=1.1

sed -i -e "s/version>.+?</version>%VER%</" install.rdf

set XPI=fb-chat-deleter-%VER%.xpi
if exist %XPI% del %XPI%
zip -r9q %XPI% * -x .git/* .gitignore LICENSE README.md *.cmd *.xpi
