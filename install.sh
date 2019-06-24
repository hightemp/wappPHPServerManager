#!/usr/bin/env bash
mkdir /usr/share/wappPHPServerManager
mkdir /etc/wappPHPServerManager
yes | cp -f ./dist/server.js /usr/share/wappPHPServerManager
yes | cp -f ./wappPHPServerManager.service /usr/lib/systemd/system
systemctl daemon-reload
systemctl enable wappPHPServerManager
systemctl start wappPHPServerManager
