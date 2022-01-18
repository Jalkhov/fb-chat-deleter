@echo off
set VER=0.3

sed -i -E "s/version>.+?</version>%VER%</" install.rdf

set XPI=fb-chat-deleter-%VER%.xpi
if exist %XPI% del %XPI%
zip -r9q %XPI% * -x .git/* .gitignore update.xml LICENSE README.md *.cmd *.xpi *.exe
